import { Link } from "react-router-dom";
import classes from "./WebsiteNavigation.module.css";

export default function WebsiteNavigation(){
    return(
        <header className={classes.header}>
        <div>
            <div className={classes.logo}>Employee Management System</div>
            <nav>
                    <div className={classes.search}>
                        <div className={classes.searchInputs}>
                            <input type='text' placeholder='Search Employee' />
                            <div className={classes.searchIcon}></div>
                        </div>
                        <div className={classes.dataResult}></div>
                    </div>
                <ul>
                <li>
                   <Link className="btn btn-outline-dark" to="/AddEmp"  >Add Employee</Link>
                </li>
                <li>
                    <Link to="/AddUser">User Registration</Link>
                </li>
                <li>
                  <Link to="/Emplist">Employee Details</Link>
                </li>
                <li>
                    <Link to="/UserLogin">User Login</Link>
                </li>
                
                </ul>
            </nav>
        </div>
        </header>
    )
}