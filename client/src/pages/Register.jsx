import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'

function Register() {
   
    const navigate = useNavigate();
    const [data, setdata] = useState({
        name:'',
        email:'',
        password:'',
    })
    const registeruser =async (e) => {
        e.preventDefault();
        const {name,email,password} = data
        try {
            const {data} = await axios.post('/register' , {
                name,email,password
            }) 
            if(data.error){
                toast.error(data.error);
            }
            else{
                setdata({})
                toast.success('Create account successfully!');
                navigate('/login');
            }
        } catch (error) {
            console.log(error); 
        }


    }

  return (
    

<div className='flex justify-center items-center min-h-screen bg-gray-300'>
  <div className='bg-white p-8 rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col md:flex-row'>
    <div className='md:mr-5 mb-5 md:mb-0 flex justify-center'>
      <img src='https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg' alt='register_img' className='w-80 h-full rounded' />
    </div>
    <div className='flex-1 flex flex-col justify-center'>
      <form onSubmit={registeruser} className='flex flex-col'>
        <label className='text-xl mb-2'>FullName</label>
        <input type='text' className='border-solid border-2 border-black p-3 mb-3' placeholder='Enter FullName' value={data.name} onChange={(e) => setdata({...data, name: e.target.value})} />
        <label className='text-xl mb-2'>Email</label>
        <input type='email' className='border-solid border-2 border-black p-3 mb-3' placeholder='Enter Email' value={data.email} onChange={(e) => setdata({...data, email: e.target.value})} />
        <label className='text-xl mb-2'>Password</label>
        <input type='password' className='border-solid border-2 border-black p-3 mb-4' placeholder='Enter Password' value={data.password} onChange={(e) => setdata({...data, password: e.target.value})} />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'>Create your account</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Register
