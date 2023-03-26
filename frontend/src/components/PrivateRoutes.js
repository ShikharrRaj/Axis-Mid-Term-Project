import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { UserService } from '../services/UserService'

 function PrivateRoutes() {
  
     
    //   if(UserService.userSignin()){
    //     return <Outlet />
    //  }else{
    //      return <Navigate to={"/UserLogin"} /> ;

    //  }

    /* return (
    <>
     <div>PrivateRoutes</div>

     <Outlet />
    
    </>
   
  )*/
}

export default PrivateRoutes