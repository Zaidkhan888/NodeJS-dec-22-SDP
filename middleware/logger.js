/*
finish is a method

*/


module.exports = (req,res,next)=>{
    res.on("finish" , ()=>{
        console.log("request log: " , res.statusCode , req.url , req.method);
    })

    next();

}