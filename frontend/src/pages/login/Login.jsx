import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

    const {loading,login} = useLogin()

  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")

  const handelSubmit = async(e) => {
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto  ">
      <div
        className=" w-full p-5 rounded-lg shadow-md bg-gray-400  bg-clip-padding
       backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center    "
      >
        <h1 className=" text-3xl font-semibold text-center text-white">
          Login
        </h1>

        <form onSubmit={handelSubmit}>
          <div className="flex flex-col items-center justify-around min-h-48 w-full ">
            <input
              type="text"
              placeholder="UserName"
              className="input input-bordered input-secondary w-full max-w-xs"
              value={username}
              onChange={(e)=>setUsername(e.target.value) }
            />
            <input
              type="password"
              placeholder=" Password"
              className="input input-bordered input-accent w-full max-w-xs"
              value={password}
              onChange={(e)=>setPassword(e.target.value) }
            />
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 hover: text-lg mt-2 inline-blocks">
            {"Don't"} have an account? <span className=" text-lg">Sign up</span>
          </Link>
          <button type="submit" className=" btn btn-block btn-sm mt-2 border-slate-700"
          disabled={loading}
          >{loading ? <span className=" loading loading-spinner"></span> : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
