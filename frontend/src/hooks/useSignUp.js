import { useState } from "react"
import toast from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext"

const useSignUp = () => {

 const[loading, setLoading] = useState(false)
 const {setAuthUser} = useAuthContext()

 const signup = async({fullName,username,password,confirmPassword,gender}) => {
    const success = handelInputError({fullName,username,password,confirmPassword,gender})
    if(!success) return;
    setLoading(true);
    try {
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers: {"Content-Type": "application/json" },
            body:JSON.stringify({ fullName, username, password, confirmPassword ,gender })
        })
        const data = await res.json()
        console.log("fetch data",data);
        if(data.error){
            console.log("error on itttt usesignup page");
            throw new Error(data.error)
        }

        // if user signup then  save the token in local storage and redirect to dashboard page
        // localstorage
        localStorage.setItem("chatUser",JSON.stringify(data))
        setAuthUser(data)
    } catch (error) {
        setLoading(false)
    }
 }

 return{ loading, signup}
  
}

export default useSignUp


function handelInputError({fullName,username,password,confirmPassword,gender}) {
        if(!fullName || !username || !password || !confirmPassword || !gender ) {
            toast.error( "Please fill all fields") 
            return false;
        }
        if(!password || !confirmPassword){
            toast.error("Password do not match")
            return false;
        }
        if(password.length < 6){
            toast.error("Password must be at least 6 characters")
            return false;
        }
    return true;
}
