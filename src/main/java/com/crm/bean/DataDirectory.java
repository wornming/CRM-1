package com.crm.bean;

import java.io.Serializable;
/**
 * 数据字典
 * @author liwp
 *
 */
public class DataDirectory implements Serializable {

	private static final long serialVersionUID = -569891720632675342L;

	private Integer id;
	private String dtype; // 类别
	private String tiaomu; // 条目
	private String dvalue; // 值
	private String isedit; // 是否可编辑

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDtype() {
		return dtype;
	}

	public void setDtype(String dtype) {
		this.dtype = dtype;
	}

	public String getTiaomu() {
		return tiaomu;
	}

	public void setTiaomu(String tiaomu) {
		this.tiaomu = tiaomu;
	}

	public String getDvalue() {
		return dvalue;
	}

	public void setDvalue(String dvalue) {
		this.dvalue = dvalue;
	}

	public String getIsedit() {
		return isedit;
	}

	public void setIsedit(String isedit) {
		this.isedit = isedit;
	}

	@Override
	public String toString() {
		return "DataDirectory [id=" + id + ", dtype=" + dtype + ", tiaomu=" + tiaomu + ", dvalue=" + dvalue
				+ ", isedit=" + isedit + "]";
	}
}
