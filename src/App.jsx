import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog =>{
    const newBookmarkedArray = [...bookmarks, blog];
    setBookmarks(newBookmarkedArray);
  } 

  return (
    <div className="max-w-7xl p-3 md:p-6 lg:p-12 mx-auto">
     <Header></Header>
     <main className='flex flex-col md:flex-row justify-start mt-8'>
        <Blogs handleBookmark={handleBookmark}/>
        <Bookmarks bookmarks={bookmarks}/>

     </main>



    </div>
  )
}

export default App
