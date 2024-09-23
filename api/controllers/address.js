import Address from "../model/address.js";
import User from "../model/user.js";

export async function getAddressForUser(req,res){
    try {
        const {username}  = req.params;
        const user = await User.findOne({username}).populate("addresses");
        
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

export async function deleteAddress(req,res){
    const {id} = req.params;
    const {username} = req.body;
    console.log(id,username)
    try {
        const user = await User.findOne({username})
        user.addresses = user.addresses.filter(aid=>aid!=id);
        await user.save();
        const address = await Address.findByIdAndDelete(id);
        res.status(200).json({
            data : "deleted successfully"
        })
    } catch (error) {
        console.log(error.message)
        res.status(error.status || 500).json({
            error : error.message
        })
    }
}