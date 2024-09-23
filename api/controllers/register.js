import Address from "../model/address.js";
import User from "../model/user.js";

import isValid from "../utils/isValid.js";

export const register = async (req,res)=>{
    try {
        const {username,address} = req.body;
        if(!isValid(username,address)){
            return res.status(400).json({
                error : "all fields are required"
            })     
        }

        let user = await User.findOne({username});

        if(!user){
            user = new User({username})
        }

        const newAddress = new Address({...address});

        if(newAddress){
            user.addresses.push(newAddress._id);
        }

        // await user.save();
        // await newMessage.save();

        await Promise.all([user.save(),newAddress.save()]);

        res.status(201).json({
            data :{
                username,
                address
            }
        })
    } catch (error) {
        res.status(error.status || 500).json({
            error : error.message
        })
    }
}