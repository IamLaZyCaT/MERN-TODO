import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../component/Navbar/Navbar"

const UpdateBlog = () => {

    const {id} =useParams();
    console.log(id);
    const nav=useNavigate();

    //handle change
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setBlog({
            ...blog,
            [name]:value
        })
    }

    const UpdateBlog=async(e)=>{
        e.preventDefault();
        const res=await axios.patch('http://localhost:3000/blogs/'+id,blog);
        console.log(res);
        if(res.status==200){
            alert('Blog updated successfully');
            nav('/');
        }
        else{
            alert('updated failed');
        }
        
    }

    const [blog,setBlog]=useState({});
    useEffect(()=>{
        fetchBlog();
    },[])

  
    const fetchBlog=async()=>{
        const res=await axios('http://localhost:3000/blogs/'+id);
        console.log(res);
        setBlog(res.data.blog);
    }
  return (
    <>
    <Navbar/>
            <div>UpdateBlog</div>
            <div className="form-container">
            <div className="form-title">Add to the List</div>
            <form onSubmit={UpdateBlog}>
                <div className="form-group">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={blog.title}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="subTitle">Subtitle</label>
                    <input
                        type="text"
                        id="subTitle"
                        name="subTitle"
                        value={blog.subTitle}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        className="form-input"
                        value={blog.description}
                        onChange={handleChange}
                        required
                    />
                </div>
            
             
                
                <button type="submit" className="form-button">Update</button>
            </form>
        </div>
    </>
    
  )
}

export default UpdateBlog