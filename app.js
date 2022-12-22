const express = require("express")
const dotenv = require("dotenv")
const logger = require("./middleware/logger");
const authRouter = require("./routes/authentication");
const app = express()
dotenv.config() ;
app.use(logger)



app.get("/greetings" ,  logger ,   (req,res)=>{
    // res.send("hello greetings :)")
    return res.status(200).json({
            message : "hello project!! :)"
    })
})



//follow a format of hitting request
app.use("/api/auth" , authRouter)

app.listen(process.env.PORT ,(error) =>{
    if(error){
        console.log(error);
    }
    console.log(`server is running of ${process.env.PORT} ` );
})