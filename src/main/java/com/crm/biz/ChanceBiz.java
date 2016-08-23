package com.crm.biz;

import java.util.List;
import java.util.Map;

import com.crm.bean.Chance;
import com.crm.web.model.PageModel;

public interface ChanceBiz {

	public List<Chance> FindChanceList();
	
	public PageModel<Chance> FindChanceListPage(PageModel<Chance> pagemodel);
	
	public Chance FindDetailChance();
	
	public void InsertChance(Chance chance);
	
	public PageModel<Chance> FindChanceByCondition(Map<String,Object> map);

	
}
