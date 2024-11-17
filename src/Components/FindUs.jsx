import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const FindUs = () => {
  return (
    <div className=''>
      <h3 className='text-black font-bold text-2xl mt-8 mb-5'>Find Us On</h3>
      <div className='join join-vertical flex *:bg-white *:text-[#706f6f] font-medium'>
        <button className='btn join-item justify-start'>
          <FaFacebook className='text-blue-600'></FaFacebook> Facebook
        </button>
        <button className='btn join-item justify-start'>
          <FaInstagram className='text-red-500'></FaInstagram> Instragram
        </button>
        <button className='btn join-item justify-start'>
          <FaTwitter className='text-sky-500'></FaTwitter> Twitter
        </button>
      </div>
    </div>
  )
}

export default FindUs
