package com.crm.actions;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import com.crm.web.model.JsonModel;
import com.google.gson.Gson;
import com.opensymphony.xwork2.ActionSupport;

public abstract class BaseAction extends ActionSupport {
	private static final long serialVersionUID = -4850011248549277466L;

	//使用Gson转json
	public String parseJson(JsonModel jsonModel){
		Gson g = new Gson();
		return g.toJson(jsonModel);
	}

	//跨域输出
	public void outJson(JsonModel jsonModel, HttpServletResponse response) throws IOException {
		String json = parseJson(jsonModel);
		//跨域
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setContentType("application/json;charset=utf-8");
		

		
		PrintWriter pw = response.getWriter();
		pw.println(json);
		pw.flush();
		pw.close();
	}
	
}
