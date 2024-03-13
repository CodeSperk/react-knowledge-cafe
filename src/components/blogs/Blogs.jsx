import { useEffect } from "react";
import { useState } from "react";
import Vlog from "../vlog/Vlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res=> res.json())
    .then(data=>setBlogs(data))
  },[])



  return (
    <div className="md:w-2/3 p-4 md:p-6 space-y-10">
     
        {
          blogs.map(blog => <Vlog 
            key={blog.id}
            blog={blog}
          ></Vlog>)
        }
  
      
    </div>
  );
};

export default Blogs;