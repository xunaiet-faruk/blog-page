
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Navbar from './Component/Navbar/Navbar'
import Outlinebar from './Component/Outline/Outlinebar'

function App() {

  const [bolgsData, setBlogsData] = useState([])
  const [book,setBook] =useState([])

  useEffect(() => {
    fetch("blogs.json")
      .then(res => res.json())
      .then(data => setBlogsData(data))

  }, [])


  const handleBook = (blog) =>{
    setBook([...book,blog])
    console.log(book);
  }


  return (
    <>

      <Navbar />
      <h1 className='text-5xl font-bold p-12'>Blogs Cafe : {bolgsData.length}</h1>

      <div className='flex  justify-center'>
        <div className='w-[70%] grid gap-10'>
          {
            bolgsData.map(blog => <Blogs blog={blog} handleBook={handleBook}></Blogs>)
          }
        </div>
        <div className=''>
          <Outlinebar book={book}></Outlinebar>
        </div>
      </div>


    </>
  )
}

export default App
