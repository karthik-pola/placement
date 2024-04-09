// // import { useContext } from "react";


// // export const AuthContext = createContext();





// import React ,{useContext ,useState} from 'react'

// const AuthContext = React.createContext();
// const UserContext = React.createContext();
// const UserUpdateContext = React.createContext();

// export function useAccessToken () {
//   return  useContext(AuthContext);
// }

// export function useUpdateAccessToken () {
//   return useContext(UserUpdateContext);
// }

// export function useUserData (){
//   return useContext( UserContext);
// }


// export const AuthProvider = ({children}) => {
//   const storedToken = localStorage.getItem('accessToken');
//   const [AccessToken , setAccessToken]  = useState(storedToken || " ");
//   const [User , setUser] = useState(null);

//   async function accessToken(token ){
//     setAccessToken(token);
//   }
//   async function setData(data){
//     setUser(data);
//   }

//   const UpdateUserData = async(token , data) => {
//     await accessToken(token);
//     await setData(data);
//     localStorage.setItem('accessToken', token);
//   }


//   return (
//     <AuthContext.Provider value={AccessToken}>
//       <UserContext.Provider value={User}>
//         <UserUpdateContext.Provider value={UpdateUserData}>
//           {children}
//         </UserUpdateContext.Provider>
//       </UserContext.Provider>
//     </AuthContext.Provider>
//   );
// }


import React, { useContext, useState } from 'react';

// Create contexts for authentication token, user data, and updating user data
const AuthContext = React.createContext();
const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

// Custom hook to consume authentication token
export function useAccessToken() {
  return useContext(AuthContext);
}

// Custom hook to consume function for updating authentication token
export function useUpdateAccessToken() {
  return useContext(UserUpdateContext);
}

// Custom hook to consume user data
export function useUserData() {
  return useContext(UserContext);
}

// Authentication provider component
export const AuthProvider = ({ children }) => {
  // Retrieve token from local storage or set to an empty string
  const storedToken = localStorage.getItem('accessToken');
  const storedUser  = localStorage.getItem('UserData');
  const [AccessToken, setAccessToken] = useState(storedToken || 'token');

  // State for user data, initially set to null
  const [User, setUser] = useState(storedUser || 'user');

  // Function to update authentication token
  async function accessToken(token) {
    setAccessToken(token);
  }

  // Function to update user data
  async function setData({data}) {
    localStorage.setItem('userData', data);

    console.log('localStorage');
    console.log(localStorage.getItem('userData'));
    setUser(data);
  }

  // Function to update both token and user data and store token in local storage
  const UpdateUserData = async (token, data) => {
    await accessToken(token);
    await setData(data);
    localStorage.setItem('accessToken', token);
    localStorage.setItem('userData', data);
  };

  // Render provider components with respective values
  return (
    <AuthContext.Provider value={AccessToken}>
      <UserContext.Provider value={User}>
        <UserUpdateContext.Provider value={UpdateUserData}>
          {children}
        </UserUpdateContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
};
