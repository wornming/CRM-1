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
import com.crm.bean.Contacter;
import com.crm.biz.ContacterBiz;
import com.crm.web.model.JsonModel;
import com.opensymphony.xwork2.ModelDriven;

@Controller
@Scope(value = "prototype")
@Namespace("/")
@ParentPackage("struts-default")
public class ContacterAction extends BaseAction implements ModelDriven<Contacter> {

	private static final long serialVersionUID = -5719447547474880427L;
	private Contacter contacter;
	private ContacterBiz contacterBiz;
	private JsonModel jsonModel;
	@Action(value="/list_contacterbycustomerid")
	public void ContacterByCustomerId() throws IOException {
		jsonModel = new JsonModel();
		if (contacter.getCustomer()!=null&&contacter.getCustomer().getId() != null) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("customerid", contacter.getCustomer().getId());
			List<Contacter> list = contacterBiz.getContacterByCustomerId(map);
			jsonModel.setCode(1);
			jsonModel.setObj(list);
		}else{
			jsonModel.setCode(0);
			jsonModel.setObj("injert fail");
		}
		super.outJson(jsonModel, ServletActionContext.getResponse());
	}

	@Resource(name = "contacterBizImpl")
	public void setContacterBiz(ContacterBiz contacterBiz) {
		this.contacterBiz = contacterBiz;
	}

	public Contacter getModel() {
		contacter = new Contacter();
		return contacter;
	}
}
