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
		
		$.get(domainName + "/jQueryAjaxDemo/getServlet", {
			username: encodeURI( $("#username").val() ),
			content: encodeURI( $("#content").val() )
		}, function(data) {
			// 把返回的数据添加到页面上
			$("#restText").html(decodeURI(data));
			
			// 清空用户名
			$("#username").val("请输入姓名");
			// 清空评论
			$("#content").val("");
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