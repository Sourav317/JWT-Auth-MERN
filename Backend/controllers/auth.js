const user = require('../Models/UserModel');
const jwt = require('jsonwebtoken');

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

module.exports.login = async (req, res) => {
	const User = await user.findOne({
		email: req.body.email,
        password: req.body.password
	})

	if (!User) {
		res.json( { status: 'error', error: 'Invalid login' });
	}
    else{
        //Valid User so create JWT token which could be used to prvent unauthorised or not logged in users
        // from accessing the protected routes ----- see Products project from udemy in auth_controller.js - checkUser function - Line 78 
        
        const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			process.env.Secret
		);

        res.status(200).send({
            success : 'true',
            message : "logged in",
            Token : token
        })
    }
}