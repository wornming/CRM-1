package com.crm.bean;

import java.io.Serializable;
/**
 * 计划表
 * @author liwp
 *
 */
import java.util.Date;
/**
 * 计划表
 * @author liwp
 *
 */
public class Plan implements Serializable {

	private static final long serialVersionUID = 1916420767090784276L;

	private Integer id;
	private Chance chance;// 机会 对应于chanceid
	private Date plantime;// 日期
	private String planitem;// 计划项
	private String result;// 执行结果

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Chance getChance() {
		return chance;
	}

	public void setChance(Chance chance) {
		this.chance = chance;
	}

	public Date getPlantime() {
		return plantime;
	}

	public void setPlantime(Date plantime) {
		this.plantime = plantime;
	}

	public String getPlanitem() {
		return planitem;
	}

	public void setPlanitem(String planitem) {
		this.planitem = planitem;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	@Override
	public String toString() {
		return "Plan [id=" + id + ", chance=" + chance + ", plantime=" + plantime + ", planitem=" + planitem
				+ ", result=" + result + "]";
	}
}
