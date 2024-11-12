const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
      }
});

async function mailMain(userEmail, token) {
      try {
            const verificationLink = `http://localhost:5000/email/verify?token=${token}`
            const mailInfo = await transporter.sendMail({
                  from: '"Ecommercial website" <commercialwebsitebuilder@gmail.com>',
                  to: userEmail,
                  subject: 'Account Verify',
                  text: `Click the following link to verify your account: ${verificationLink}`,
                  html: `<p>Click <a href="${verificationLink}">here</a> to verify your account.</p>`,
            });

            console.log('Verification email sent: %s', mailInfo.messageId);
      } catch (err) {
            console.error('Error sending verification email:', err);
      }
}

module.exports = mailMain;
