import bcrypt from 'bcryptjs'
import User from '../model/user.model.js'
import generateTokenAndSetCookie from '../utils/generateToken.js'



export const login = async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid credential"})
        }
        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            id:user._id,
        fullName:user.fullName,
        username : user.username,
        profilePic:user.profilePic
        })

    } catch (error) {
        console.log("error in login",error);
        res.status(500).json({error:error.message})
    }
}
 export const signup = async(req,res)=>{

    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;
        
        if(password != confirmPassword){
            return res.status(400).json({error: "Passwords do not match"});
        }

        const user = await User.findOne({username})
        if(user) {
            res.status(400).json({error:"user will be exist"})
        }

        // First Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        // console.log(hashedPassword);
       // avtar placeholder .iran
        const boyProfilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const newUer = await User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender==="male" ? boyProfilepic : girlProfilepic
        })
        if(newUer){
             generateTokenAndSetCookie(newUer._id,res)
            await newUer.save()
        }
        res.status(201).json({message:"New user created successfully",
        id:newUer._id,
        fullName:newUer.fullName,
        username : newUer.username,
        profilePic:newUer.profilePic
    })

    } catch (error) {
        console.log("error in signup",error);
        res.status(500).json({error:error.message})
    }
}
 export const logout = async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(500).json({message:"Logout successfully"})
    } catch (error) {
        console.log("error in logout",error);
        res.status(500).json({error:error.message})
    }
}

