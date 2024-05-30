const express =require('express');
const connectDatabase = require('./database/database');
const Blog = require('./model/blogModel');
const app= express();
const cors= require('cors');

app.use(cors({
    origin:"http://localhost:5173"
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connecting Database
connectDatabase();


//inserting and creating data in database
app.post("/createBlog",async(req,res)=>{

    await Blog.create({
        title:req.body.title,
        subTitle: req.body.subTitle,
        description:req.body.description
    })
    res.json({
        message:"Blog created successfully",
        status:201
    })
    console.log(req.body)
})

//Reading or viewing data
app.get("/blogs",async(req,res)=>{

const blogs=await Blog.find();
if(blogs.length==0){
    res.json({
        status:404,
        message:"No blogs found"
    })
}
else{
    res.json({
        status:201,
        message:"Blog fetch successfully",
        blogs:blogs
    })
}
})
//view single blog
app.get("/blogs/:id",async(req,res)=>{
    const id=req.params.id;
    const blog = await Blog.findById(id);
    console.log(blog);
    if(blog.length==0){
        res.json({
            status:404,
            message:"Blog not found"
        })
    }
else{
    res.json({
    status:200,
    message:"Blog fetch successfully",
    blog:blog,
    })
}

})

//update
app.patch("/blogs/:id",async (req,res)=>{
    const id=req.params.id;
    // const title= req.body.title;
    // const subTitle=req.body.subTitle;
    // const description=req.body.description;

    await Blog.findByIdAndUpdate(id,{
        title:req.body.title,
        subTitle:req.body.subTitle,
        description:req.body.description
    })
        
    res.json({
        status:201,
        message:"Blog updated successfully",
    })
    
})

//delete
app.delete("/blogs/:id",async(req,res)=>{
    const id=req.params.id;
    await Blog.findByIdAndDelete(id)
        res.json({
            status:201,
            message:"Blog deleted successfully"
        })
})

app.get('/',(req,res)=>{
    console.log("hello world");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});