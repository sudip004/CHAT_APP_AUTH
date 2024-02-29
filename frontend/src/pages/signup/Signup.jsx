import { Link } from "react-router-dom"
import Gender from "./Gender"
import { useState } from "react"


const Signup = () => {

    const [inputs,setInputs] = useState({
      fullName:"",
      userName:"",
      password:"",
      confirmPassword:"",
      gender:""
    })

    const handelCheckboxGender = (gender)=>{
      setInputs({...inputs,gender})
  }
    const handelSubmit = (e)=>{
      e.preventDefault()
      console.log(inputs);
    }

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto  ">
    <div
      className=" w-full p-5 rounded-lg shadow-md bg-gray-400  bg-clip-padding
     backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center    "
    >
      <h1 className=" text-3xl font-semibold text-center text-white">
        Signup
      </h1>

      <form  onSubmit={handelSubmit}>
        <div className="flex flex-col items-center justify-around min-h-96 w-full ">
        <input
            type="text"
            placeholder="Full-Name"
            className="input input-bordered input-secondary w-full max-w-xs"
            value={inputs.fullName}
            onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
          />
          <input
            type="text"
            placeholder="UserName"
            className="input input-bordered input-secondary w-full max-w-xs"
            value={inputs.userName}
            onChange={(e)=> setInputs({...inputs,userName:e.target.value})}
          />

          <input
            type="password"
            placeholder=" Password"
            className="input input-bordered input-accent w-full max-w-xs"
            value={inputs.password}
            onChange={(e)=> setInputs({...inputs,password:e.target.value})}
          />
           <input
            type=" Confirm password"
            placeholder=" Password"
            className="input input-bordered input-accent w-full max-w-xs"
            value={inputs.confirmPassword}
            onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
          />
           {/* Gender checkBox */}
           {/* <label className=" text-2xl text-red-500 ">Gender</label> */}
              <Gender tochangeGender={handelCheckboxGender} selectGender={inputs.gender}/>

        </div>
        <Link to="/login" className="text-sm hover:underline hover:text-blue-600 hover: text-lg mt-2 inline-blocks">
          {"Already"} have an account? <span className=" text-lg">Login</span>
        </Link>
        <button type="submit" className=" btn btn-block btn-sm mt-2 border-slate-700">Sign-up</button>
      </form>
    </div>
  </div>
  )
}

export default Signup