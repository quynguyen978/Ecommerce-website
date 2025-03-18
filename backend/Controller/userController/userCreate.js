const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mailMain = require('../../services/mailer');
const saltRounds = 10;

const createUser = async (req, res) => {
      const { full_name, email, passWord, phone } = req.body;
      const user = new User ({
            fullName: full_name,
            email,
            password: await bcrypt.hash(passWord, saltRounds),
            phoneNumber: phone,
      });

      // create token
      const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
      await mailMain(user.email, token);
      try {
            const newUser = await user.save();
            res.status(201).json({ message: 'User created', newUser});
      }
      catch(err) {
            res.status(500).json({ message: err.message });
      }
}
module.exports = createUser;