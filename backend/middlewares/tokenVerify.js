const jwt = require('jsonwebtoken');

const tokenVerify = async (req, res, next) => {

      const token = req.headers['authorization'];
      
      if(!token) {
            return res.status(403).json({ message: 'No token provided'});
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                        return res.status(401).json({ message: 'Unauthorized for front end'});
            }
            console.log('User is authenticated', decoded);
            next();
      })
}
module.exports = tokenVerify;