const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/', async (req, res) => {
  try {
    const users = await User.find().lean();
    res.render('index', { users });
  } catch (err) {
    res.status(500).send('Server error');
  }
});


router.post('/', async (req, res) => {
  const { name, email, dob } = req.body;

  if (!name || !email || !dob) {
    return res.status(400).send('All fields required');
  }

  try {
    const new_user = new User({ name, email, dob: new Date(dob) });
    await new_user.save();
    res.render('success', { name });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).send('Email already exists!');
    }
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

module.exports = router;