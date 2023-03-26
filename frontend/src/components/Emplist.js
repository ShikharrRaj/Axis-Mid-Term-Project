import React, { useEffect, useState } from "react";
import { Table, Button } from  "semantic-ui-react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Emplist(){
    const[apiData, setApiData] = useState([]);
    const navigate = useNavigate();

    

    useEffect(()=>{
        axios.get('http://localhost:8082/api/v1/employee/emplist')
        .then((getData) => {
            setApiData(getData.data);
        })
    })

    const setID = (empID,empAddress,empCompanyName,empDepartment,empEmail,empName,empPhno,empPosition,empSalary) => {

        localStorage.setItem('empID', empID)
        localStorage.setItem('empAddress',empAddress)
        localStorage.setItem('empCompanyName', empCompanyName)
        localStorage.setItem('empDepartment', empDepartment)
        localStorage.setItem('empEmail', empEmail)
        localStorage.setItem('empName', empName)
        localStorage.setItem('empPhno', empPhno)
        localStorage.setItem('empPosition', empPosition)
        localStorage.setItem('empSalary', empSalary)

    }

    const getData = () => {
        axios.get('http://localhost:8082/api/v1/employee/emplist')
        .then((getData) => {
            setApiData(getData.data);
        })
    }

    const onDelete = (empID)=>{
        axios.delete(`http://localhost:8082/api/v1/employee/deleteEmp/${empID}`)
        .then(() =>{
            getData();
        })
        alert("Employee deleted!");
        navigate('/Emplist');
    }
    

    return(
        <div border shadow>
            <Table celled class="table table-sm">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>empID</Table.HeaderCell>
        <Table.HeaderCell>empName</Table.HeaderCell>
        <Table.HeaderCell>empCompanyName</Table.HeaderCell>
        <Table.HeaderCell>empAddress</Table.HeaderCell>
        <Table.HeaderCell>empPosition</Table.HeaderCell>
        <Table.HeaderCell>empDepartment</Table.HeaderCell>
        <Table.HeaderCell>empPhno</Table.HeaderCell>
        <Table.HeaderCell>empSalary</Table.HeaderCell>
        <Table.HeaderCell>empEmail</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
        {/* <Table.HeaderCell>View</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data) => {
            return(
                <Table.Row>
                <Table.Cell>{data.empID}</Table.Cell>
                <Table.Cell>{data.empName}</Table.Cell>
                <Table.Cell>{data.empCompanyName}</Table.Cell>
                <Table.Cell>{data.empAddress}</Table.Cell>
                <Table.Cell>{data.empPosition}</Table.Cell>
                <Table.Cell>{data.empDepartment}</Table.Cell>
                <Table.Cell>{data.empPhno}</Table.Cell>
                <Table.Cell>{data.empSalary}</Table.Cell>
                <Table.Cell>{data.empEmail}</Table.Cell>
                <Table.Cell>
                    <Link to="/UpdateEmp">
                    <Button color="green" onClick={() => setID(data.empID, data.empAddress, data.empCompanyName, data.empDepartment, data.empEmail, data.empName, data.empPhno, data.empPosition, data.empSalary)}>Update</Button>
                    </Link>
                </Table.Cell>
                <Table.Cell>
                    
                    <Button color="red" onClick={() => onDelete(data.empID)}>Delete</Button>
                    
                </Table.Cell>
                {/* <Table.Cell>
                    <Button color="blue">View</Button>
                </Table.Cell> */}
              </Table.Row>
            )
        })}
     
    </Table.Body>
    </Table>
        </div>
    )
}