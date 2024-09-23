import Address from "../model/address.js";
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


export async function deleteUser(req,res){
    const {username} = req.params;
    try {
        const user = await User.findOne({username});
        await Address.deleteMany({_id : { $in : user.addresses }})
        await User.deleteOne({username})
        res.status(200).json({
            data : `no more ${username} here!`
        })
    } catch (error) {
        res.status(error.status || 500).json({
            error : error.message
        })
    }
}