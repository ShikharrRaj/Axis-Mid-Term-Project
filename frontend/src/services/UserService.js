import { myAxios } from './helper';

export const signUp=(user) => {
    return myAxios
    .post('/auth/signup', user)
    .then((response) => response.data);
}; 

export const loginUser=(loginDetail)=>{
    return myAxios.post('/auth/signin', loginDetail).then((response) => response.data)
}

class UserService{
userSignin(user){
    return myAxios.post("/auth/signin",user);
}

getUserDetails(token){
    return myAxios.get("/test/user",{ headers: {"Authorization": `Bearer ${token}`}});
}

getAllUsersByAdmin(token){
    return myAxios.get("/test/all",{ headers: {"Authorization": `Bearer ${token}`}});
}
}

export default new UserService();