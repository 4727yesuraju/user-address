import User from "../model/user.js"

export async function getUseresForTable(req,res){
    try {
        const users = await User.find();
        res.status(200).json({
            data : users
        })
    } catch (error) {
        res.status(error.status || 500).json({
            error : error.message
        })
    }
}