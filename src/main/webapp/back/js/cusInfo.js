$(function(){  
   $('#search').bind('click', function(){  
    	var params={};
    	if($("#id").val()!=null&&$("#id").val()!='undefined'){
			params['t.id']=$("#id").val();
		}
    	if($("#cname").val()!=null&&$("#cname").val()!='undefined'){
			params['t.cname']=$("#cname").val();
		}
    	if($("#location").val()!=null&&$("#location").val()!='undefined'){
			params['t.district.id']=$("#location").val();
		}
		if($("#manager").val()!=null&&$("#manager").val()!='undefined'){
			params['t.customermanager.name']=$("#manager").val();
		}
		if($("#level").val()!=null&&$("level").val()!='undefined'){
			params['t.grade.id']=$("#level").val();
		}
		//条件查询
		InitTable('customer_search.action',params);
		/*$.ajax({
			type:'POST',
			data:params,
			url:'http://192.168.1.120:8080/CRM/customer_search',
			dataType:'JSON',
			success:function(data){
				InitTable();
			}
		});*/
 });  
   


	$.ajax({
    	type:'POST',
    	url:'list_select.action',
    	dataType:'JSON',
    	success:function(data){
    		if(data.code==1){
    			$("#level").html("");
    			var html="<option value=''>全部...</option>";
    			for (var i = 0; i < data.obj.grade.length; i++) {
    				
					var level = data.obj.grade[i];
					html+="<option value='"+level.id+"'>";
					html+=level.tiaomu+"</option>";
				}
    			/*var map = data.obj;
    			for (var key in map) {  
    				html+="<option value='"+key+"'>";
    				html+=map[key]+"</option>";
    	        } */
    			
    			$("#level").html(html);
    			
    			
    			$("#location").html("");
    			var html="<option value=''>全部...</option>";
    			for (var i = 0; i < data.obj.district.length; i++) {
    				
					var location = data.obj.district[i];
					html+="<option value='"+location.id+"'>";
					html+=location.tiaomu+"</option>";
				}
    			/*var map = data.obj;
    			for (var key in map) {  
    				html+="<option value='"+key+"'>";
    				html+=map[key]+"</option>";
    	        }  */
    			
    			$("#location").html(html);
    			
    			
    			$("#cus_district").html("");
    			var html="<option value=''>请选择...</option>";
    			for (var i = 0; i < data.obj.district.length; i++) {
    				
					var location = data.obj.district[i];
					html+="<option value='"+location.id+"'>";
					html+=location.tiaomu+"</option>";
				}
    			$("#cus_district").html(html);
    			
    			$("#cus_customermanager").html("");
    			var html="<option value=''>请选择...</option>";
    			for (var i = 0; i < data.obj.customerman.length; i++) {
    				
					var location = data.obj.customerman[i];
					html+="<option value='"+location.id+"'>";
					html+=location.name+"</option>";
				}
    			$("#cus_customermanager").html(html);
    			
    			$("#cus_grade").html("");
    			var html="<option value=''>请选择...</option>";
    			for (var i = 0; i < data.obj.grade.length; i++) {
    				
					var level = data.obj.grade[i];
					html+="<option value='"+level.id+"'>";
					html+=level.tiaomu+"</option>";
				}
    		
    			$("#cus_grade").html(html);
    			
    			
    			$("#satisfaction").html("");
    			var html="<option value=''>请选择...</option>";
    			for (var i = 0; i < data.obj.satisfaction.length; i++) {
    				
					var level = data.obj.satisfaction[i];
					html+="<option value='"+level.id+"'>";
					for (var j = 0; j < Number(data.obj.satisfaction[i].dvalue); j++) {
						html+="☆";
					}
					html+="</option>";
				}
    		
    			$("#satisfaction").html(html);
    			
    			$("#credit").html("");
    			var html="<option value=''>请选择...</option>";
    			for (var i = 0; i < data.obj.credit.length; i++) {
					var l = data.obj.credit[i];
					var v=Number(l.dvalue);
					html+="<option value='"+l.id+"'>";
					//html+=level.tiaomu+"</option>";
					
					for (var j = 0; j < v; j++) {
						html+="☆";
					}
					html+="</option>";
				}
    		
    			$("#credit").html(html);
    		}
    	}
    });


    
    
    
    
});  



var dataObj;
var editRow=undefined;
InitTable('list_customer.action');

