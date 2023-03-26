import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function SearchBar() {
  const[apiData, setApiData] = useState([]);
  const [search, setSearch] = useState('');
 

  useEffect(()=>{
      axios.get('http://localhost:8082/api/v1/employee/emplist')
      .then((getData) => {
          setApiData(getData.data);
      })
  })

  
  

  return(
      <div>
        <Container>
        <h1 >Search Employee</h1>
        <Form>
          <InputGroup >

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search Employee'
            />
          </InputGroup>
        </Form>
        <Table  striped bordered hover>
          <thead>
            <tr>
              <th>empID</th>
              <th>empName</th>
              <th>empCompanyName</th>
              <th>empAddress</th>
              <th>empPosition</th>
              <th>empDepartment</th>
              <th>empPhno</th>
              <th>empSalary</th>
              <th>empEmail</th>
            </tr>
          </thead>
          <tbody>
           {apiData
              .filter((data) => {
                return search.toLowerCase() === ''
                  ? data
                  : data.empName.toLowerCase().includes(search);
              })
              
              .map((data, index) => (
                <tr key={index}>
                  <td>{data.empID}</td>
                  <td>{data.empName}</td>
                  <td>{data.empCompanyName}</td>
                  <td>{data.empAddress}</td>
                  <td>{data.empPosition}</td>
                  <td>{data.empDepartment}</td>
                  <td>{data.empPhno}</td>
                  <td>{data.empSalary}</td>
                  <td>{data.empEmail}</td>
                </tr>
              ))}         
          </tbody>
        </Table>
      </Container>
      </div>
  )  
}

export default SearchBar
