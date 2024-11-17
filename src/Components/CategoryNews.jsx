import { BsShare } from 'react-icons/bs'
import { CiBookmark } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { Link, useLoaderData } from 'react-router-dom'

const CategoryNews = () => {
  const data = useLoaderData()
  // console.log(data.data);
  const news = data.data
  // console.log(news)
  return (
    <div className='mx-5'>
      {news.map(news => (
        <div
          key={news._id}
          className='mt-8 rounded-[5px] border border-[#e7e7e7]'
        >
          <div className='flex justify-between bg-[#f3f3f3] p-5 mr-0 w-full'>
            <div className='flex gap-3 items-center'>
              <img
                src={news.author.img}
                alt=''
                className='w-10 h-10 rounded-full'
              />
              <div className='flex flex-col gap-3'>
                <h3 className=''>{news.author.name}</h3>
                <p className=''>{news.author.published_date}</p>
              </div>
            </div>

            <div className='flex gap-2 items-center'>
              <CiBookmark></CiBookmark>
              <BsShare></BsShare>
            </div>
          </div>

          <h3 className='text-[#403f3f] text-xl font-bold p-5 pr-[400px]'>
            {news.title}
          </h3>

          <img src={news.image_url} alt='' className='w-full p-5' />

          <p className='px-5 pt-5 text-[#706f6f] text-base'>{news.details}..</p>

          <Link to={`/news/${news._id}`} className='text-[#ff8c47] px-5 bg-white pb-5'>
            Read More
          </Link>

          <div className='border-t mx-5 pb-5'></div>

          <div className='flex justify-between pr-5'>
            <div className='px-5 pb-5 flex gap-3'>
              <div className='rating'>
                <input
                  type='radio'
                  name='rating-2'
                  className='w-5 h-5 mask mask-star-2 bg-[#f8bf04]'
                  checked={news.rating.number >= 1}
                  readOnly
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='w-5 h-5 mask mask-star-2 bg-[#f8bf04]'
                  checked={news.rating.number >= 2}
                  readOnly
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='w-5 h-5 mask mask-star-2 bg-[#f8bf04]'
                  checked={news.rating.number >= 3}
                  readOnly
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='w-5 h-5 mask mask-star-2 bg-[#f8bf04]'
                  checked={news.rating.number >= 4}
                  readOnly
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='w-5 h-5 mask mask-star-2 bg-[#f8bf04]'
                  checked={news.rating.number >= 5}
                  readOnly
                />
              </div>
              <h3 className=''>{news.rating.number}</h3>
            </div>

            <div className='flex gap-3'>
              <FaEye className='w-6 h-6 text-[#403f3f]'></FaEye>
              <span className=''>{news.total_view}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryNews
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