function InitTable(url,params){
	dataObj=$('#cus_list_table').datagrid({
		url:url,
		fitColumns:true,
		loadMsg:'数据加载中',
		pagination:true,
		pageNumber:1,
		sortName:"id",
		remoteSort:false,
		queryParams:params,
		columns:[[
	         
		    
	         {field:'cid',title:'序号',width:100,align:'center',formatter: function(value,row,index){
				return index+1;
				}},
	         {field:'id',title:'客户编号',width:100,align:'center',sortable:true,},
	         {field:'cname',title:'名称',width:100,align:'center',editor:{type:'text',options:{required:true}}},
	         {field:'location',title:'地区',width:100,align:'center',editor:{type:'text',options:{required:true}}},
	         {field:'name',title:'客户经理',width:100,align:'center',editor:{type:'text',options:{required:true}},formatter: function(value,row,index){
					if (row.customermanager){
						return row.customermanager.name;
					} else {
						return value;
					}
				}},
	         {field:'level',title:'客户等级',width:100,align:'center',editor:{type:'text',options:{required:true}},formatter: function(value,row,index){
					if (row.grade){
						return row.grade.tiaomu;
					} else {
						return value;
					}
				}},
	        {field:'g',title:'操作',width:100,align:'center',editor:{type:'text',options:{required:true}}, formatter:function(value,row,index){
	        	if(row.customerstatus.dvalue==1){
	        		 return "<img onclick='editCusInfo("+row.id+");' title='编辑' src='../images/bt_edit.gif'/>&nbsp;<img onclick='showOptionDetail("+row.id+");' title='联系人' src='../images/bt_linkman.gif'/>&nbsp;<img onclick='delSaleOption("+row.id+",\""+row.chancesummary+"\");' title='交往记录' src='../images/bt_acti.gif'/>&nbsp;<img onclick='delSaleOption("+row.id+",\""+row.chancesummary+"\");' title='历史订单' src='../images/bt_orders.gif'/>&nbsp;<img onclick='delSaleOption("+row.id+",\""+row.chancesummary+"\");' title='删除' src='../images/bt_del.gif'/>";
	        	}else{
	        		 return "<img onclick='editCusInfo("+row.id+");' title='编辑' src='../images/bt_edit.gif'/>&nbsp;<img onclick='showOptionDetail("+row.id+");' title='联系人' src='../images/bt_linkman.gif'/>&nbsp;<img onclick='delSaleOption("+row.id+",\""+row.chancesummary+"\");' title='交往记录' src='../images/bt_acti.gif'/>&nbsp;<img onclick='delSaleOption("+row.id+",\""+row.chancesummary+"\");' title='历史订单' src='../images/bt_orders.gif'/>";
	             }
	         
	   	 }}
	        
	         ]]
	         
		});
}
//编辑
function editCusInfo(id){
	$.ajax({
		type:'POST',
		url:'list_customerbyid.action',
		data:{'t.id':id},
		dataType:'JSON',
		success:function(data){
			
			$("#editInfoOption").dialog({
				
				onOpen:function(){
					$("#cus_id").val(data.obj.id);
					$("#cus_cname").val(data.obj.cname);
					var count = $("#cus_district option").length;
					for (var i = 0; i < count; i++) {
						if($("#cus_district").get(0).options[i].text==data.obj.district.tiaomu){
							$("#cus_district").get(0).options[i].selected=true;
							break;
						}
					}
					
		
					count=$("#cus_customermanager option").length;
					for (var i = 0; i < count; i++) {
						if($("#cus_customermanager").get(0).options[i].text==data.obj.customermanager.name){
							$("#cus_customermanager").get(0).options[i].selected=true;
						}
					}
					
					count=$("#cus_grade option").length;
					for (var i = 0; i < count; i++) {
						if($("#cus_grade").get(0).options[i].text==data.obj.grade.tiaomu){
							$("#cus_grade").get(0).options[i].selected=true;
						}
					}
					
					count=$("#satisfaction option").length;
					for (var i = 0; i < count; i++) {
						if($("#satisfaction").get(0).options[i].value==data.obj.satisfaction.id){
							$("#satisfaction").get(0).options[i].selected=true;
						}
					}
					//$("#credit").val(data.obj.credit.tiaomu);
					count=$("#credit option").length;
					for (var i = 0; i < count; i++) {
						if($("#credit").get(0).options[i].value==data.obj.credit.id){
							$("#credit").get(0).options[i].selected=true;
						}
					}
					$("#cus_location").val(data.obj.location);
					$("#postcode").val(data.obj.postcode);
					$("#cus_telphone").val(data.obj.telphone);
					$("#fax").val(data.obj.fax);
					$("#website").val(data.obj.website);
					$("#license").val(data.obj.license);
					$("#legal").val(data.obj.legal);
					$("#registermoney").val(data.obj.registermoney);
					$("#yearincome").val(data.obj.yearincome);
					$("#bank").val(data.obj.bank);
					$("#bankaccount").val(data.obj.bankaccount);
					$("#rentnumber").val(data.obj.rentnumber);
					$("#taxnumber").val(data.obj.taxnumber);
					//$("#fax").attr("disabled",true),
					//$("#assigntime").attr("disabled",true),
					//$("#save").attr("onclick","editSaleOption();return false;")
					
				}
				
			});
			
			
			$("#editInfoOption").dialog("open");
			
		}
	});
}


function saveCusInfo(){

	
	$.ajax({
		type:'POST',
		data:{
			't.id':$("#cus_id").val(),
			't.cname':$("#cus_cname").val(),
			't.district.id':$("#cus_district").val(),
			't.customermanager.id':$("#cus_customermanager").val(),
			't.grade.id':$("#cus_grade").val(),
			't.satisfaction.id':$("#satisfaction").val(),
			't.credit.id':$("#credit").val(),
			't.location':$("#cus_location").val(),
			't.postcode':$("#postcode").val(),
			't.telphone':$("#cus_telphone").val(),
			't.fax':$("#fax").val(),
			't.website':$("#website").val(),
			't.license':$("#license").val(),
			't.legal':$("#legal").val(),
			't.registermoney':$("#registermoney").val(),
			't.yearincome':$("#yearincome").val(),
			't.bank':$("#bank").val(),
			't.bankaccount':$("#bankaccount").val(),
			't.rentnumber':$("#rentnumber").val(),
			't.taxnumber':$("#taxnumber").val()
							
		},
	url:'save_customerbyid.action',
	dataType:'JSON',
	success:function(data){
		if(data.code=1){
			$.messager.show({title:"成功提示",msg:'用户信息修改成功',timeout:3000,showType:'slide'});
			dataObj.datagrid('reload');
		}else{
			$.messager.alert('失败提示','用户信息添加失败,原因：'+data.msg,'error');
		}
	}
	});

}


	
function closeDispatchOption(){
	$("#dispatchSaleOption").dialog({
		 closed: true
	});
	}

function closeInfoOption(){
	$("#editInfoOption").dialog({
		 closed: true
	});
	
}


