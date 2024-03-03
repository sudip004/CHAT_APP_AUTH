import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:4
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
    // timestamp for store the time to created
},{timestamps:true})

const User = new mongoose.model("User",userSchema)

export default User;
