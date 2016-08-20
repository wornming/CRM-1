<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>新闻发布系统——后台管理</title>
	<link rel="stylesheet" type="text/css" href="../../easyui/css/easyui.css">
	<link rel="stylesheet" type="text/css" href="../../easyui/css/icon.css">
	<link rel="stylesheet" type="text/css" href="../../easyui/css/demo.css">
	<script type="text/javascript" src="../../easyui/js/jquery.min.js"></script>
	<script type="text/javascript" src="../../easyui/js/jquery.easyui.min.js"></script>
</head>
<body class="easyui-layout">
	<div data-options="region:'north',border:false" style="height:60px;background:#B3DFDA;padding:10px">
	north region
	</div>
	<div data-options="region:'west',split:true,title:'菜单'" style="width:200px;padding:10px;">
		<ul class="easyui-tree">
			<li>
				<span>菜单</span>
				<ul>
					
					<li>管理员信息管理</li>
					<li>会员信息管理</li>
					<li>新闻类型管理</li>
					<li data-options="state:'open'">
						<span>新闻管理</span>
						<ul>
						
							<li>
								<span>添加新闻</span>
							</li>
							<li>
								<span>浏览新闻</span>
							</li>
							
						</ul>
					</li>
					
					<li>修改密码</li>
				</ul>
			</li>
		</ul>
	</div>
	<div data-options="region:'east',split:true,collapsed:true,title:'帮助'" style="width:100px;padding:10px;">
	east region
	</div>
	<div data-options="region:'south',border:false" style="height:50px;background:#A9FACD;padding:10px;">
	south region
	</div>
	<div data-options="region:'center',title:'内容区'">
		<div class="easyui-tabs" data-options="fit:true">
		</div>
	</div>
</body>
</html>