package com.crm.web.listeners;

import java.util.List;
import java.util.Map;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import com.crm.bean.DataDirectory;
import com.crm.biz.DataDirectoryBiz;

public class InitListener implements ServletContextListener {

	public void contextInitialized(ServletContextEvent sce) {
		ServletContext sc=sce.getServletContext();
		// 取出spring容器
		ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(sc);
		if (ac != null) {
			DataDirectoryBiz biz = (DataDirectoryBiz) ac.getBean("dataDirectoryBizImpl");
			Map<String, List<DataDirectory>> map = biz.getAllDataDirectory();
			if (map!=null && !map.isEmpty()) {
				sc.setAttribute("dataDirectory", map);
			}
		}
//		System.out.println(sc.getAttribute("dataDirectory"));
	}

	public void contextDestroyed(ServletContextEvent sce) {

	}
}
