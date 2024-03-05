import {useAuthContext} from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation"


const Message = ({message}) => {
console.log("message",message.newMessage ? message.newMessage : message);
  const {authUser} = useAuthContext()
  console.log("authuser",authUser);
  const {selectedConversation} = useConversation()
  console.log("conversation",selectedConversation);
  const forme = message.senderId === authUser._id
  console.log(forme);
  const chatClassName = forme ? 'chat-end' : 'chat-start'
  const profilePic = forme ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = forme ? "bg-blue-500" : ""
  const formattedTime = extractTime(message.newMessage ? message.newMessage.createdAt : message.createdAt)

  return (
    <div className={`chat ${chatClassName}`}>
        <div className=" chat-image avatar">
            <div className=" w-10 rounded-full">
                <img src={profilePic} alt="" />
            </div>
        </div>
        <div className={` chat-bubble text-white ${bubbleBgColor} pb-2`}>{forme ? message.newMessage.message : message.message}</div>
        <div className={" chat-footer opacity-50 text-xs flex gap-1"}>{formattedTime}</div>
    </div>
  )
}
//  newMessage

export default Message