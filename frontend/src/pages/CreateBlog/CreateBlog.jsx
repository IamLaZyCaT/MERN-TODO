import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import '../../style/form.scss';


const CreateBlog = () => {

    const nav = useNavigate();

    const [title,setTitle]=useState("");
    const [subTitle,setSubTitle]=useState("");
    const [description,setDescription]=useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log(formData);
        const data={
            title:title,
        subTitle:subTitle,
        description:description
        }
       const response= await axios.post("http://localhost:3000/createBlog",data);
       if(response.status===200){
           nav("/");
       }
       else{
        alert('response.data.message')
       }
       console.log(response);
    };

  return (
    <>
      <Navbar/>
    
         <div className="form-container">
            <div className="form-title">Add to the List</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-input"
                        onChange={(e)=>setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="subTitle">Subtitle</label>
                    <input
                        type="text"
                        id="subTitle"
                        name="subTitle"
                        className="form-input"
                        onChange={(e)=>setSubTitle(e.target.value)}
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
                        onChange={(e)=>setDescription(e.target.value)}
                        required
                    />
                </div>
            
             
                
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    </>
  
  )
}

export default CreateBlog