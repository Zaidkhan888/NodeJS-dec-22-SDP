const jwt = require("jsonwebtoken")


module.exports = (req,res,next)=>{


try {


    //headers in http module
    const acessToken = req.headers.authorization

    if(!acessToken){
        throw Error("acess toekn not found ")
    }

    const decoded = jwt.verify(acessToken , 'secret@123')
    req.email = decoded.email  //object and email is its key

    next()
    
} catch (error) {
    return res.status(401).json({
        message : "unauthorized acess" ,
        error :  error.message
    })
    
}
}