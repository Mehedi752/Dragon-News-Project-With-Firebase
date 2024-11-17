import { Link } from 'react-router-dom'
import userImg from '../../assets/user.png'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext)
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log('User signed out')
      })
      .catch(error => {
        // console.log(error)
      })
  }
  return (
    <div className='pt-8 flex justify-between items-center container mx-auto'>
      <div className=''>{user?.email}</div>
      <div className='flex gap-3 items-center text-[#706f6f] text-lg font-normal'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/career'>Career</Link>
      </div>

      <div className='flex gap-2 items-center'>
        {
          user && user.photoURL ? (
            <div className="flex flex-col items-center">
              <img src={user.photoURL} alt='' className='w-10 h-10 rounded-full bg-[#706f6f]' />
              <p className="text-xs font-semibold">{user.displayName}</p>
            </div>
          ) : (
            <img src={userImg} alt='' className='w-10 h-10 rounded-full' />
          )
        }
        {user && user.email ? (
          <button
            onClick={handleLogOut}
            className='bg-[#403f3f] btn rounded-none btn-neutral text-white'
          >
            Logout
          </button>
        ) : (
          <Link
            className='bg-[#403f3f] btn rounded-none btn-neutral text-white'
            to={'/auth/login'}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
