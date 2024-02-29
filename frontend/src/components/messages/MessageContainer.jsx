import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const nochatSelected = true;
  return (
    <div className=" md:min-w-[450px] flex flex-col">
      {nochatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className=" bg-slate-500 px-4 py-2 mb-2">
            <span className=" label-text">To:</span>{" "}
            <span className=" text-gray-800 font-bold">Sudip Basak</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div
        className=" px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold
             flex flex-col items-center gap-2"
      >
        <p>Welcome sudip</p>
        <p>Select A Person to Start Chat</p>
      </div>
    </div>
  );
};
