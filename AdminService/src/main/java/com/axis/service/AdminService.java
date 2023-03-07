package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.axis.dto.AdminDto;
import com.axis.dto.EmployeeDto;
import com.axis.entity.Admin;
import com.axis.entity.Employee;
import com.axis.repository.AdminRepository;
import com.axis.repository.EmployeeRepository;

public interface AdminService {
	
	AdminDto addNewAdmin(AdminDto adminDto);
	
	List<Admin> getAllAdmin();
	
	Admin updateAdminById(int id, Admin admin);
	
	Admin getAdminById(int id);

	String deleteAdminById(int id);
	
    EmployeeDto addNewEmployee(EmployeeDto employeeDto);
	
	List<Employee> getAllEmployee();
	
	Employee updateEmployeeById(int id, Employee employee);

	Employee getEmployeeById(int id);

	String deleteEmployeeById(int id);

}
