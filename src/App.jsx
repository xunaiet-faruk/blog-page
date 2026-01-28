
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navbar from './Component/Navbar/Navbar'
import Outlinebar from './Component/Outline/Outlinebar'

function App() {

  const [bolgsData, setBlogsData] = useState([])

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogsData(data))

  }, [])


  return (
    <>

      <Navbar />
      <h1 className='text-5xl font-bold p-12'>Blogs Cafe : {bolgsData.length}</h1>

      <div className='flex text-center gap-30'>
        <div className='w-[70%] grid gap-10'>
          {
            bolgsData.map(blog => <Blogs blog={blog}></Blogs>)
          }
        </div>
        <div className=''>
          <Outlinebar></Outlinebar>
        </div>
      </div>


    </>
  )
}

export default App
