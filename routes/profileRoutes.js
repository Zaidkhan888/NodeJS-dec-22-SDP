const {Router} = require("express")
const verifyAuth = require("../middleware/verifyAuth")
const User = require("../models/user")

const profileRouter = Router();

profileRouter.get("/" ,verifyAuth , (req,res)=>{
    return Promise.resolve()
    .then(()=> User.findOne({email:req.email}))
    .then((data)=>{
        if(!data){
            throw Error("user not found")
        }

        data = data.toJSON()
        delete data.password


    return res.status(200).json({
        'message' : "Profile fetch sucessfully" ,
        data
    })

})
.catch(error =>{
    return res.status(422).json({
        message: 'profile fetch failed' ,
        error : error.message
    })

})

})

module.exports = profileRouter