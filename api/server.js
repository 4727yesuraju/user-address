import express from 'express';


const app = express();

//localhost:8080/test
app.get('/test',(req,res)=>{
    res.send("Hello from server :)");
});

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})