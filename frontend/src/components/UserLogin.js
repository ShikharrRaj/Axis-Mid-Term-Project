import { useState } from "react";
import classes from "./UserLogin.module.css";

import userService from "../services/UserService";

function UserLogin() {

    const [msg, setMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const [user, setUser] = useState(
        {
            "username": "",
            "password": ""
        }
    );


    const handleUserChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setUser((oldValue) => ({ ...oldValue, [name]: value }));
        // ... spread operator 
    }

    const handleReset=()=>{
      setUser({
        username: "",
        password:"",
      });
    };
    
    
    const handleUserSubmit = (e) => {
        e.preventDefault();
        console.log("Handle user Submit");
        console.log(user);

        userService.userSignin(user)
            .then(
                (r) => {
                    console.log(r);
                    console.log(r.data.roles[0]);
                    console.log(r.data.accessToken);
                    sessionStorage.setItem("userName",r.data);
                    sessionStorage.setItem("role",r.data.roles[0]);
                    
                    sessionStorage.setItem("token",r.data.accessToken);
                    
                    alert("User log in success .");
                    setErrMsg("");

                }
            )
            .catch(
                (e) => {
                    console.log(e);
                    alert("Failed login . ");
                    setMsg("");
                }
            )
    }



    const userElement = (
        <>
        <div className={classes.item}>
            {msg && <h3 className="alert alert-success">{msg}</h3>}
            {errMsg && <h3 className="alert alert-danger">{errMsg}</h3>}
            <h2 className={classes.title}>User Login</h2>
            <form className={classes.form} onSubmit={handleUserSubmit}>
            <div className={classes.control}>
               <label>Username </label> 
                <input type="text" name="username" value={user.username} onChange={(event) => handleUserChange(event)} placeholder="Enter Username" required ></input><br />
               </div>
                <div className={classes.control}>
               <label>Password</label> 
                <input type="text" name="password" value={user.password} onChange={(event) => handleUserChange(event)}  placeholder="Enter Password" required></input><br />
                </div>
                <div className={classes.actions}>
              <button  >Login</button>
              <button onClick={handleReset} >Clear</button>
                </div>
            </form>
            </div>
        </>
    );
    return (userElement);

}
export default UserLogin;