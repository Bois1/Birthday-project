const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });
};

const sendBirthdayEmail = async (user) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: user.email,
    subject: `Happy Birthday, ${user.name}!`,
    html: `
      <div style="font-family: Arial; max-width: 600px; margin: auto; padding: 20; border: 1px solid #eee; border-radius: 10px;">
        <h2>Happy Birthday, ${user.name}! 🎂</h2>
        <p>Wishing you a fantastic day filled with joy, laughter, and cake!</p>
        <p>Thank you for being an amazing part of our community.</p>
        <hr>
        <p>— The Cynergy Team</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${user.email}`);
  } catch (err) {
    console.error(`Failed to send email to ${user.email}:`, err.message);
  }
};

module.exports = { sendBirthdayEmail };