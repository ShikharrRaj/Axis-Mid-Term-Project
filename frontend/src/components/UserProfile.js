import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
import userService from "../services/UserService";
import classes from "./UserLogin.module.css";
//import UpdateByUser from "./UpdateByUser";
//import { useNavigate } from 'react-router-dom';


function UserProfile() {
  //const [userData,setUserData]=useState("");
//const navigate=useNavigate();
  const [msg] = useState("");
  const [errMsg] = useState("");
//const[empId,setEmpId]=useState("");
  
  const [user, setUser] = useState(
      {
          "id":"",
          "username": "",
           "email":"",
           
      }
  );

  // const fetchBookings = useCallback(async () => {
     
  //     const response = await axios.get(`http://localhost:8082/api/v1/employee/validate/${user.email}`);
  //     setEmpId(response.data.valueOf())
    
  // }, [user.email])

  // useEffect(() => {
  //   fetchBookings();
  // },[fetchBookings] );

useEffect(
  ()=>{
      let token = sessionStorage.getItem('token');
      
      userService.getUserDetails(token)
      .then(
          (r)=>{
              console.log(r.data);
              setUser(r.data);
          }
          )
      .catch(
          (err)=>{
              console.log(err);
          }
      )
  },[]
);

// const handleUpdate=()=>{
//   navigate('/UpdateByUser',{ state: { empId:empId } });
// }

const userElement = (
  <>
          <div className={classes.item}>
      {msg && <h3 className="alert alert-success">{msg}</h3>}
      {errMsg && <h3 className="alert alert-danger">{errMsg}</h3>}
      <h1 className={classes.title}> User Details: </h1>
      <form className={classes.form}  >
      <div className={classes.control}>
          <label>Username</label>
          <input type="text" name="username" value={user.username}  disabled></input>
         </div>
         <div className={classes.control}>
         <label> Email </label>
          <input type="text" name="email" value={user.email}  disabled></input>
         

        </div>
        
      </form>
      {/* <button onClick={handleUpdate} >Update</button> */}
      
      </div>
  </>
);
return (userElement);
}

export default UserProfile