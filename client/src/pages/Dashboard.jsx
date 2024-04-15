import React from 'react'
import { useContext } from 'react' 
import { userContext } from '../../Context/Usercontext'
import axios from 'axios'

function Dashboard() {
  const {user,setUser} = useContext(userContext)

  const handleLogout = async () => {
    try {
      await axios.delete('/logout',{
        
      });
      setUser(null);
      // Make a request to the logout endpoint
       // Clear the user context
      // Optionally, clear the token from local storage if you are using it
      // localStorage.removeItem('token');
      // Redirect the user to the login page
      window.location.href = '/login'; // Redirect to the login page
    } catch (error) {
      console.error('Logout error:', error);
      // Handle logout error if needed
    }
  };

  return (
    <>
    <div>
      Dashboard
      <img src='https://cdn-icons-png.flaticon.com/256/6681/6681204.png'/>
    </div>

    {!!user && (<h1>Hi {user.name}!</h1>)}


    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Dashboard
