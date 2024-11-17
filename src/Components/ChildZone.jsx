import img1 from '../../assets/swimming.png'
import img2 from '../../assets/class.png'
import img3 from '../../assets/playground.png'
import imgBG from '../../assets/bg.png'

const ChildZone = () => {
  return (
    <div className=''>
      <div className='bg-[#f3f3f3] px-3 py-4 mt-4'>
        <h3 className='text-[#403f3f] text-xl font-semibold'>Q-Zone</h3>

        <div className=''>
          <img src={img1} alt='' className='' />
          <img src={img2} alt='' className='' />
          <img src={img3} alt='' className='' />
        </div>
      </div>
      <img src={imgBG} alt='' className='py-5' />
    </div>
  )
}

export default ChildZone
