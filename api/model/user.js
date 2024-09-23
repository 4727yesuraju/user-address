import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    addresses : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Address',
            default : [],
        }
    ]
},{timestamps : true});

const User = mongoose.model("User",userSchema);

export default User ; 