import { Link, useLoaderData } from 'react-router-dom'
import Header from './Header'
import Latest from './Latest'
import RightSide from './RightSide'
import { FaArrowLeft } from 'react-icons/fa'

const NewsLayout = () => {
  const data = useLoaderData()
//   console.log(data)
  const news = data.data[0];
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <Latest></Latest>

      <div className='flex justify-between gap-6 mt-6'>
        <div className='w-10/12'>
          <h3 className='text-[#403f3f] text-xl font-semibold mb-5'>
            Dragon News
          </h3>

          <div className='bg-white rounded-[5px] border border-[#e7e7e7] p-8'>
            <img src={news.image_url} alt='' className='mb-5' />
            <h3 className='text-[#403f3f] text-[25px] font-bold pr-[400px] mb-2'>
              {news.title}
            </h3>
            <p className='text-[#706f6f] text-base font-normal leading-relaxed mb-8'>
              {news.details}
            </p>

            <Link to={`/category/${news?.category_id}`} className='bg-[#d72050] text-white flex gap-3 w-[325px] items-center px-[26px] py-[10px]'>
              <FaArrowLeft></FaArrowLeft>
              All news in this category
            </Link>
          </div>
        </div>
        <RightSide></RightSide>
      </div>
    </div>
  )
}

export default NewsLayout

// {
//     "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "01",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 488,
//     "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
//     "author": {
//         "name": "Jimmy Dane",
//         "published_date": "2022-08-24 17:27:34",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
//     "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
//     "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
// }
