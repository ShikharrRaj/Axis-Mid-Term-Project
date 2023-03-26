//import axios from "axios";
import { useState } from "react";
//import { useRef } from "react";
import classes from "./AddUser.module.css";
//import employee from './images/employee.png'
import { signUp } from '../services/UserService';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AddUser(){
    const[data,setData] = useState ({

        username:'',
        email:'',
        password:'',
        

    })

    const[error, setError] = useState({
        errors:{},
        isError:false
    })

    

    const handleChange=(event, property) =>{
        setData({...data,[property]:event.target.value})
    }

    const resetData=() => {
        setData({
            username: '',
            email: '',
            password: '',
            
        })

    }

    const submitForm=(event)=>{
        event.preventDefault();

        if(error.isError){
            toast.error("Form data is invalid , correct all details then submit.");
            return;
        }
        console.log(data);

        signUp(data).then((resp)=>{
            console.log(resp);
            console.log("success log");
            alert("User is Registered successfully");
            setData({
                username: '',
                email: '',
                password: '',
                
            }) 
        }).catch((error)=>{
            console.log(error);
            console.log("Error log")
            setError({
                errors:error,
                isError:true
            })
        })
        ;
    };

   



    /*const usernameInputRef = useRef();
    const useremailInputRef = useRef();
    const userpasswordInputRef = useRef();
    const rolesInputRef = useRef();
  
    
    function submitHandler(event){
        event.preventDefault();  
       
        const enteredUsername = usernameInputRef.current.value;
        const enteredUserEmail = useremailInputRef.current.value;
        const enteredUserPassword = userpasswordInputRef.current.value;
        const enteredroles= rolesInputRef.current.value;

        const contactFormData = {
            username: enteredUsername,
            useremail: enteredUserEmail,
            userpassword: enteredUserPassword,
            roles:enteredroles
        };

        console.log(contactFormData);
        alert("User Registered successfully!");
        clearContents();
        
        axios.post('http://localhost:9991/api/v2/registration',{
            useremail: enteredUserEmail,
            username: enteredUsername,
            userpassword: enteredUserPassword,
            roles: enteredroles
        })
        
      
    }
    function clearContents(){
        usernameInputRef.current.value = "";
        useremailInputRef.current.value = "";
        userpasswordInputRef.current.value = "";
        rolesInputRef.current.value = "";
    }*/

    


    return(
        <div className={classes.item}>
            
            <h2 className={classes.title}>User Registration</h2>
            <form className={classes.form} onSubmit={submitForm} /*onSubmit={submitHandler}*/ >
                <div className={classes.control}>
                <label>Username</label>
                <input type="text" placeholder="Enter Name" required id="name" onChange={(e) =>handleChange(e,'username' )} value={data.username}  /*ref={usernameInputRef}*/ />
                </div>
                <div className={classes.control}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" required id="email" onChange={(e) =>handleChange(e,'email' )} value={data.email} /*ref={useremailInputRef}*//>
                </div>
                <div className={classes.control}>
                    <label>Password</label>
                    <input type="Password" placeholder="Enter Password" required id="password" onChange={(e) =>handleChange(e,'password' )} value={data.password} /*ref={userpasswordInputRef}*//>
                </div>
                

                <div className={classes.actions}>
                    <button>Register</button>
                    <button onClick={resetData}/*onClick={clearContents}*/>Clear</button>
                </div>
            </form>
        </div>
    )
}