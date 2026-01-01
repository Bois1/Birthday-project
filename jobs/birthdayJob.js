const cron = require('node-cron');
const User = require('../models/User');
const { sendBirthdayEmail } = require('../services/emailService');

const startBirthdayCronJob = () => {
  cron.schedule('* * * * *', async () => {
    console.log('Checking for birthdays today...');

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    try {
      const celebrants = await User.find({
        $expr: {
          $and: [
            { $eq: [{ $month: '$dob' }, month] },
            { $eq: [{ $dayOfMonth: '$dob' }, day] },
          ],
        },
      });

      console.log(`Found ${celebrants.length} birthday(s) today.`);

      for (const user of celebrants) {
        await sendBirthdayEmail(user);
      }
    } catch (err) {
      console.error('Cron job error:', err);
    }
  });

  console.log('Birthday cron job scheduled for 7:00 AM daily.');
};

module.exports = { startBirthdayCronJob };