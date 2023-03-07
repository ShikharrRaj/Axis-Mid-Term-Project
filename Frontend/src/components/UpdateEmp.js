import React, { useState, useEffect } from "react";
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import classes from './UpdateEmp.module.css'


export default function UpdateEmp() {
  
  const [empName, setEmpName] = useState('');
  const [empCompanyName, setEmpCompanyName] = useState('');
  const [empAddress, setEmpAddress] = useState('');
  const [empPosition, setEmpPosition] = useState('');
  const [empDepartment, setEmpDepartment] = useState('');
  const [empPhno, setEmpPhno] = useState('');
  const [empSalary, setEmpSalary] = useState('');
  const [empEmail, setEmpEmail] = useState('');
  const [empID, setEmpId] = useState(null);

  console.log(empID);
  console.log(empName);
  console.log(empCompanyName);
  console.log(empAddress);
  console.log(empPosition);
  console.log(empDepartment);
  console.log(empPhno);
  console.log(empSalary);
  console.log(empEmail)
  

  const sendDataToAPI=() => {
    axios.put(`http://localhost:8082/api/v1/employee/updateEmp/${empID}`,{
      empID,
      empName,
      empCompanyName,
      empAddress,
      empPosition,
      empDepartment,
      empPhno,
      empSalary,
      empEmail
    })

    alert("Employee updated successfully!");

  }

  
  
  useEffect(() =>{
    setEmpName(localStorage.getItem('empName'));
    setEmpCompanyName(localStorage.getItem('empCompanyName'));
    setEmpAddress(localStorage.getItem('empAddress'));
    setEmpPosition(localStorage.getItem('empPosition'));
    setEmpDepartment(localStorage.getItem('empDepartment'));
    setEmpPhno(localStorage.getItem('empPhno'));
    setEmpSalary(localStorage.getItem('empSalary'));
    setEmpEmail(localStorage.getItem('empEmail'));
    setEmpId(localStorage.getItem('empID'));
  },[])

  return (
    <div className={classes.item}>
        <h1 className={classes.title}>Update Employee</h1>
      <Form className={classes.form}>
        <Form.Field className={classes.control}>
          <label>Employee Name</label>
          <input name="empName"
          value={empName}
           onChange={(e) => setEmpName(e.target.value)} 
           placeholder='Employee Name' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Company Name</label>
          <input name="empCompanyName" 
          value={empCompanyName}
          onChange={(e) => setEmpCompanyName(e.target.value)} 
          placeholder='Employee Company Name' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Address</label>
          <input name="empAddress" 
          value={empAddress}
          onChange={(e) => setEmpAddress(e.target.value)} 
          placeholder='Employee Address' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Position</label>
          <input name="empPosition" 
          value={empPosition}
          onChange={(e) => setEmpPosition(e.target.value)} 
          placeholder='Employee Position' />
        </Form.Field >
        <Form.Field className={classes.control}>
          <label>Employee Department</label>
          <input name="empDepartment" 
          value={empDepartment}
          onChange={(e) => setEmpDepartment(e.target.value)} 
          placeholder='Employee Department' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Phone Number</label>
          <input name="empPhno" 
          value={empPhno}
          onChange={(e) => setEmpPhno(e.target.value)} 
          placeholder='Employee Phone Number' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Salary</label>
          <input name="empSalary" 
          value={empSalary}
          onChange={(e) => setEmpSalary(e.target.value)} 
          placeholder='Employee Salary' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Email</label>
          <input name="empEmail" 
          value={empEmail}
          onChange={(e) => setEmpEmail(e.target.value)} 
          placeholder='Employee Email' />
        </Form.Field>
        <Form.Field className={classes.actions}>
        <button type='submit' onClick={sendDataToAPI} >Update</button>
        </Form.Field>
      </Form>
    </div>
  )
}