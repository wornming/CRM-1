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
    
    
   
    
  
    
    
    
    
});  



var dataObj;
var editRow=undefined;

dataObj=$('#dev_list_table').datagrid({
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
         {field:'dvalue',title:'状态',width:100,align:'center',editor:{type:'text',options:{required:true}},formatter: function(value,row,index){
				if (row.chancestatus){
					return row.chancestatus.tiaomu;
				} else {
					return value;
				}
			}},
         {field:'g',title:'操作',width:100,align:'center',editor:{type:'text',options:{required:true}}, formatter:function(value,row,index){
   		if(row.chancestatus.dvalue==2){
   		 return "<img onclick='makePlan("+row.id+");' title='制定计划' src='../images/bt_plan.gif'/>&nbsp;<img onclick='executePlan("+row.id+");' title='执行计划' src='../images/bt_feedback.gif'/>&nbsp;<img onclick='delSaleOption("+row.id+",\""+row.chancesummary+"\");' title='开发成功' src='../images/bt_yes.gif'/>";
   		}else{
        	 return "<img onclick='dev_detail("+row.id+");' title='查看' src='../images/bt_detail.gif'/>";
   		}
   	 } }
	  
       
         
         ]]
         
	});

//制定计划
function executePlan(id){
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
			html+="<tr><th>指派给</th><td>"+data.rows[0].user.name+"</td><th>指派时间</th><td>"+data.rows[0].assigntime+"</td></tr>"
			html+="</table>"
			$("#executePlan1").html(html);
			
			var str="<tr><th>日期</th><th>计划项</th><th>日期</th>执行效果</tr>";
			//for (var i = 0; i < array.length; i++) {
				str+="<tr><td class='list_data_text'>2008年01月18日</td><td class='list_data_ltext'>初步接触，了解客户意向。</td><td class='list_data_ltext'><input />　<button class='common_button' onclick='save('dev_execute.html');'>保存</button></td></tr>";
			//}
			$("#executePlan2").html(str);
			
			
		}
	});
	
	
	$("#executePlan").dialog("open");
	
}

//查看
function dev_detail(id){
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
			html+="<tr><th>指派给</th><td>"+data.rows[0].user.name+"</td><th>指派时间</th><td>"+data.rows[0].assigntime+"</td></tr>"
			html+="</table>"
			$("#devTable").html(html);
			
			/*var str="<tr><th>日期</th><th>计划</th><th>执行效果</th></tr>";
			for (var i = 0; i < array.length; i++) {
				str+="<tr><td class='list_data_text'>2008年01月18日</td><td class='list_data_ltext'>初步接触，了解客户意向。</td><td class='list_data_ltext'>了解到客户季度末有采购需求。</td></tr>";
			}
			$("#devTable2").html(str);*/
		}
	});
	
	
	$("#devDetailOption").dialog("open");
	
}



//制定计划
function makePlan(id){
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
			html+="<tr><th>指派给</th><td>"+data.rows[0].user.name+"</td><th>指派时间</th><td>"+data.rows[0].assigntime+"</td></tr>"
			html+="</table>"
			$("#planTable1").html(html);
			
			var str="<tr><th>日期</th><th>计划项</th></tr>";
			//for (var i = 0; i < array.length; i++) {
				str+="<tr><td class='list_data_text' height='24'>2008年01月18日</td>";
				str+="<td class='list_data_ltext' height='24'><input size='50' value='初步接触，了解客户意向。' /><button class='common_button' onclick='save('dev_plan.html');'>保存</button><button class='common_button' onclick='del('');'>删除</button></td></tr>";
			//}
			$("#planTable2").html(str);
			
			
		}
	});
	
	
	$("#makePlan").dialog("open");
	
}


	
function closeDetailOption(){
	$("#devDetailOption").dialog({
		 closed: true
	});
	}
function closeexecutePlan(){
	$("#executePlan").dialog({
		 closed: true
	});
}

function closePlan(){
	$("#makePlan").dialog({
		 closed: true
	});
	
}

