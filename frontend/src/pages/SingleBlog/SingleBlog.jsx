import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';


const SingleBlog = () => {
   const {id}=useParams();
   console.log(id);

   const [blog,setBlog]=useState({});
  

   useEffect(()=>{
        fetchSingleBlog();
   },[])

   const fetchSingleBlog=async()=>{
    const res=await axios('http://localhost:3000/blogs/'+id);
    console.log(res);
   setBlog(res.data.blog);
   }
    
  return (
    <>
   <Navbar/>
    <div className="container-one">
        <h1>{blog.title}</h1>
        <h2>{blog.subTitle}</h2>
        <p>{blog.description}</p>
    </div>
      
     
    </>
  )
}

export default SingleBlog