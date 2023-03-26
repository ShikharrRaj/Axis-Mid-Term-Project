import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, getCurrentUserDetail, doLogout } from "../auth";
import classes from "./WebsiteNavigation.module.css";
//import { Button } from 'semantic-ui-react'

export default function WebsiteNavigation(){
    const [userRole, setUserRole] = useState("");

    useEffect(
        () => {
            let role = sessionStorage.getItem("role");

            console.log("Layout menu Role:");
            console.log(role);            
            setUserRole(role);
            console.log(userRole);            
            
        },[userRole]
    );


    const navigate=useNavigate()
    
    const[login,setLogin]=useState(false)
    const[user,setUser]=useState(undefined)

    useEffect(()=>{

        setLogin(isLoggedIn())
        setUser(getCurrentUserDetail())
    },[login])

    const logout=()=>{
        doLogout(()=>{
            setLogin(false)
            navigate('/')
        })
    }

const adminMenu = (
    <>
    <header className={classes.header}>
        <div>
            <div className={classes.logo}>Employee Management System</div>
            <nav className="navbar navbar-dark bg-primary">                    
                <ul>
                <li>
                   <Link className="btn btn-outline-dark" to="/AddEmp"  >Add Employee</Link>
                </li>
               
                <li>
                  <Link to="/Emplist">Employee Details</Link>
                </li>
               
                <li>
                <Link to="/SearchBar">Search Employee</Link>
                </li>
                <li>
                    <Link to="/UserProfile">Admin Profile</Link>
                </li>
        
                <li>
                <Link to="/logout" onClick={logout} disabled={!login} >Logout</Link>

                </li>

                
                 
                

                {/* {
                        login && (
                            <>
                            <li>
                            <Link onClick={logout}  >Logout</Link>
                            </li>                            
                            
                            </>
                        )
                    }

                    {
                        !login && (
                            <>
                                    <li>
                                        <Link to="/UserLogin" disabled={} >User Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/AddUser">User Registration</Link>
                                    </li>

                            </>
                        )
                    } */}


                </ul>
            </nav>
        </div>
        </header>
    </>
)

const userMenu=(
    <>
    <header className={classes.header}>
        <div>
            <div className={classes.logo}>Employee Management System</div>
            <nav className="navbar navbar-dark bg-primary">                    
                <ul>
                <li>
                <Link to="/UpdateEmp">Update Employee</Link>
               </li>
                <li>
                    <Link to="/UserProfile">Employee Profile</Link>
                </li>
                <li>
                <Link to="/logout" onClick={logout} disabled={!login} >Logout</Link>
                </li>

                
                 
                

                {/* {
                        login && (
                            <>
                            <li>
                            <Link onClick={logout}  >Logout</Link>
                            </li>                            
                            
                            </>
                        )
                    }

                    {
                        !login && (
                            <>
                                    <li>
                                        <Link to="/UserLogin" disabled={} >User Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/AddUser">User Registration</Link>
                                    </li>

                            </>
                        )
                    } */}


                </ul>
            </nav>
        </div>
        </header>
    </>
)

const defaultMenu=(
    <>
    <header className={classes.header}>
        <div>
            <div className={classes.logo}>Employee Management System</div>
            <nav className="navbar navbar-dark bg-primary">                    
                <ul>
        
                <li>
                <Link to="/UserLogin" disabled={login} >User Login</Link> 
                </li>
                <li>
                <Link to="/AddUser" disabled={login} >User Registration</Link>
                </li>
            

                {/* {
                        login && (
                            <>
                            <li>
                            <Link onClick={logout}  >Logout</Link>
                            </li>                            
                            
                            </>
                        )
                    }

                    {
                        !login && (
                            <>
                                    <li>
                                        <Link to="/UserLogin" disabled={} >User Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/AddUser">User Registration</Link>
                                    </li>

                            </>
                        )
                    } */}


                </ul>
            </nav>
        </div>
        </header>
    </>
)
   /* return(
        <header className={classes.header}>
        <div>
            <div className={classes.logo}>Employee Management System</div>
            <nav className="navbar navbar-dark bg-primary">
                    


                <ul>
                
                <li>
                   <Link className="btn btn-outline-dark" to="/AddEmp"  >Add Employee</Link>
                </li>
                
                <li>
                  <Link to="/Emplist">Employee Details</Link>
                </li>
               
                <li>
                <Link to="/SearchBar">Search Employee</Link>
                </li>
                <li>
                    <Link to="/UserProfile">User Profile</Link>
                </li>
                <li>
                <Link to="/UserLogin" disabled={login} >User Login</Link> 
                </li>
                <li>
                <Link to="/AddUser" disabled={login} >User Registration</Link>
                </li>
                <li>
                <Link to="/logout" onClick={logout} disabled={!login} >Logout</Link>

                </li>

                
                 
                

                {/* {
                        login && (
                            <>
                            <li>
                            <Link onClick={logout}  >Logout</Link>
                            </li>                            
                            
                            </>
                        )
                    }

                    {
                        !login && (
                            <>
                                    <li>
                                        <Link to="/UserLogin" disabled={} >User Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/AddUser">User Registration</Link>
                                    </li>

                            </>
                        )
                    } }


                </ul>
            </nav>
        </div>
        </header>
    )*/
    return (
        (userRole === "ROLE_USER")?userMenu:(userRole === "ROLE_ADMIN") ? adminMenu : defaultMenu
    );

}