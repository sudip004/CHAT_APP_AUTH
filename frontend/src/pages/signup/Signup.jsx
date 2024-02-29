import Gender from "./Gender"


const Signup = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto  ">
    <div
      className=" w-full p-5 rounded-lg shadow-md bg-gray-400  bg-clip-padding
     backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col items-center    "
    >
      <h1 className=" text-3xl font-semibold text-center text-white">
        Signup
      </h1>

      <form>
        <div className="flex flex-col items-center justify-around min-h-96 w-full ">
        <input
            type="text"
            placeholder="Full-Name"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="UserName"
            className="input input-bordered input-secondary w-full max-w-xs"
          />

          <input
            type="password"
            placeholder=" Password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
           <input
            type=" Confirm password"
            placeholder=" Password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
           {/* Gender checkBox */}
           {/* <label className=" text-2xl text-red-500 ">Gender</label> */}
              <Gender />

        </div>
        <a href="#" className="text-sm hover:underline hover:text-blue-600 hover: text-lg mt-2 inline-blocks">
          {"Already"} have an account? <span className=" text-lg">Login</span>
        </a>
      </form>
    </div>
  </div>
  )
}

export default Signup