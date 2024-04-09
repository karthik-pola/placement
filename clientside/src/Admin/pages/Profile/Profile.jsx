// import React, { useEffect, useState } from 'react'
// import AdminDashboard from '../../components/AdminDashboard'
// // import Header from './HeaderSection.jsx'
// import HeaderSection from './HeaderSection.jsx'
// import MiddleSection from './MiddleSection.jsx'
// import { useAccessToken } from '../../../middleware/AuthProvider.jsx'
// import axios from 'axios'

// const Profile = () => {
//   const AccessToken = useAccessToken();
//   const [data , setData ] = useState("userDetails"); 
  

//   const setUserData = async(user) =>{
//      setData(user);
//   }

//   useEffect(() => {
//     const fetchdata = async()=>{
//       console.log('Fetching data' , AccessToken);
//       const user = await axios.get("http://localhost:8000/api/v1/user/current-user",{
//         headers: {
//           'Authorization': `Bearer ${AccessToken}`
//         }
//       });
      
//       await setUserData(user.data.data);
//       setData(user.data.data);
//       console.log(user.data.data);
//     };
//   //  setAccessToken(AccessToken);
//     fetchdata();
//     console.log("user.data.data");
//     console.log(data);
//   },[]);


//   return (
//     <AdminDashboard>
//     <HeaderSection data={data}/>
//     {/* <MiddleSection data={data}/> */}
//     </AdminDashboard>
//   )
// }

// export default Profile





import React, { useEffect, useState } from 'react';
import AdminDashboard from '../../components/AdminDashboard';
import HeaderSection from './HeaderSection.jsx';
// Import MiddleSection if needed
import MiddleSection from './MiddleSection.jsx';
import { useAccessToken } from '../../../middleware/AuthProvider.jsx';
import axios from 'axios';

const Profile = () => {
  const AccessToken = useAccessToken();
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data', AccessToken);
        const response = await axios.get("http://localhost:8000/api/v1/user/current-user", {
          headers: {
            'Authorization': `Bearer ${AccessToken}`
          }
        });

        // Check if data is received successfully
        if (response && response.data && response.data.data) {
          setData(response.data.data); // Set data state
          console.log('User data:', response.data.data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); 
    
      // Call the fetch data function
  }, [AccessToken]); // Trigger effect when AccessToken changes

  return (
    <AdminDashboard>
      {data && <HeaderSection data={data} />} {/* Render HeaderSection only if data is available */}
      {/* Render MiddleSection if needed */}
      {data && <MiddleSection data={data} />}
    </AdminDashboard>
  );
}

export default Profile;

