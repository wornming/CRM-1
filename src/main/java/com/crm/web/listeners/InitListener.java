package com.crm.web.listeners;

import java.util.List;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

public class InitListener implements ServletContextListener {



	public void contextInitialized(ServletContextEvent sce) {
			//取出spring容器
		ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(sce.getServletContext());
		if(ac !=null){
		}
		
	}

	
	public void contextDestroyed(ServletContextEvent sce) {
		
	}
}
