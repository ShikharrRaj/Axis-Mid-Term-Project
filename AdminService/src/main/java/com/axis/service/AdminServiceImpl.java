package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.AdminDto;
import com.axis.dto.EmployeeDto;
import com.axis.entity.Admin;
import com.axis.entity.Employee;
import com.axis.exception.IdNotFoundException;
//import com.axis.externalservices.EmployeeService;
import com.axis.repository.AdminRepository;
import com.axis.repository.EmployeeRepository;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	AdminRepository adminRepository;
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	//@Autowired
	//private EmployeeService employeeService;
	
	@Override
	public AdminDto addNewAdmin(AdminDto adminDto) {
		// TODO Auto-generated method stub
		return convertToDto(adminRepository.save(convertToEntity(adminDto)));
	}

	@Override
	public List<Admin> getAllAdmin() {
		// TODO Auto-generated method stub
		return adminRepository.findAll();
	}
	
	private AdminDto convertToDto(Admin admin) {
		AdminDto adminDto=new AdminDto();
		
		adminDto.setAdminId(admin.getAdminId());
		adminDto.setAdminName(admin.getAdminName());
		adminDto.setAdminEmail(admin.getAdminEmail());
		adminDto.setAdminCompanyName(admin.getAdminCompanyName());
		return adminDto;
		
	}
	private Admin convertToEntity(AdminDto adminDto) {
		Admin admin=new Admin();
		
		admin.setAdminId(adminDto.getAdminId());
		admin.setAdminName(adminDto.getAdminName());
		admin.setAdminEmail(adminDto.getAdminEmail());
		admin.setAdminCompanyName(adminDto.getAdminCompanyName());
		return admin;
		
	}

	
	
	public String deleteAdminById(int id) {
		adminRepository.deleteById(id);
		return "Admin deleted";
	}
	
	public Admin getAdminById(int id) {
		Optional<Admin> a = adminRepository.findById(id);
		if (a.isPresent()) {
			return adminRepository.getById(id);
			 
		}else {
			throw new IdNotFoundException("No Admin found");
		}
		
		
	}

	@Override
	public Admin updateAdminById(int id, Admin admin) {
		Optional<Admin> a=adminRepository.findById(id);
		if(a.isPresent()) {
			return adminRepository.save(admin);
		}else {
			throw new IdNotFoundException("No Id is present to update");
		}
	}
	
	@Override
	public EmployeeDto addNewEmployee(EmployeeDto employeeDto) {
		// TODO Auto-generated method stub
		return convertToDto(employeeRepository.save(convertToEntity(employeeDto)));
	}
	
    @Override
	public List<Employee> getAllEmployee() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}
	
	private EmployeeDto convertToDto(Employee employee) {
		EmployeeDto employeeDto=new EmployeeDto();
		
		employeeDto.setEmpID(employee.getEmpID());
		employeeDto.setEmpCompanyName(employee.getEmpCompanyName());
		employeeDto.setEmpAddress(employee.getEmpAddress());
		employeeDto.setEmpDepartment(employee.getEmpDepartment());
		employeeDto.setEmpEmail(employee.getEmpEmail());
		employeeDto.setEmpName(employee.getEmpName());
		employeeDto.setEmpPhno(employee.getEmpPhno());
		employeeDto.setEmpPosition(employee.getEmpPosition());
		employeeDto.setEmpSalary(employee.getEmpSalary());
		
		return employeeDto;
		
	}
	private Employee convertToEntity(EmployeeDto employeeDto) {
		Employee employee=new Employee();
		
		employee.setEmpID(employeeDto.getEmpID());
		employee.setEmpCompanyName(employeeDto.getEmpCompanyName());
		employee.setEmpAddress(employeeDto.getEmpAddress());
		employee.setEmpDepartment(employeeDto.getEmpDepartment());
		employee.setEmpEmail(employeeDto.getEmpEmail());
		employee.setEmpName(employeeDto.getEmpName());
		employee.setEmpPhno(employeeDto.getEmpPhno());
		employee.setEmpPosition(employeeDto.getEmpPosition());
		employee.setEmpSalary(employeeDto.getEmpSalary());
		
		return employee;
		
	}
	

	public Employee getEmployeeById(int id) {
		Optional<Employee> a = employeeRepository.findById(id);
		if (a.isPresent()) {
			return employeeRepository.getById(id);
			 
		}else {
			throw new IdNotFoundException("No Employee found");
		}
	}

	@Override
	public String deleteEmployeeById(int id) {
		employeeRepository.deleteById(id);
		return "Employee deleted";
	}


	@Override
	public Employee updateEmployeeById(int id, Employee employee) {
		Optional<Employee> e=employeeRepository.findById(id);
		if(e.isPresent()) {
			return employeeRepository.save(employee);
		}else {
			throw new IdNotFoundException("No Id is present to update");
		}
	}

	

}
