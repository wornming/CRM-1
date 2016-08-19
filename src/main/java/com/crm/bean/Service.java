package com.crm.bean;

import java.io.Serializable;
/**
 * 服务表
 * @author liwp
 *
 */
import java.util.Date;
/**
 * 服务表
 * @author liwp
 *
 */
public class Service implements Serializable {

	private static final long serialVersionUID = 1131039083661188359L;

	private Integer id;
	private DataDirectory servicetype;
	private String summary;
	private Customer customer;
	private DataDirectory servicestatus;
	private String servicerequest;
	private String createperson;
	private Date createdate;
	private UserInfo allotperson;
	private Date allotdate;
	private String servicedeal;
	private UserInfo dealperson;
	private Date dealtime;
	private String dealresult;
	private DataDirectory satisify;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public DataDirectory getServicetype() {
		return servicetype;
	}

	public void setServicetype(DataDirectory servicetype) {
		this.servicetype = servicetype;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public DataDirectory getServicestatus() {
		return servicestatus;
	}

	public void setServicestatus(DataDirectory servicestatus) {
		this.servicestatus = servicestatus;
	}

	public String getServicerequest() {
		return servicerequest;
	}

	public void setServicerequest(String servicerequest) {
		this.servicerequest = servicerequest;
	}

	public String getCreateperson() {
		return createperson;
	}

	public void setCreateperson(String createperson) {
		this.createperson = createperson;
	}

	public Date getCreatedate() {
		return createdate;
	}

	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}

	public UserInfo getAllotperson() {
		return allotperson;
	}

	public void setAllotperson(UserInfo allotperson) {
		this.allotperson = allotperson;
	}

	public Date getAllotdate() {
		return allotdate;
	}

	public void setAllotdate(Date allotdate) {
		this.allotdate = allotdate;
	}

	public String getServicedeal() {
		return servicedeal;
	}

	public void setServicedeal(String servicedeal) {
		this.servicedeal = servicedeal;
	}

	public UserInfo getDealperson() {
		return dealperson;
	}

	public void setDealperson(UserInfo dealperson) {
		this.dealperson = dealperson;
	}

	public Date getDealtime() {
		return dealtime;
	}

	public void setDealtime(Date dealtime) {
		this.dealtime = dealtime;
	}

	public String getDealresult() {
		return dealresult;
	}

	public void setDealresult(String dealresult) {
		this.dealresult = dealresult;
	}

	public DataDirectory getSatisify() {
		return satisify;
	}

	public void setSatisify(DataDirectory satisify) {
		this.satisify = satisify;
	}

	@Override
	public String toString() {
		return "Service [id=" + id + ", servicetype=" + servicetype + ", summary=" + summary + ", customer=" + customer
				+ ", servicestatus=" + servicestatus + ", servicerequest=" + servicerequest + ", createperson="
				+ createperson + ", createdate=" + createdate + ", allotperson=" + allotperson + ", allotdate="
				+ allotdate + ", servicedeal=" + servicedeal + ", dealperson=" + dealperson + ", dealtime=" + dealtime
				+ ", dealresult=" + dealresult + ", satisify=" + satisify + "]";
	}
}
