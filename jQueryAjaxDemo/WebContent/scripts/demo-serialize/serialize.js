$(document).ready(function() {
	// username 输入框控制，获得焦点，清空默认值
	$("#username").focus(function(event) {
		// 获得输入框的值
		var username = $(this).val();
		if (this.defaultValue == username) {
			$(this).val("");
		}
	}).blur(function() {// 失去焦点，如果没有进行输入，显示的是默认值
		var username = $(this).val();
		if ("" == username) {
			$(this).val(this.defaultValue);
		}
	});
	
	// 提交按钮单击事件
	$("#send").click(function() {
		var domainName = getDomainName();
		
		$.ajax({
			type: "POST",
			url: domainName + "/jQueryAjaxDemo/getServletReturnJSON",
			data: 
			// 第一种方式：将要传入后台的值逐个添加到data中，不便之处在于，不利于扩展性
			/*{
				username: encodeURI( $("#username").val() ),
				content: encodeURI( $("#content").val() )
			},*/
			// 第二种方式：使用serialize()方法进行表单的序列化
				$("#commentForm").serialize(),
			dataType: "json",
			success: function(data) {
				// 对返回的xml数据进行解析
				var username = data.username;
				var content = data.content;
				
				// 使用表单序列化，会自动进行编码，因此无需先编码在转码
				
				// 拼装为HTML格式
				var txtHTML = "<div><h6>" + username + ":</h6><p>" + content + "</p></div>";
				
				// 把返回的数据添加到页面上
				$("#resText").html(txtHTML);
				
				// 清空用户名
				$("#username").val("请输入姓名");
				// 清空评论
				$("#content").val("");
			}
		});
	});
	
	// 获得访问路径
	function getDomainName() {
		// 获得主机名
		var host = window.location.hostname;
		// 获得端口号
		var port = window.location.port;
		var domainName = "";
		
		if ("" != host && null != host) {
			domainName = "http://" + host;
		}
		if ("" != port && null != port) {
			domainName += ":" + port;
		}
		
		return domainName;
	}
});