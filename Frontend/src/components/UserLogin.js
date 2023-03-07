import axios from "axios";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
import classes from "./UserLogin.module.css"

function UserLogin() {

    const usernameInputRef = useRef();
    const useremailInputRef = useRef();
    const userpasswordInputRef = useRef();
   
  
    
    function submitHandler(event){
        event.preventDefault();  // prevent default behavior of submit button-that is to submit form and proceed
       
        const enteredUsername = usernameInputRef.current.value;
        const enteredUserEmail = useremailInputRef.current.value;
        const enteredUserPassword = userpasswordInputRef.current.value;
        

        const contactFormData = {
            username: enteredUsername,
            useremail: enteredUserEmail,
            userpassword: enteredUserPassword,
            
        };

        console.log(contactFormData);
        alert("User Logged in successfully!");
        clearContents();
        
        axios.post('http://localhost:9991/api/v2/validate/',{
            useremail: enteredUserEmail,
            username: enteredUsername,
            userpassword: enteredUserPassword
        })
        
        Navigate("/")
      
    }
    function clearContents(){
        usernameInputRef.current.value = "";
        useremailInputRef.current.value = "";
        userpasswordInputRef.current.value = "";
        
    }


    return(
        <div className={classes.item}>
            <h2 className={classes.title}>User Login</h2>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                <label>Username</label>
                <input type="text" placeholder="Enter Name" required id="name" ref={usernameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" required id="email" ref={useremailInputRef}/>
                </div>
                <div className={classes.control}>
                    <label>Password</label>
                    <input type="Password" placeholder="Enter Password" required id="password" ref={userpasswordInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Login</button>
                    <button onClick={clearContents}>Clear</button>
                </div>
            </form>
        </div>
    )


}

export default UserLogin