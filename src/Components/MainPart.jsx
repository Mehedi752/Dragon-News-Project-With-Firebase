import { Outlet } from 'react-router-dom'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const MainPart = () => {
  return (
    <div className='flex justify-between mt-[72px]'>
      <aside className='w-[275px]'>
        <LeftSide></LeftSide>
      </aside>
      <div className='w-full'>
        <Outlet></Outlet>
      </div>
      <aside className='w-[300px]'>
        <RightSide></RightSide>
      </aside>
    </div>
  )
}

export default MainPart
