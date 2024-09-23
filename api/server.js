import express from 'express';
import {config} from 'dotenv';
import connectToDB from './db/connectToDB.js';
config(); //to access env variable

//custom routes 
import registerRouter from './routes/register.js';
import userRouter from './routes/user.js';
import addressRouter from './routes/address.js';

const app = express();

//localhost:8080/test
app.get('/test',(req,res)=>{
    res.send("Hello from server :)");
});

app.use(express.json()); //to parst incoming request

app.use('/api',registerRouter);
app.use('/api/user',userRouter);
app.use('/api/address',addressRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    connectToDB();
    console.log(`server is running at ${PORT}`);
})