package com.axis.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.axis.dto.AdminDto;
import com.axis.dto.EmployeeDto;
import com.axis.entity.Admin;
import com.axis.entity.Employee;
//import com.axis.externalservices.EmployeeService;
import com.axis.service.AdminService;


@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	RestTemplate restTemplate; 
	
	@Autowired
	AdminService adminService;

	
	@PostMapping("/addAdmin")
	public ResponseEntity<AdminDto>addAdmin(@RequestBody AdminDto admindto){
		return new ResponseEntity<AdminDto>(adminService.addNewAdmin(admindto), HttpStatus.OK);
	}
	
	@GetMapping("/Adminlist")
	public ResponseEntity<List<Admin>> getAllAdmin(){
		return new ResponseEntity<List<Admin>>(adminService.getAllAdmin(), HttpStatus.OK);
	}
	
	@GetMapping("/Admin/{id}")
	public ResponseEntity<Admin> getAdminById(@PathVariable int id){
		return new ResponseEntity<Admin>(adminService.getAdminById(id), HttpStatus.OK);
	}
	
	@PutMapping("/updateAdmin/{id}")
	public ResponseEntity<Admin>updateEmployeeById(@PathVariable int id, @RequestBody Admin admin){
		return new ResponseEntity<Admin>(adminService.updateAdminById(id, admin), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteadmin/{id}")
	public ResponseEntity<String> deleteAdminById(@PathVariable int id){
		return new ResponseEntity<String>(adminService.deleteAdminById(id),HttpStatus.OK);
	}
	
	@GetMapping("/emplist")
	public Object getAllEmployee(){
		List object = restTemplate.getForObject("http://EmployeeService/api/v1/employee/emplist", List.class);
		return object;
	}
	

	
	@GetMapping("/emp/{id}")
		public Object getEmployeeById(@PathVariable int id){
			Object object = restTemplate.getForObject("http://EmployeeService/api/v1/employee/emp/"+id, Object.class);
			return object;
		}
	
	@GetMapping("/empName/{empName}")
	public Object findByEmpName(@PathVariable String empName) {
		List object =restTemplate.getForObject("http://EmployeeService/api/v1/employee/empName/"+empName, List.class);
				return object;
	}
	
	@GetMapping("/empCompanyName/{empCompanyName}")
	public Object findByEmpCompanyName(@PathVariable String empCompanyName) {
		List object =restTemplate.getForObject("http://EmployeeService/api/v1/employee/empCompanyName/"+empCompanyName, List.class);
				return object;
	}
	@GetMapping("/empDepartment/{empDepartment}")
	public Object findByEmpDepartment(@PathVariable String empDepartment) {
		List object =restTemplate.getForObject("http://EmployeeService/api/v1/employee/empDepartment/"+empDepartment, List.class);
				return object;
	}
	
	
	@PostMapping("/addEmp")
	public Object addNewEmployee(@RequestBody EmployeeDto employeeDto){
		Object object =restTemplate.postForObject("http://EmployeeService/api/v1/employee/addEmp", employeeDto, Object.class);
		return object;
	}
	
	@PutMapping("/updateEmp/{id}")
	public Object updateEmployeeById(@PathVariable int id, @RequestBody Employee employee) {
		restTemplate.put("http://EmployeeService/api/v1/employee/updateEmp/"+id, employee);
		return employee;
		
	}
	
	@DeleteMapping("/deleteEmp/{id}")
	public void deleteEmployeeById(@PathVariable int id) {
		restTemplate.delete("http://EmployeeService/api/v1/employee/deleteEmp/"+id);
	}
	
	

}
