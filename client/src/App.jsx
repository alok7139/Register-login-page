import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Dashboard from './pages/Dashboard'
import { UserContextProvider } from '../Context/Usercontext'


axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials=true;

function App() {


  return (
    <UserContextProvider>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </UserContextProvider>
  )
}

export default App
