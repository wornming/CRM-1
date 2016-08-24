package com.crm.bizimpl;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.crm.bean.Customer;
import com.crm.biz.CustomerBiz;
import com.crm.web.model.PageModel;

@Service
public class CustomerBizImpl extends BaseBizImpl implements CustomerBiz {
	@Transactional(readOnly = true, isolation = Isolation.DEFAULT, rollbackForClassName = ("java.lang.RuntimeException"), propagation = Propagation.NOT_SUPPORTED)
	public PageModel<Customer> getCustomerBean(PageModel<Customer> customerModel) {
		// 查询总记录数
		int count = baseDao.getCount(Customer.class, "getCustomerCount");

		customerModel.setTotalCount(count);
		// 计算总页数
		int total = count % customerModel.getRows() == 0 ? count / customerModel.getRows()
				: count / customerModel.getRows() + 1;
		customerModel.setTotal(total);
		// 偏移量：第几条记录开始查询
		int offset = (customerModel.getPage() - 1) * customerModel.getRows();
		List<Customer> list = baseDao.findList(Customer.class, null, "getCustomer", offset, customerModel.getRows());
		customerModel.setList(list);
		return customerModel;
	}
	@Transactional(readOnly = true, isolation = Isolation.DEFAULT, rollbackForClassName = ("java.lang.RuntimeException"), propagation = Propagation.NOT_SUPPORTED)
	public PageModel<Customer> searchCustomer(Map<String, Object> map) {
		PageModel<Customer> customerModel = new PageModel<Customer>();

		int currPage = Integer.parseInt(map.get("page").toString());
		int sizePage = Integer.parseInt(map.get("rows").toString());

		int count = baseDao.getCount(Customer.class, map, "findCustomerConditionCount");
		customerModel.setTotalCount(count);

		int total = count % sizePage == 0 ? count / sizePage : count / sizePage + 1;
		customerModel.setTotal(total);
		int offset = (currPage - 1) * sizePage;
		List<Customer> cs=baseDao.findList(Customer.class, map, "findCustomerCondition", offset, sizePage);
		customerModel.setList(cs);
		customerModel.setPage(currPage);
		return customerModel;
	}
	@Transactional(readOnly = true, isolation = Isolation.DEFAULT, rollbackForClassName = ("java.lang.RuntimeException"), propagation = Propagation.NOT_SUPPORTED)
	public Customer getCustomerById(Customer customer) {
		Customer c=(Customer) baseDao.find(customer, "getCustomerById");
		return c;
	}

}
