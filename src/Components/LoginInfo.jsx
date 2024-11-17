import { useContext } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LoginInfo = () => {
  const { signInWithGoogle, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        setUser(result.user)
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        // console.log(error)
      })
  }
  return (
    <div>
      <h3 className='text-black font-bold text-2xl mb-5'>Login With</h3>
      <div
        onClick={handleLoginWithGoogle}
        className='flex gap-2 items-center btn bg-white border-blue-600 mb-3'
      >
        <FaGoogle className=' text-blue-600'></FaGoogle>
        <p className=''>Login with Google</p>
      </div>
      <div className='flex gap-2 items-center btn bg-white border-black'>
        <FaGithub className=''></FaGithub>
        <p className=''>Login with Github</p>
      </div>
    </div>
  )
}

export default LoginInfo
