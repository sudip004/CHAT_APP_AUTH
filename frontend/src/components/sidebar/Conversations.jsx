import useGetConversations from "../../hooks/useGetConversations"
import { getRandomEmoji } from "../../utils/emojis";
// import useConversation from "../../zustand/useConversation"
import Conversation from "./Conversation"


const Conversations = () => {
 const{loading,conversation}= useGetConversations()
 console.log("conversations",conversation);
  return (
    <div className=" py-2 flex flex-col overflow-auto">
      {
        conversation.map((index,idx)=>(
          <Conversation 
          key={index._id}
          conversation={index}
          emojis={getRandomEmoji()}
          lastIndex={idx === index.length-1}
          />
        ))
      }

      {loading ? <span className=" loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations