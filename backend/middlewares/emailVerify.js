const jwt = require('jsonwebtoken');
const User = require('../models/User');

const emailVerify = async (req, res, next) => {
    // Get the token from the Link that user click to verify
    const token = req.query.token;
    let userDecoded;
    if (!token) {
        return res.status(403).json({ message: "The token did not provide"});
    }
    
    try {
        // Verify the token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('err verify', err)
                return res.status(401).json({ message: 'Invalid or expired token' });
            }
            userDecoded = decoded.id;
            console.log('decode parts', decoded);            
        });

        // find user to update verify
        const user = await User.findById(userDecoded); 
        if(!user) {
            return res.status(404).json({ message: 'Cannot find the user'});
        }
        user.emailVeried = true;
        // save to database
        await user.save();
        return  res.redirect('http://localhost:3000/login');
    }catch(err) {
        console.log('err',err)
        return res.status(400).json({ message: 'Error during ', err});
    }
};

module.exports = emailVerify;
