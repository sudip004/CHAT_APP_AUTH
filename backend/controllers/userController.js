import User from "../model/user.model.js";

export const getUsersForSidebar = async (req,res) => {
    try {
        const logedInUserId = req.user._id
        const filterUsers = await User.find({_id: {$ne: logedInUserId}}).select("-password")
        res.status(200).json(filterUsers)

    } catch (error) {
        console.log("error in getuserSideBar controller",error);
        res.status(500).json({error: "Internal Server Error"})
    }
}
export const getUsers = async (req,res) => {
    try {
        const filterUsers = await User.find()
        res.status(200).json(filterUsers)

    } catch (error) {
        console.log("error in gettttttttt",error);
        res.status(500).json({error: "Internal Server Error"})
    }
}