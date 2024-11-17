import { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        'https://openapi.programming-hero.com/api/news/categories'
      )
      const data = await response.json()
      setCategories(data.data.news_category)
    }
    fetchCategories()
  }, [])
  // console.log(categories)

  return (
    <div className=''>
      <h3 className='text-[#403f3f] text-xl font-semibold'>All Category</h3>
      <ul className='mt-4 flex flex-col gap-[30px]'>
        {categories.map(category => (
          <NavLink to={`/category/${category.category_id}`} key={category.category_id} className='btn  py-4 text-[#9f9f9f] font-medium'>
            {category.category_name}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default LeftSide;
