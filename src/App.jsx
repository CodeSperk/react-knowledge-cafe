import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = blog =>{
    let isAlreadyBookmarked = false;

    for (let bookmark of bookmarks){
      if(bookmark.id === blog.id){
        isAlreadyBookmarked = true;
      }
    }
    if(!isAlreadyBookmarked){
      const newBookmarkedArray = [...bookmarks, blog];
      setBookmarks(newBookmarkedArray);
    }
  } 

  const handleMarkedAsRead = (time, id) => {
    setReadingTime(readingTime + time);

    // remove read items
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <div className="max-w-7xl p-3 md:p-6 lg:p-12 mx-auto">
     <Header></Header>
     <main className='flex flex-col md:flex-row justify-start mt-8'>
        <Blogs handleBookmark={handleBookmark} handleMarkedAsRead={handleMarkedAsRead}/>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>

     </main>



    </div>
  )
}

export default App
