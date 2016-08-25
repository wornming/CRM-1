package com.crm.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.crm.bean.Chance;
import com.crm.bean.UserInfo;
import com.crm.biz.ChanceBiz;
import com.crm.biz.UserInfoBiz;
import com.crm.web.model.PageModel;

import junit.framework.TestCase;

public class Test extends TestCase {

	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Spring.xml");
		UserInfoBiz biz=(UserInfoBiz) context.getBean("userInfoBizImpl");
		UserInfo user=new UserInfo();
		user.setUname("a");
		user.setPwd("a");
		
		user= biz.findUserInfo(user);
		System.out.println(user);
	}
	public void tes2() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Spring.xml");
		ChanceBiz biz=(ChanceBiz) context.getBean("chanceBizImpl");
		System.out.println(biz.FindChanceList());
	}
}
