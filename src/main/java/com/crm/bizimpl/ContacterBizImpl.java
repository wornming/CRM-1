package com.crm.bizimpl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.crm.bean.Contacter;
import com.crm.biz.ContacterBiz;

@Service
public class ContacterBizImpl extends BaseBizImpl implements ContacterBiz {

	@Transactional(readOnly=false,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.REQUIRED)
	public void saveContacter(Contacter contacter) {
		baseDao.save(contacter, "saveContacter");
	}

}
