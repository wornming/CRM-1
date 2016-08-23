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
 
    //获取最大id
    
    
   
    //获取客户经理列表
    setCusList("cusManager");
  
    
    
    
    
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
   		 return "<img onclick='dispatch("+row.id+");' title='指派' src='../images/bt_linkman.gif'/>&nbsp;<img onclick='showOptionDetail("+row.id+");' title='编辑' src='../images/bt_edit.gif'/>&nbsp;<img onclick='delSaleOption("+row.id+",\""+row.chancesummary+"\");' title='删除' src='../images/bt_del.gif'/>";
         
   	 } }
       /*  {field:'_operate',title:'操作',width:100,align:'center',
        	
         }*/
         
         ]]
         
	});
//指派
function dispatch(id){
	$.ajax({
		type:'POST',
		url:'findChanceListPage?page=1&rows=1',
		data:{'id':id},
		dataType:'JSON',
		success:function(data){
			var html="";
			html+="<tr><th>编号</th><td>"+data.rows[0].id+"</td><th>机会来源</th><td>"+data.rows[0].chancesource+"</td></tr>";
			html+="<tr><th>客户名称</th><td>"+data.rows[0].customername+"</td><th>成功机率（%）</th><td>"+data.rows[0].success+"</td></tr>";
			html+="<tr><th>概要</th><td colspan='3'>"+data.rows[0].chancesummary+"</td></tr>"
			html+="<tr><th>联系人</th><td>"+data.rows[0].contacter.cname+"</td><th>联系人电话</th><td>"+data.rows[0].contacter.telphone+"</td></tr>";
			html+="<tr><th>机会描述</th><td colspan='3'>"+data.rows[0].chancedescribe+"</td></tr>";
			html+="<tr><th>创建人</th><td>"+data.rows[0].createtime+"</td><th>创建时间</th><td>"+data.rows[0].createtime+"</td></tr>"
			html+="</table>"
			$("#dispatchTable").html(html);
		}
	});
	setCusList("dispatchCus");
	setCurTime("dispatchTime");
	
	$("#dispatchSaleOption").dialog("open");
	$("#saveDispatch").bind('click',function(){
		alert(id);
	});
}

//编辑
function showOptionDetail(id){
	setCurTime('assigntime');
	$.ajax({
		type:'POST',
		url:'findChanceListPage?page=1&rows=1',
		data:{'id':id},
		dataType:'JSON',
		success:function(data){
			
			$("#addSaleOption").dialog({
				title:"销售机会管理  > 编辑销售机会",
				onOpen:function(){
					$("#id").val(data.rows[0].id),
					$("#chancesource").val(data.rows[0].chancesource),
					$("#customername").val(data.rows[0].customername),
					$("#success").val(data.rows[0].success),
					$("#chancesummary").val(data.rows[0].chancesummary),
					$("#contacter").val(data.rows[0].contacter.cname),
					$("#telephone").val(data.rows[0].contacter.telphone),
					$("#chancedescribe").val(data.rows[0].chancedescribe),
					$("#creater").val(data.rows[0].creater),
					$("#createtime").val(data.rows[0].createtime),
					$("#cusManager").attr("disabled",true),
					$("#assigntime").attr("disabled",true),
					$("#save").attr("onclick","editSaleOption();return false;")
					
				}
				
			});
			
			$("#addSaleOption").dialog("open");
			
		}
	});
}



function addSaleOption(){
	$("#save").attr("onclick","saveSaleOption();return false;");
	$("#addSaleOption").dialog({title:"销售机会管理  > 新建销售机会"});
	$("#addSaleOption").dialog("open");
	setCurTime('createtime');
	setCurTime('assigntime');
	   //获取当前处理人
    $.ajax({
    	type:'POST',
    	url:'checkLogin.action',
    	dataType:'JSON',
    	success:function(data){
    		$("#creater").val(data.obj.uname);
    	}
    });
	}
	
function closeDispatchOption(){
	$("#dispatchSaleOption").dialog({
		 closed: true
	});
	}

function closeSaleOption(){
	$("#addSaleOption").dialog({
		 closed: true
	});
	
}
function delSaleOption(id,chancesummary){
	if(window.confirm("确认删除概要为:"+chancesummary+"的销售机会？")){
		$.ajax({
			type:'POST',
			url:'',
			data:{'id':id},
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
			't.id':$("#id").val(),
			't.chancesource':$("#chancesource").val(),
			't.customername':$("#customername").val(),
			't.success':$("#success").val(),
			't.chancesummary':$("#chancesummary").val(),
			't.contacter.cname':$("#contacter").val(),
			't.contacter.telphone':$("#telephone").val(),
			't.chancedescribe':$("#chancedescribe").val(),
			't.creater':$("#creater").val(),
			't.createtime':$("#createtime").val(),
			't.user.id':$("#cusManager").val(),
			't.assigntime':$("#assigntime").val(),
			't.chancestatus.id':5
		},
		url:'SaveChance.action',
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