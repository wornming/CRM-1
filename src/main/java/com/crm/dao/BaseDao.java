package com.crm.dao;

import java.util.List;
import java.util.Map;

public interface BaseDao<T>{
	
	/**
	 * @param t  要保存的数据对象
	 * @param sqlId  mapper中的方法名
	 */
	public void save(T t,String sqlId);
	
	/**
	 *更新 
	 * @param t
	 * @param sqlId
	 */
	public void update(T t,String sqlId);
	
	public void del(Class<T> clazz ,int id ,String sqlId);
	
	public void del(Class<T> clazz,List<Integer> ids,String sqlId);
	
	public List<T> findAll(Class<T> clazz, String sqlId);
	
	public T find(T t,String sqlId);
	
	public List<T> findList(Class<T> clazz, Map<String,Object> map,String sqlId,int offset,int sizepage);
	
	public int getCount(Class<T> clazz,String sqlId);
	
	public int getCount(Class<T> clazz,Map<String,Object> map,String sqlId);
}
