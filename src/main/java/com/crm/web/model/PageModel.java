package com.crm.web.model;

import java.io.Serializable;
import java.util.List;


public class PageModel<T> implements Serializable{

	private static final long serialVersionUID = -8320793646532565741L;
	private Integer total=1;
	private Integer currPage;
	private Integer sizePage=5;
	private List<T> Tlist;
	
	public Integer getTotal() {
		return total;
	}
	public void setTotal(Integer total) {
		this.total = total;
	}
	public Integer getCurrPage() {
		if(currPage==null||currPage<=0){
			currPage=1;
		}
		if(currPage>total){
			currPage=total;
		}
		return currPage;
	}
	public void setCurrPage(Integer currPage) {
		this.currPage = currPage;
	}
	public Integer getSizePage() {
		if(sizePage==null||sizePage==0){
			sizePage=5;
		}
		return sizePage;
	}
	public void setSizePage(Integer sizePage) {
		this.sizePage = sizePage;
	}
	public List<T> getTlist() {
		return Tlist;
	}
	public void setTlist(List<T> tlist) {
		Tlist = tlist;
	}
	@Override
	public String toString() {
		return "HouseModel [total=" + total + ", currPage=" + currPage + ", sizePage=" + sizePage + ", Tlist=" + Tlist
				+ "]";
	}
	
	
	
	
}
