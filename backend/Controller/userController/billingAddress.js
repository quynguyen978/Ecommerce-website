const Address = require('../../models/BillingAddress');
const User = require('../../models/User');

const billingAddress = async(req, res) => {
      const {fullName, email, phone, address} = req.body;
  

      try {
            let existingAddress = await Address.findOne({ email, address});

            if( existingAddress ) {
                  console.log('account existed')
                 
            }
            else {
                  existingAddress = new Address({
                        fullName: fullName,
                        email: email,
                        phone: phone, 
                        address: address,
                  });
                  await existingAddress.save();
            }
            

            // find the user and update the user's address reference
            const user = await User.findOneAndUpdate({email: email}, 
                  {address: existingAddress._id}, 
                  { new: true} // return the updated user
            )

            if (!user) {
                  return res.status(404).json({ message: 'User not found.' });
                }

            res.status(201).json({message: 'User address was created.', existingAddress});
      }catch(err) {
            res.status(500).json({message: err.message});
      }

}

module.exports = billingAddress;