package com.crm.biz;

import java.util.Map;

import com.crm.bean.Customer;
import com.crm.web.model.PageModel;

public interface CustomerBiz {
	/**
	 * 分页查询customer
	 * 
	 * @param customerModel
	 * @return
	 */
	public PageModel<Customer> getCustomerBean(PageModel<Customer> customerModel);

	/**
	 * 动态sql查询
	 * 
	 * @param map
	 * @return
	 */
	public PageModel<Customer> searchCustomer(Map<String, Object> map);
}
