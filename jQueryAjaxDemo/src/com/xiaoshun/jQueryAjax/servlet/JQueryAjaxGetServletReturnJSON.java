package com.xiaoshun.jQueryAjax.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JQueryAjaxGetServletReturnJSON extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		this.doPost(req, resp);
	}
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		
		String username = req.getParameter("username");
		String content = req.getParameter("content");
		
		// 指定返回的格式是JSON类型
		resp.setContentType("text/x-json;charset=UTF-8");
		
		PrintWriter out = resp.getWriter();
		// 这里返回的JSON字符串，必须是严格的JSON格式
		// 1.键名称：用双引号引起
		// 2.值字符串：用双引号引起
		// 3.数字、布尔值不需要双引号
		out.write("{ \"username\" : \"" + username + "\", \"content\" : \"" + content + "\"}");
		out.flush();
	}
}
