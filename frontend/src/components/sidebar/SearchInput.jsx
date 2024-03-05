import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import toast from 'react-hot-toast'
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";


const SearchInput = () => {
  const [search,setSearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversation} = useGetConversations()

    const handelSubmit = (e)=> {
      e.preventDefault()
      if(!search) return
      if(search.length < 3 ) {
        return toast.error("search term at last  3 characters!")
      }

      const conversations = conversation.find((c)=>c.username.toLowerCase().includes(search.toLowerCase()))
      
      if(conversations){
        setSelectedConversation(conversations)
        setSearch("")
      }else{
        toast.error('No User Found')
      }
    }

  return (
    <form onSubmit={handelSubmit} className=" flex items-center gap-2">
        <input type="text" placeholder="Search..." className=" input input-bordered rounded-full" 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className=" btn btn-circle bg-sky-500 text-white">
            <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput