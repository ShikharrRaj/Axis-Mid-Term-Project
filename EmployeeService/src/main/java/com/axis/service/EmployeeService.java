package com.axis.service;

import java.util.List;
import com.axis.dto.EmployeeDto;
import com.axis.entity.Employee;

public interface EmployeeService {
	
	EmployeeDto addNewEmployee(EmployeeDto employeeDto);
	
	List<Employee> getAllEmployee();
	
	Employee updateEmployeeById(int id, Employee employee);

	Employee getEmployeeById(int id);

	String deleteEmployeeById(int id);
	
	List<Employee> findByEmpName(String empName);
	
	List<Employee> findByEmpCompanyName(String empCompanyName);
	
	List<Employee> findByEmpDepartment(String empDepartment);
	
}
