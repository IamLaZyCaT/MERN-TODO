
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import '../../style/navbar.scss';

const Home = () => {

    const nav=useNavigate();

    const [blogs,setBlogs]=useState([])
//api call
const fetchBlogs=async()=>{
    try{
        const response =await axios.get('http://localhost:3000/blogs/');
    console.log(response.data.blogs);
    setBlogs(response.data.blogs);
    }catch(error){
        alert("Something went wrong");
    }
    
}

useEffect(()=>{
    fetchBlogs();
},[])

  return (
    <>
    <Navbar/>
        <div className="container">
            <div className="todo-container">
                {blogs.map((blog)=>{
                    return(
                        <div key={blog._id} className="todo">
                            <div className="title">{blog.title}</div>
                            <div className="subTitle">{blog.subTitle}</div>
                            <div className="description">{blog.description}</div>
                            <div onClick={()=>nav(`/singleBlog/${blog._id}`)} className="btn description">See More</div>
                            <div className="icon">
                                <i className="fas fa-trash-alt" onClick={()=>{
                                    axios.delete(`http://localhost:3000/blogs/${blog._id}`)
                                   .then(()=>{
                                        fetchBlogs();
                                    })
                                }}></i>
                                <i className="fa-solid fa-pen-to-square" onClick={()=>nav(`/updateBlog/${blog._id}`)}></i>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="todo">
                    <div className="title">Title</div>
                    <div className="subTitle">subTitle</div>
                    <div className="description">description</div>
                </div> */}

                <a onClick={()=>nav('./createBlog')} className="add todo">
                    +
                </a>
            </div>
            
        </div>
      
    </>
  )
}

export default Home