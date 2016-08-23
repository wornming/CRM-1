package com.crm.biz;

import java.util.List;
import com.crm.bean.DataDirectory;

public interface DataDirectoryBiz {
	public List<DataDirectory> getDataDirectoryByType(String dtype);
}
