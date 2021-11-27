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

module.exports.login = async (req, res) => {
	const User = await user.findOne({
		email: req.body.email,
        password: req.body.password
	})

	if (!User) {
		return { status: 'error', error: 'Invalid login' }
	}
    else{
        res.status(200).send({
            success : 'true',
            message : "logged in"
        })
    }
}