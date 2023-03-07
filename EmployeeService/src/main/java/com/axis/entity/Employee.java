package com.axis.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "emp_id")
	private int empID;
	private String empName;
	private String empCompanyName;
	private String empAddress;
	private String empPosition;
	private String empDepartment;
	private long empPhno;
	private int empSalary;
	private String empEmail;
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Employee(int empID, String empName, String empCompanyName, String empAddress, String empPosition,
			String empDepartment, long empPhno, int empSalary, String empEmail) {
		super();
		this.empID = empID;
		this.empName = empName;
		this.empCompanyName = empCompanyName;
		this.empAddress = empAddress;
		this.empPosition = empPosition;
		this.empDepartment = empDepartment;
		this.empPhno = empPhno;
		this.empSalary = empSalary;
		this.empEmail = empEmail;
	}
	public int getEmpID() {
		return empID;
	}
	public void setEmpID(int empID) {
		this.empID = empID;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getEmpCompanyName() {
		return empCompanyName;
	}
	public void setEmpCompanyName(String empCompanyName) {
		this.empCompanyName = empCompanyName;
	}
	public String getEmpAddress() {
		return empAddress;
	}
	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}
	public String getEmpPosition() {
		return empPosition;
	}
	public void setEmpPosition(String empPosition) {
		this.empPosition = empPosition;
	}
	public String getEmpDepartment() {
		return empDepartment;
	}
	public void setEmpDepartment(String empDepartment) {
		this.empDepartment = empDepartment;
	}
	public long getEmpPhno() {
		return empPhno;
	}
	public void setEmpPhno(long empPhno) {
		this.empPhno = empPhno;
	}
	public int getEmpSalary() {
		return empSalary;
	}
	public void setEmpSalary(int empSalary) {
		this.empSalary = empSalary;
	}
	public String getEmpEmail() {
		return empEmail;
	}
	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}
	
	
	

}
