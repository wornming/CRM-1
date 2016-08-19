package com.crm.bean;

import java.io.Serializable;
import java.util.Date;
/**
 * 交往记录
 * @author liwp
 *
 */
public class ContactHistory implements Serializable {

	private static final long serialVersionUID = 5530442943012694232L;

	private Integer id;
	private Contacter contacter;
	private Date contacttime;
	private String place;
	private String summary;
	private String item;
	private String remark;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Contacter getContacter() {
		return contacter;
	}

	public void setContacter(Contacter contacter) {
		this.contacter = contacter;
	}

	public Date getContacttime() {
		return contacttime;
	}

	public void setContacttime(Date contacttime) {
		this.contacttime = contacttime;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Override
	public String toString() {
		return "ContactHistory [id=" + id + ", contacter=" + contacter + ", contacttime=" + contacttime + ", place="
				+ place + ", summary=" + summary + ", item=" + item + ", remark=" + remark + "]";
	}

}
