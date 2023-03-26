import React, { useState } from "react";
import { Form } from 'semantic-ui-react';
import axios from 'axios';
import classes from "./AddEmp.module.css";
import { useNavigate } from "react-router-dom";

export default function AddEmp() {
  const [empName, setEmpName] = useState('');
  const [empCompanyName, setEmpCompanyName] = useState('');
  const [empAddress, setEmpAddress] = useState('');
  const [empPosition, setEmpPosition] = useState('');
  const [empDepartment, setEmpDepartment] = useState('');
  const [empPhno, setEmpPhno] = useState('');
  const [empSalary, setEmpSalary] = useState('');
  const [empEmail, setEmpEmail] = useState('');
  const navigate = useNavigate();


  console.log(empName);
  console.log(empCompanyName);
  console.log(empAddress);
  console.log(empPosition);
  console.log(empDepartment);
  console.log(empPhno);
  console.log(empSalary);
  console.log(empEmail)

  const sendDataToAPI=(event) => {
    // event.preventDefault()
    // if (!empName.trim().match(/^[a-zA-Z\s]+$/)) {
    //   alert("empName should have minimum 1 space and characters only");
    //   return;
    // }
    // if (!empEmail.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    //   alert("Enter Valid Email");
    //   return;
    // }
    // if (!empCompanyName.trim().match(/^[a-zA-Z\s]+$/)) {
    //   alert("empCompanyName should have minimum 1 space and characters only");
    //   return;
    // }
    // if (!empAddress.trim().match(/^[a-zA-Z\s]+$/)) {
    //   alert("empAddress should have minimum 1 space and characters only");
    //   return;
    // }
    // if (!empPosition.trim().match(/^[a-zA-Z\s]+$/)) {
    //   alert("empPosition should have minimum 1 space and characters only");
    //   return;
    // }
    // if (!empDepartment.trim().match(/^[a-zA-Z\s]+$/)) {
    //   alert("empDepartment should have minimum 1 space and characters only");
    //   return;
    // }
    // if (!empPhno.trim().match(/^[a-zA-Z\s]+$/)) {
    //   alert("empName should have minimum 1 space and characters only");
    //   return;
    // }
    // if (!empSalary.trim().match(/^[a-zA-Z\s]+$/)) {
    //   alert("empSalary should have minimum 1 space and characters only");
    //   return;
    // }
    
    axios.post('http://localhost:8082/api/v1/employee/addEmp',{
      empName,
      empCompanyName,
      empAddress,
      empPosition,
      empDepartment,
      empPhno,
      empSalary,
      empEmail
    })
    alert("Employee added successfully!");
    navigate('/Emplist');
  }
  

  return (
    <div className={classes.item}>
        <h1 className={classes.title}>Add Employee</h1>
      <Form className={classes.form}>
        <Form.Field className={classes.control}>
          <label>Employee Name</label>
          <input name="empName"
           onChange={(e) => setEmpName(e.target.value)} 
           placeholder='Employee Name' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Company Name</label>
          <input name="empCompanyName" 
          onChange={(e) => setEmpCompanyName(e.target.value)} 
          placeholder='Employee Company Name' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Address</label>
          <input name="empAddress" 
          onChange={(e) => setEmpAddress(e.target.value)} 
          placeholder='Employee Address' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Position</label>
          <input name="empPosition" 
          onChange={(e) => setEmpPosition(e.target.value)} 
          placeholder='Employee Position' />
        </Form.Field >
        <Form.Field className={classes.control}>
          <label>Employee Department</label>
          <input name="empDepartment" 
          onChange={(e) => setEmpDepartment(e.target.value)} 
          placeholder='Employee Department' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Phone Number</label>
          <input name="empPhno" 
          onChange={(e) => setEmpPhno(e.target.value)} 
          placeholder='Employee Phone Number' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Salary</label>
          <input name="empSalary" 
          onChange={(e) => setEmpSalary(e.target.value)} 
          placeholder='Employee Salary' />
        </Form.Field>
        <Form.Field className={classes.control}>
          <label>Employee Email</label>
          <input name="empEmail" 
          onChange={(e) => setEmpEmail(e.target.value)} 
          placeholder='Employee Email' />
        </Form.Field>
        <Form.Field className={classes.actions}>
        <button type='submit' onClick={sendDataToAPI}>Submit</button>
        </Form.Field>
      </Form>
    </div>
  )
}