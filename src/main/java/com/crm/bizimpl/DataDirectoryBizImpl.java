package com.crm.bizimpl;

import java.util.ArrayList;
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
	@Transactional(readOnly=true,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.NOT_SUPPORTED)
	public Map<String, List<DataDirectory>> getAllDataDirectory() {
		Map<String, List<DataDirectory>> map=new HashMap<String, List<DataDirectory>>();
		List<DataDirectory> dataDirectories=baseDao.findAll(DataDirectory.class, "getAllDataDirectory");
		if (dataDirectories != null && dataDirectories.size() > 0) {
			for (DataDirectory dataDirectory : dataDirectories) {
				//如果存在则添加到对应list中
				if (map.containsKey(dataDirectory.getDtype())) {
					map.get(dataDirectory.getDtype()).add(dataDirectory);
				}else{
					//如果不存在  则创建该键值
					List<DataDirectory> list=new ArrayList<DataDirectory>();
					list.add(dataDirectory);
					map.put(dataDirectory.getDtype(), list);
				}
			}
		}
		return map;
	}

}
