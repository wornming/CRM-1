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

import com.crm.bean.Chance;
import com.crm.bean.UserInfo;
import com.crm.biz.ChanceBiz;
import com.crm.web.model.PageJsonModel;
import com.crm.web.model.PageModel;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ModelDriven;

@Controller
@Scope(value="prototype")
@Namespace("/")
@ParentPackage("struts-default")
public class ChanceAction extends BaseAction implements ModelDriven<PageModel<Chance>>{
	private static final long serialVersionUID = 7210989892510374954L;
	private PageJsonModel pagejsonModel = new PageJsonModel();
	private ChanceBiz chanceBiz;
	private PageModel<Chance> pagemodel;
	private HashMap<String,Object> map = new HashMap<String, Object>();
	private Integer total;
	
	@Action(value="/findChanceByCondition")
	public void FindChanceByCondition() throws IOException{
		map.put("contactername", pagemodel.getT().getContacter().getCname());
		map.put("customername", pagemodel.getT().getCustomername());
		map.put("chancesummary", pagemodel.getT().getChancesummary());
		
		List<Chance> chancelist = chanceBiz.FindChanceByCondition(map).getList();
		
		total=chanceBiz.FindChanceByCondition(map).getTotalCount();
		
		pagejsonModel.setTotal(total);
		pagejsonModel.setRows(chancelist);
		
		super.outJson(pagejsonModel, ServletActionContext.getResponse());
	}

	
	@Action(value="/SaveChance")
	public void SaveChance(){
		Map<String, Object> session = ActionContext.getContext().getSession();
		chanceBiz.InsertChance(pagemodel.getT());
	}

	
	@Action(value="/findChanceListPage")
	public void FindChanceListPage() throws IOException{
		
		List<Chance> chancelist = chanceBiz.FindChanceListPage(pagemodel).getList();
		
		total=chanceBiz.FindChanceListPage(pagemodel).getTotalCount();
		
		if(map!=null){
			pagejsonModel.setTotal(total);;
			pagejsonModel.setRows(chancelist);
		}else{
			pagejsonModel.setCode(0);
			pagejsonModel.setMsg("action error");
		}
		super.outJson(pagejsonModel, ServletActionContext.getResponse());
	}
	
	
	
	
	public PageModel<Chance> getModel() {
		pagemodel = new PageModel<Chance>(new Chance());
		return pagemodel;
	}


	@Resource(name="chanceBizImpl")
	public void setChanceBiz(ChanceBiz chanceBiz) {
		this.chanceBiz = chanceBiz;
	}
	
	
	
	
}
