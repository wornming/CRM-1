package com.crm.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import junit.framework.TestCase;

public class Test extends TestCase {

	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("Spring.xml");

		System.out.println(context.getBean("sqlSession"));
	}
}
