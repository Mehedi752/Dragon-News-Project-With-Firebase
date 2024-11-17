import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Auth = () => {
  return (
    <div className='bg-[#f3f3f3]'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Auth
