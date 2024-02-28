import Message from '../model/message.model.js'
import conversation from '../model/conversation.model.js'


export const sendMessage = async (req,res) => {
    try {
       const {message} = req.body;
       const { id : receiverId } = req.params;
       // its comming from protected middleware
       const senderId = req.user._id

       let Conversation = await conversation.findOne({
        perticipants:{$all: [senderId,receiverId]}
       })

       if(!Conversation){
             Conversation = await conversation.create({
                 perticipants: [senderId,receiverId],
                // dont added meessage section because of in model
                // i can write default is empty array
            })
        }

        const newMessage = Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            Conversation.messages.push(newMessage._id)
        }

        // IN Fauture i Can add Socket.io


        // await Conversation.save()
        // await newMessage.save()

        // Here this is optimise it
        // because this two run paralleli 
        await Promise.all([Conversation.save(),newMessage.save()]);

        res.status(201).json({newMessage})

    } catch (error) {
        console.log("error in SendMesssage controller",error);
        res.status(500).json({error:error.message})
    }
}

// Get Message
export const getMessage = async (req,res) => {
    try {
        const {id: userToChatId} = req.params
        const senderId  = req.user._id

        const Conversation = await conversation.findOne({
            perticipants: {$all:[senderId,userToChatId]}
        }).populate("messages")

        res.status(200).json(Conversation.messages)

    } catch (error) {
        console.log("error in GET-Messsage controller",error);
        res.status(500).json({error:error.message})
    }
}
