package com.crm.bizimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.crm.bean.DataDirectory;
import com.crm.biz.DataDirectoryBiz;
@Service
public class DataDirectoryBizImpl extends BaseBizImpl implements DataDirectoryBiz{
	@Transactional(readOnly=true,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.NOT_SUPPORTED)
	public List<DataDirectory> getDataDirectoryByType(String dtype) {
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("dtype", dtype);
		List<DataDirectory> list=baseDao.findList(DataDirectory.class, map, "getDataDirectoryByType");
		return list;
	}
}
