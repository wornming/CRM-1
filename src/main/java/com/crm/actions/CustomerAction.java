package com.crm.actions;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import com.crm.bean.Customer;
import com.crm.biz.CustomerBiz;
import com.crm.web.model.PageJsonModel;
import com.crm.web.model.PageModel;
import com.opensymphony.xwork2.ModelDriven;

@Controller
@Scope(value = "prototype")
@Namespace("/")
@ParentPackage("struts-default")
public class CustomerAction extends BaseAction implements ModelDriven<PageModel<Customer>> {

	private static final long serialVersionUID = 5424400354643222777L;
	private PageModel<Customer> pageModel;
	private PageJsonModel pagejsonModel = new PageJsonModel();
	private CustomerBiz customerBiz;
	private Map<String, Object> map = new HashMap<String, Object>();
	private Integer total;


	@Action(value = "/list_customer")
	public void list() throws IOException {
		List<Customer> chancelist = customerBiz.getCustomerBean(pageModel).getList();
		total = customerBiz.getCustomerBean(pageModel).getTotalCount();

		if (map != null) {
			pagejsonModel.setTotal(total);
			pagejsonModel.setRows(chancelist);
		} else {
			pagejsonModel.setCode(0);
			pagejsonModel.setMsg("action error");
		}
		super.outJson(pagejsonModel, ServletActionContext.getResponse());
	}

	public PageModel<Customer> getModel() {
		pageModel = new PageModel<Customer>();
		return pageModel;
	}
	@Resource(name = "customerBizImpl")
	public void setCustomerBiz(CustomerBiz customerBiz) {
		this.customerBiz = customerBiz;
	}
}
