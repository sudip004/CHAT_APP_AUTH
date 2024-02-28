import jwt from 'jsonwebtoken'
import User from '../model/user.model.js'


export const protectedRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({error:"Unauthorized No token provided"})
        }

        const decode = jwt.verify(token,"SUDIPBASAK123")
        console.log(decode);
        if(!decode){
            return res.status(401).json({error:"Unauthorized Invalid token"})
        }
        const user = await User.findById(decode.userId)

        if(!user){
            return res.status(401).json({error:"User Not Found"})
        }
        // storing value
        req.user = user
        // passing this middleware
        next()

    } catch (error) {
        console.log("eror in Protected route", error);
        res.status(500).json({error:error.message})
    }
}

