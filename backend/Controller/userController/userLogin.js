const bcrypt = require('bcrypt');
const User = require('../../models/User');

const userLogin = async (req, res) => {
      const { email, passWord} = req.body;

      try {
            // find the user
            const user = await User.findOne({ email });
            if(!user) {
                  return res.status(400).json({ message: 'User not found'});
            }
            const match = await bcrypt.compare(passWord,user.password );
            if(match) {
                  return res.status(200).json({ message: 'Login successful', user });
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