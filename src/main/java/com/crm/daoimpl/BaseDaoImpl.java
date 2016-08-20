package com.crm.daoimpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.RowBounds;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.stereotype.Repository;

import com.crm.dao.BaseDao;


@Repository(value="baseDaoImpl")
public class BaseDaoImpl<T> extends SqlSessionDaoSupport implements BaseDao<T> {
	
	private final String MAPPERPATH="com.crm.mapper.";

	//自动在com.wq.mapper.找对应的方法
	public void save(T t, String sqlId) {
		super.getSqlSession().insert(MAPPERPATH+t.getClass().getSimpleName()+"Mapper."+sqlId, t);
	}

	public void update(T t, String sqlId) {
		super.getSqlSession().insert(MAPPERPATH+t.getClass().getSimpleName()+"Mapper."+sqlId, t);
	}

	public void del(Class<T> t, int id, String sqlId) {
		super.getSqlSession().delete(MAPPERPATH+t.getSimpleName()+"Mapper."+sqlId,id);
	}

	public List<T> findAll(Class<T> t, String sqlId) {
		List<T> listT =null;
		listT=super.getSqlSession().selectList(MAPPERPATH+t.getSimpleName()+"Mapper."+sqlId);
		return listT;
	}

	public T find(T t, String sqlId) {
		t=super.getSqlSession().selectOne(MAPPERPATH+t.getClass().getSimpleName()+"Mapper."+sqlId, t);
		return t;
	}

	public List<T> findList(Class<T> t, Map<String, Object> map, String sqlId, int offset, int sizepage) {
		List<T> listT = null;
		listT=super.getSqlSession().selectList(MAPPERPATH+t.getSimpleName()+"Mapper."+sqlId, map,new RowBounds(offset, sizepage));
		return listT;
	}

	public int getCount(Class<T> t, String sqlId) {
		int count=0;
		count=super.getSqlSession().selectOne(MAPPERPATH+t.getSimpleName()+"Mapper."+sqlId);
		return count;
	}

	public int getCount(Class<T> t, Map<String, Object> map, String sqlId) {
		int count=0;
		count = super.getSqlSession().selectOne(MAPPERPATH+t.getSimpleName()+"Mapper."+sqlId,map);
		return count;
	}
	
	@Override
	@Resource(name="sqlSession")
	public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
		super.setSqlSessionTemplate(sqlSessionTemplate);
	}

	public void del(Class<T> t, List<Integer> ids, String sqlId) {
		super.getSqlSession().delete(MAPPERPATH+t.getSimpleName()+"Mapper."+sqlId,ids);
	}

}
