import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();
   const [data, setdata] = useState({
      email:'',
      Password:'',
   })

   const loginuser = async(e) => {
        e.preventDefault();
        const {email,password} = data;
        try {
          const {data} = await axios.post('/login' , {
            email,password
          });
          if(data.error){
            toast.error(data.error);
          }
          else{
            setdata({});
            navigate('/dashboard');
          }
        } catch (error) {
            console.log(error);
        } 
   }




  return (
    
    <div className='flex justify-center items-center min-h-screen bg-gray-300'>
  <div className='bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col items-center'>
    <img src='https://cdn-icons-png.flaticon.com/256/6681/6681204.png' alt='login_img' className='w-28 h-auto mb-6' />
    <form onSubmit={loginuser} className='flex flex-col justify-center w-full'>
      <label className='text-xl mb-2'>Email</label>
      <input type='email' className='border-solid border-2 border-black p-3 mb-3' placeholder='Enter Email' value={data.email} onChange={(e) => setdata({...data, email: e.target.value})} />
      <label className='text-xl mb-2'>Password</label>
      <input type='password' className='border-solid border-2 border-black p-3 mb-3' placeholder='Enter Password' value={data.password} onChange={(e) => setdata({...data, password: e.target.value})} />
      <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'>Login</button>
    </form>
  </div>
</div>

  )
}

export default Login
