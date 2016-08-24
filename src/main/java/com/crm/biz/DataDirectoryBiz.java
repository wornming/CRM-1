package com.crm.biz;

import java.util.List;
import java.util.Map;

import com.crm.bean.DataDirectory;

public interface DataDirectoryBiz {
	public List<DataDirectory> getDataDirectoryByType(String dtype);
	/**
	 * 得到所有的数据字典  作为初始化数据
	 * @return
	 */
	public Map<String, List<DataDirectory>> getAllDataDirectory();

}
