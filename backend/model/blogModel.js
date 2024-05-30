const mongoose = require('mongoose');

const modelSchema= mongoose.Schema({
    title:{
        type:String
    },
    subTitle:{
        type:String
    },
    description:{
        type:String
    }

},
{
    timestamps:true
})

const Blog= mongoose.model("Blog",modelSchema);
module.exports=Blog;
