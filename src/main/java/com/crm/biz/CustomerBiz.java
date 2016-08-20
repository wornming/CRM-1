package com.crm.biz;

import com.crm.bean.Customer;
import com.crm.web.model.PageModel;

public interface CustomerBiz {
	/**
	 * 分页查询customer
	 * @param customerModel
	 * @return
	 */
	public PageModel<Customer> getCustomerBean(PageModel<Customer> customerModel);
}
