package com.axis.dto;

public class AdminDto {
	private int adminId;
	private String adminName;
	private String adminEmail;
	private String adminCompanyName;
	public AdminDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminDto(int adminId, String adminName, String adminEmail, String adminCompanyName) {
		super();
		this.adminId = adminId;
		this.adminName = adminName;
		this.adminEmail = adminEmail;
		this.adminCompanyName = adminCompanyName;
	}
	public int getAdminId() {
		return adminId;
	}
	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}
	public String getAdminEmail() {
		return adminEmail;
	}
	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}
	public String getAdminCompanyName() {
		return adminCompanyName;
	}
	public void setAdminCompanyName(String adminCompanyName) {
		this.adminCompanyName = adminCompanyName;
	}

}
