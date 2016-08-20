package com.crm.bizimpl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.crm.bean.Chance;
import com.crm.biz.ChanceBiz;
import com.crm.web.model.PageModel;

@Service
public class ChanceBizImpl extends BaseBizImpl implements ChanceBiz {

	@Transactional(readOnly=true,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.NOT_SUPPORTED)
	public List<Chance> FindChanceList() {
		List<Chance> list = baseDao.findAll(Chance.class, "findAllChance");
		return list;
	}
	
	
	@Transactional(readOnly=true,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.NOT_SUPPORTED)
	public PageModel<Chance> FindChanceListPage(PageModel<Chance> pagemodel){
		int count = baseDao.getCount(Chance.class, "getChanceCount");
		pagemodel.setTotalCount(count);
		int total = count%pagemodel.getRows()==0?count/pagemodel.getRows():count/pagemodel.getRows()+1;
		pagemodel.setTotal(total);
		int offset = (pagemodel.getPage()-1)*pagemodel.getRows();
		List<Chance> list = baseDao.findList(Chance.class, null, "findAllChance", offset, pagemodel.getRows());
		pagemodel.setList(list);
		
		return pagemodel;
	}

	@Transactional(readOnly=true,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.NOT_SUPPORTED)
	public Chance FindDetailChance() {
		return null;
	}

}
