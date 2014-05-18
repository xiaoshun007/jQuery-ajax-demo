package com.xiaoshun.jQueryAjax.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JQueryAjaxGetServletReturnXML extends HttpServlet {

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
		
		// 需要返回xml格式数据，因此需要在服务端设置Content-type
		resp.setContentType("text/xml");
		
		PrintWriter out = resp.getWriter();
		out.write("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
		out.write("<comments>");
		out.write("<comment username=\"" + username + "\">");
		out.write("<content>" + content + "</content>");
		out.write("</comment>");
		out.write("</comments>");
	}
}
