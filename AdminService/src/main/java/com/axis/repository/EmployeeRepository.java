package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	
	List<Employee> findByEmpName(String empName);
	
	List<Employee> findByEmpCompanyName(String empCompanyName);
	
	List<Employee> findByEmpDepartment(String empDepartment);

}
