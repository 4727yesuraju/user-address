import express from 'express';
import {config} from 'dotenv';
import connectToDB from './db/connectToDB.js';
config(); //to access env variable

//custom routes 
import router from './routes/register.js';

const app = express();

//localhost:8080/test
app.get('/test',(req,res)=>{
    res.send("Hello from server :)");
});

app.use('/api',router);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    connectToDB();
    console.log(`server is running at ${PORT}`);
})