const User = require('../../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUser = async (req, res) => {
      const { full_name, email, passWord, phone } = req.body;
      const user = new User ({
            fullName: full_name,
            email,
            password: await bcrypt.hash(passWord, saltRounds),
            phoneNumber: phone,
      });

      try {
            const newUser = await user.save();
            res.status(201).json({ message: 'User created', newUser});
      }
      catch(err) {
            res.status(500).json({ message: err.message });
      }
}
module.exports = createUser;