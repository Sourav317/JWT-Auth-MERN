const user = require('../Models/UserModel');

module.exports.register = async(req,res) => {
    //res.send(req.body.name);
    try{
        const User = await user.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
        })

        res.status(201).json({
            success : "true",
            user : User
        })
    }
    catch(error){
        res.json({
            success : 'false',
            error : error.message
        })
    }

}

module.exports.login = (req,res) => {
    res.send('login working');
}