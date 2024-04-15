import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Home() {
    
  return (
    <>
    
    
    <div className='flex justify-center items-center min-h-screen bg-indigo-200 '>
    <div className='bg-white p-8 rounded-lg shadow-lg sm:w-96 md:w-1/2 lg:w-2/5 xl:w-1/3'>
      <div className='flex justify-center items-center gap-6 flex-col'>
     
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-lg font-bold mb-4'>If you are a new user</h1>
            <button className='btn-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <Link to={'/register'}>Register</Link>
            </button>
          </div>
   
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-lg font-bold mb-4'>Already a user?</h1>
            <button className='btn-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <Link to={'/login'}>Login</Link>
            </button>
          </div>
   
      </div>
    </div>
  </div>

  </>
    
  )
}

export default Home
