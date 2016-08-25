package com.crm.biz;

import java.util.List;
import java.util.Map;

import com.crm.bean.Chance;
import com.crm.web.model.PageModel;

public interface ChanceBiz {
	
	public  void deleteChanceById(PageModel<Chance> pagemodel);


	public List<Chance> FindChanceList();
	
	public PageModel<Chance> FindChanceListPage(PageModel<Chance> pagemodel);
	
	public Chance FindDetailChance(PageModel<Chance> pagemodel);

	public  void updateChanceUserInfo(PageModel<Chance> pagemodel);

	
	public void InsertChance(PageModel<Chance> pagemodel);

	
	public PageModel<Chance> FindChanceByCondition(Map<String,Object> map);
	
	

	
}
