import User from "../model/user.js";

export async function getAddressForUser(req,res){
    try {
        const {username}  = req.params;
        const user = await User.findOne({username}).populate("addresses");
        
        console.log(user);
        if(!user) return res.status(201).json([]);

        const addresses = user.addresses; 
        res.status(200).json({
            data : addresses
        })
    } catch (error) {
        res.status(error.status || 500).json({
            error : error.message
        })
    }
}