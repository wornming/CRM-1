$(function(){  
    $('#search').bind('click', function(){  
    	var params={};
    	if($("#cname").val()!=null&&$("#cname").val()!='undefined'){
			params['']=$("#cname").val();
		}
		if($("#summary").val()!=null&&$("#summary").val()!='undefined'){
			params['']=$("#zj1").val();
		}
		if($("#contactName").val()!=null&&$("contactName").val()!='undefined'){
			params['house.type.id']=$("#houseType").val();
		}
		//条件查询
		$.ajax({
			type:'POST',
			data:params,
			url:'',
			dataType:'JSON',
			success:function(data){
				
			}
		});
		
		
		
    });  
    //获取当前处理人
    $.ajax({
    	type:'POST',
    	url:'checkLogin.action',
    	dataType:'JSON',
    	success:function(data){
    		$("#creater").val(data.obj.uname);
    	}
    });
    //获取最大id
    
    
   
    //获取客户经理列表
   $.ajax({
    	type:'POST',
    	url:'findXiaoShouUserInfo.action',
    	dataType:'JSON',
    	success:function(data){
    		if(data.code==1){
    			$("#cusManager").html("");
    			var html="<option>请选择...</option>";
    			for (var i = 0; i < data.obj.length; i++) {
    				
					var cusManager = data.obj[i];
					html+="<option value='"+cusManager.id+"'>";
					html+=cusManager.name+"</option>";
				}
    			
    			$("#cusManager").html(html);
    		}
    	}
    });
    
    
    
    
});  



var dataObj;
var editRow=undefined;

dataObj=$('#data_list_table').datagrid({
	url:'findChanceListPage.action',
	fitColumns:true,
	loadMsg:'数据加载中',
	pagination:true,
	pageNumber:1,
	sortName:"id",
	remoteSort:false,
	columns:[[
         
         
         {field:'id',title:'编号',width:100,align:'center',sortable:true},
         {field:'customername',title:'客户名称',width:100,align:'center',editor:{type:'text',options:{required:true}}},
         {field:'chancesummary',title:'概要',width:100,align:'center',editor:{type:'text',options:{required:true}}},
         {field:'cname',title:'联系人',width:100,align:'center',editor:{type:'text',options:{required:true}},formatter: function(value,row,index){
				if (row.contacter){
					return row.contacter.cname;
				} else {
					return value;
				}
			}
},
         {field:'cellphone',title:'联系人电话',width:100,align:'center',editor:{type:'text',options:{required:true}},formatter: function(value,row,index){
				if (row.contacter){
					return row.contacter.cellphone;
				} else {
					return value;
				}
			}},
         {field:'createtime',title:'创建时间',width:100,align:'center',editor:{type:'text',options:{required:true}}},
        {field:'g',title:'操作',width:100,align:'center',editor:{type:'text',options:{required:true}}, formatter:function(value,row,index){
   		 return "<img onclick='LinkMan("+row.fid+");' title='指派' src='../images/bt_linkman.gif'/>&nbsp;<img onclick='showOptionDetail("+row.fid+");' title='编辑' src='../images/bt_edit.gif'/>&nbsp;<img onclick='delSaleOption("+row.fid+","+row.c+");' title='删除' src='../images/bt_del.gif'/>";
         
   	 } }
       /*  {field:'_operate',title:'操作',width:100,align:'center',
        	
         }*/
         
         ]]
         
	});





function addSaleOption(){
	$("#addSaleOption").dialog("open");
	setCurTime('createtime');
	setCurTime('assigntime');
	}
	
function closeSaleOption(){
	$("#addSaleOption").dialog({
		 closed: true
	});
	}
function delSaleOption(fid,c){
	if(window.confirm("确认删除销售机会"+c+"？")){
		$.ajax({
			type:'POST',
			url:'',
			dataType:'JSON',
			success:function(data){
				if(data.code=1){
					$.messager.show({title:"成功提示",msg:'销售机会删除成功',timeout:3000,showType:'slide'});
					dataObj.datagrid('reload');
				}else{
					$.messager.alert('失败提示','销售机会删除失败,原因：'+data.msg,'error');
				}
			}
		});
	}
	
}

//保存新建数据
function saveSaleOption(){
	$.ajax({
		type:'POST',
		data:{
			'id':$("#id").val(),
			'chancesource':$("#chancesource").val(),
			'customername':$("#customername").val(),
			'success':$("#success").val(),
			'chancesummary':$("chancesummary").val(),
			'contacter.cname':$("#contacter").val(),
			'contacter.telphone':$("#telephone").val(),
			'chancedescribe':$("#chancedescribe").val(),
			'creater':$("#creater").val(),
			'createtime':$("#createtime").val(),
			'user.uname':$("cusManager").val(),
			'assigntime':$("#assigntime").val()
		},
		url:'',
		dataType:'JSON',
		success:function(data){
			if(data.code=1){
				$.messager.show({title:"成功提示",msg:'销售机会添加成功',timeout:3000,showType:'slide'});
				dataObj.datagrid('reload');
			}else{
				$.messager.alert('失败提示','销售机会添加失败,原因：'+data.msg,'error');
			}
		}
	});
}