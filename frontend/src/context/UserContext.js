import React, { createContext, useState } from "react";

const initialValues = {
  name: ""
  //token:""
};

const UserContext = createContext(initialValues);
export const UserProvider = ({ children, userName, tokenValue  }) => {

//const [token, setToken] = useState(tokenValue);

const userConecte = localStorage.getItem("user-ID");
const [name, setName] = useState(userConecte);

const setUserName =(userConecte)=>{
     setName(userConecte)
 }


{/* 

const setUserToken =(tokenValue)=>{
     setToken(tokenValue) }

*/}
 

     return(
<UserContext.Provider value={{name,setUserName}}>

 {children}

</UserContext.Provider>

     );};

export default UserContext;







