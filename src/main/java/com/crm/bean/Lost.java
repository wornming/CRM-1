package com.crm.bean;

import java.io.Serializable;
/**
 * 客户流失表
 * @author liwp
 *
 */
public class Lost implements Serializable {

	private static final long serialVersionUID = 7456730714022832697L;

	private Integer id;
	private OrderInfo orderInfo;
	private String measure;
	private String addmeasure;
	private String lostreason;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public OrderInfo getOrderInfo() {
		return orderInfo;
	}

	public void setOrderInfo(OrderInfo orderInfo) {
		this.orderInfo = orderInfo;
	}

	public String getMeasure() {
		return measure;
	}

	public void setMeasure(String measure) {
		this.measure = measure;
	}

	public String getAddmeasure() {
		return addmeasure;
	}

	public void setAddmeasure(String addmeasure) {
		this.addmeasure = addmeasure;
	}

	public String getLostreason() {
		return lostreason;
	}

	public void setLostreason(String lostreason) {
		this.lostreason = lostreason;
	}

	@Override
	public String toString() {
		return "Lost [id=" + id + ", orderInfo=" + orderInfo + ", measure=" + measure + ", addmeasure=" + addmeasure
				+ ", lostreason=" + lostreason + "]";
	}
}
