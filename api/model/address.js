import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    housenumber : {
       type : String,
       required : true,
    },
    street : {
        type : String,
        required : true,
    } ,
    city : {
        type : String,
        required : true,
    } ,
    state : {
        type : String,
        required : true,
    } ,
    country : {
        type : String,
        required : true,
    },
    pincode : {
        type : String,
        required : true
    }
},{timestamps : true});

const Address = mongoose.model("Address",addressSchema);

export default Address ; 