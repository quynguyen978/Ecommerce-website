const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const main = require('../../services/mailer');

const userLogin = async (req, res) => {
      const { email, passWord} = req.body;

      try {
            // find the user
            const user = await User.findOne({ email });
            if(!user) {
                  return res.status(404).json({ message: 'User not found'});
            }
            if ( !user.emailVeried ) {
                  return res.status(403).json({ message: 'The email needs verify to login.'})
            }
            
            const match = await bcrypt.compare(passWord,user.password );
            if(match) {
                  const token = jwt.sign(
                        {id: user._id, 
                        email: user.email,},
                        process.env.JWT_SECRET,
                        { expiresIn: '1h'}
                  );
                  return res.status(200).json({ message: 'Login successful',token, user });
            }
            else {
                  return res.status(400).json({ message: ' Invalid credentials '});
            }
      }
      catch(err) {
            res.status(500).json({ message: err.message });
      }
}
module.exports = userLogin;