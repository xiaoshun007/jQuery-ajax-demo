<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>jQuery-ajax-get</title>

<!-- 引入css文件 -->
<link href="../../css/demo-get/style.css" rel="stylesheet" type="text/css" >
<!-- 引入jQuery -->
<script type="text/javascript" src="../../scripts/jquery-1.9.1.min.js"></script>
<!-- 引入js文件 -->
<script type="text/javascript" src="../../scripts/demo-get/get.js"></script>

</head>
<body>
	<!-- jQuery中使用get方式对ajax的调用 -->
	<form id="commentForm">
		<p>评论：</p>
		<p>姓名：<input type="text" id="username" name="username" value="请输入姓名"/></p>
		<p>内容：<textarea id="content" name="content" rows="2" cols="20"></textarea></p>
		<p><input type="button" id="send" value="提交"/></p>
		
		<div class="comment">已有评论：</div>
		<div id="restText"></div>
	</form>
</body>
</html>