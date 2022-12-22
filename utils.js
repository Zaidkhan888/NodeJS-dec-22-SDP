// /*
// -use 

const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


const encrypt = (text) => {
    return bcrypt.genSalt(5)
    .then(salt => {
        return bcrypt.hash(text, salt)
    })
}

const compare = (text, hash) => {
    return bcrypt.compare(text, hash)
}



//first
const createAcessToken = (email)=>{
    return jwt.sign({
        // email : email
        email
    } ,"secret@123",{
        expiresIn : 5*60
    })
}

module.exports = {
    encrypt,
    compare ,
    createAcessToken
}
