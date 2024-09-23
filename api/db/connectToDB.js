import mongoose from "mongoose";

export default async function connectToDB(){
    try {
        await mongoose.connect(process.env.CONNSTR);
        console.log("DB connected successfully");
    } catch (error) {
        console.log("while connecting to DB" + error.message);
    }
}
