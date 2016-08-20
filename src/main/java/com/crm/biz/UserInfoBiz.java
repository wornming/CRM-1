package com.crm.biz;

import java.util.List;

import com.crm.bean.UserInfo;

public interface UserInfoBiz {
	public UserInfo findUserInfo(UserInfo userinfo);
	
	public  List<UserInfo> getAllUserInfo(UserInfo userinfo);
	
	public List<UserInfo> getUserInfoXiaoShou();
}
