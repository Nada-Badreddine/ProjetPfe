import React, { createContext, useState } from "react";

const initialValues = {
  name: "",
  token:""
};

const UserContext = createContext(initialValues);
export const UserProvider = ({ children, userName, tokenValue  }) => {
const [name, setName] = useState(userName);
 const [token, setToken] = useState(tokenValue);

 const setUserName =(userName)=>{
     setName(userName)


 }

 const setUserToken =(tokenValue)=>{
     setToken(tokenValue) }

     return(
<UserContext.Provider value={{name,token,setUserName,setUserToken}}>

 {children}

</UserContext.Provider>

     );};

export default UserContext;







