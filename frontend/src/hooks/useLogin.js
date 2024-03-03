import toast from "react-hot-toast";
import {useState} from 'react'
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()

  const login = async (username, password) => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      console.log("login data", data);
      if (data.error) {
        console.log("error on hook login page");
        throw new Error(data.error);
      }

      // set localstorage
      localStorage.setItem("chatUser",JSON.stringify(data))
      setAuthUser(data)
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading, login}
};

export default useLogin;
