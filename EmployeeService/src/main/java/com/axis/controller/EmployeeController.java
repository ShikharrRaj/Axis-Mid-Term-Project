package com.axis.controller;

import java.util.List;

//import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.dto.EmployeeDto;
import com.axis.entity.Employee;
import com.axis.service.EmployeeService;



@RestController
@CrossOrigin
@RequestMapping("/api/v1/employee")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/addEmp")
	public ResponseEntity<EmployeeDto>addEmployee(@RequestBody EmployeeDto employeeDto){
		return new ResponseEntity<EmployeeDto>(employeeService.addNewEmployee(employeeDto), HttpStatus.OK);
	}
	
	@GetMapping("/emplist")
	public ResponseEntity<List<Employee>> getAllEmployee(){
		return new ResponseEntity<List<Employee>>(employeeService.getAllEmployee(), HttpStatus.OK);
	}
	
	@GetMapping("/emp/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
		return new ResponseEntity<Employee>(employeeService.getEmployeeById(id), HttpStatus.OK);
	}
	
	@GetMapping("/empName/{empName}")
	public ResponseEntity<List<Employee>> findByEmpName(@PathVariable String empName){
		List<Employee> employee=employeeService.findByEmpName(empName);
		return new ResponseEntity<List<Employee>>(employee,HttpStatus.OK);
	} 
	
	@GetMapping("/empCompanyName/{empCompanyName}")
	public ResponseEntity<List<Employee>> findByEmpCompanyName(@PathVariable String empCompanyName){
		List<Employee> employee=employeeService.findByEmpCompanyName(empCompanyName);
		return new ResponseEntity<List<Employee>>(employee,HttpStatus.OK);
	}
	
	@GetMapping("/empDepartment/{empDepartment}")
	public ResponseEntity<List<Employee>> findByEmpDepartment(@PathVariable String empDepartment){
		List<Employee> employee=employeeService.findByEmpDepartment(empDepartment);
		return new ResponseEntity<List<Employee>>(employee,HttpStatus.OK);
	}
	
	@PutMapping("/updateEmp/{id}")
	public ResponseEntity<Employee>updateEmployeeById(@PathVariable int id, @RequestBody Employee employee){
		return new ResponseEntity<Employee>(employeeService.updateEmployeeById(id, employee), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteEmp/{id}")
	public ResponseEntity<String> deleteEmployeeById(@PathVariable int id){
		return new ResponseEntity<String>(employeeService.deleteEmployeeById(id),HttpStatus.OK);
	}

}
