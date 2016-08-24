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
   
   
 
  
    
    
   
    //获取地区和客户等级列表

	$.ajax({
    	type:'POST',
    	url:'',
    	dataType:'JSON',
    	success:function(data){
    		if(data.code==1){
    			$("#location").html("");
    			var html="<option value=''>全部...</option>";
    			for (var i = 0; i < data.obj.length; i++) {
    				
					var location = data.obj[i];
					html+="<option value='"+location.id+"'>";
					html+=location.tiaomu+"</option>";
				}
    			/*var map = data.obj;
    			for (var key in map) {  
    				html+="<option value='"+key+"'>";
    				html+=map[key]+"</option>";
    	        }  */
    			
    			$("#location").html(html);
    		}
    	}
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

function editCusInfo(id){
	$.ajax({
		type:'POST',
		url:'list_customer?page=1&rows=1',
		data:{'id':id},
		dataType:'JSON',
		success:function(data){
			
			$("#editInfoOption").dialog({
				title:"销售机会管理  > 编辑销售机会",
				onOpen:function(){
					$("#id").val(data.rows[0].id);
					$("#cus_cname").val(data.rows[0].cname);
					var count = $("#cus_district option").length;
					for (var i = 0; i < count; i++) {
						if($("#cus_district").get(0).options[i].text==data.rows[0].district.tiaomu){
							$("#cus_district").get(0).options[i].selected=true;
							break;
						}
					}
					
		
					count=$("#cus_customermanager option").length;
					for (var i = 0; i < count; i++) {
						if($("#cus_customermanager").get(0).options[i].text==data.rows[0].customermanager.name){
							$("#cus_customermanager").get(0).options[i].selected=true;
						}
					}
					
					count=$("#cus_grade option").length;
					for (var i = 0; i < count; i++) {
						if($("#cus_grade").get(0).options[i].text==data.rows[0].grade.tiaomu){
							$("#cus_grade").get(0).options[i].selected=true;
						}
					}
					
					count=$("#satisfaction option").length;
					for (var i = 0; i < count; i++) {
						if($("#satisfaction").get(0).options[i].text==data.rows[0].satisfaction.tiaomu){
							$("#satisfaction").get(0).options[i].selected=true;
						}
					}
					//$("#credit").val(data.rows[0].credit.tiaomu);
					count=$("#credit option").length;
					for (var i = 0; i < count; i++) {
						if($("#credit").get(0).options[i].text==data.rows[0].credit.tiaomu){
							$("#credit").get(0).options[i].selected=true;
						}
					}
					$("#cus_location").val(data.rows[0].location);
					$("#postcode").val(data.rows[0].postcode);
					$("#cus_telphone").val(data.rows[0].telphone);
					$("#fax").val(data.rows[0].fax);
					$("#website").val(data.rows[0].website);
					$("#license").val(data.rows[0].license);
					$("#legal").val(data.rows[0].legal);
					$("#registermoney").val(data.rows[0].registermoney);
					$("#yearincome").val(data.rows[0].yearincome);
					$("#bank").val(data.rows[0].bank);
					$("#bankaccount").val(data.rows[0].bankaccount);
					$("#rentnumber").val(data.rows[0].rentnumber);
					$("#taxnumber").val(data.rows[0].taxnumber);
					//$("#fax").attr("disabled",true),
					//$("#assigntime").attr("disabled",true),
					//$("#save").attr("onclick","editSaleOption();return false;")
					
				}
				
			});
			
			$("#editInfoOption").dialog("open");
			
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


