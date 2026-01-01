require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const { startBirthdayCronJob } = require('./jobs/birthdayJob');

const PORT = process.env.PORT || 3000;


connectDB();


startBirthdayCronJob();


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});