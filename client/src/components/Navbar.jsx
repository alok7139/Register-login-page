import React from 'react'
import { NavLink  ,useLocation} from 'react-router-dom'

function Navbar() {
    const location = useLocation();
  const isRegisterPage = location.pathname === '/register';
  const isLoginPage = location.pathname === '/login';
  return (
    <header className='w-full bg-blue-900 h-16 pt-3 full-w-sm'>
    <nav className='text-3xl'>
      <div className='text-center text-white font-bold  md:text-3xl'>
        <NavLink to={'/'}>
          {isRegisterPage ? 'Register page' : isLoginPage ? 'Login page' : 'Authentication page'}
        </NavLink>
      </div>
    </nav>
  </header>
  )
}

export default Navbar
