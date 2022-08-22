const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const Response = require('../models/responseobj');
const { response } = require('express');

const SECRET = 'this is a big secret';

exports.login = async (req, res, next)=>{
    const {username, password} = req.body;
        if(username && password){
        let result;
        try{
        result = await User.findOne({username, password});
        }catch(err){
        
            return next(new Error('Failed to find User'));
        }
        
        if(result){
         const accessToken = jwt.sign({
                fullname:result.fullname,
                id: result._id,
                username: result.username,
                iat: Date.now()
            }, SECRET);

            res.status(200).json(new Response(false, null, {accessToken, "fullname":result.fullname, "username":result.username,"userID":result.id}));
        }else{
            res.status(404).json(new Response(true, 'Invalid username and password', null))
        }
    }else{
        res.status(404).json(new Response(true, "Please enter username and password", null))
    }

}


exports.authenticate = (req, res, next)=>{
    const [, token] = req.headers.authorization.split(" ");
    
    try{
        let result = jwt.verify(token, SECRET);
        next();

    }catch(err){
        res.status(400).json(new response(true, "Invalid JWT", null));
    }
}