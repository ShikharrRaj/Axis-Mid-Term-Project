//isLoggedIn
export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if(data == null){
        return false;
    }else{
        //window.location.reload()
        return true;
       
    }
    
};

//doLogin => data=> set to localStorage
export const doLogin=(data,next)=>{
    localStorage.setItem("data", JSON.stringify(data));
    next()
};

//doLogout=> remove from localStorage
export const doLogout=(next)=>{
     sessionStorage.removeItem("userName");
     sessionStorage.removeItem("role");
     sessionStorage.removeItem("token");
     next()
     window.location.reload()
};

//get currentUser
export const getCurrentUserDetail=()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))?.user;
    }else{
        return false;
    }
};