package com.crm.bizimpl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.crm.bean.UserInfo;
import com.crm.biz.UserInfoBiz;

@Service
public class UserInfoBizImpl extends BaseBizImpl implements UserInfoBiz{

	@Transactional(readOnly=true,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.NOT_SUPPORTED)
	public UserInfo findUserInfo(UserInfo userinfo) {
		return (UserInfo) baseDao.find(userinfo, "findUserInfo");
	}
	
	@Transactional(readOnly=true,isolation=Isolation.DEFAULT,rollbackForClassName=("java.lang.RuntimeException"),propagation=Propagation.NOT_SUPPORTED)
	public List<UserInfo> getAllUserInfo(UserInfo userinfo){
		return  baseDao.findAll(UserInfo.class, "getAllUserInfo");
	}

	public List<UserInfo> getUserInfoXiaoShou() {
		return baseDao.findAll(UserInfo.class, "getUserInfoXiaoShou");
	}

}
