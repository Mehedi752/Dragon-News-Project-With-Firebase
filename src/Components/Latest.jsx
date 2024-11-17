import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

const Latest = () => {
  return (
    <div className='bg-[#f3f3f3] mt-8 p-4 flex gap-4'>
      <button className='btn bg-[#d72050] rounded-none text-white'>
        Latest
      </button>
      <Marquee pauseOnHover={true}>
        <Link className='text-[#403f3f] text-lg font-medium ml-2'>
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link className='text-[#403f3f] text-lg font-medium ml-2'>
          Match Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  )
}

export default Latest
