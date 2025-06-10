const bcrypt = require('bcrypt');
const User = require('../models/User');

// Signup controller
exports.signup = async (req, res) => {
  console.log('Signup request body:', req.body);
  try {
    const { name, email, password, role, phone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,  // 'client' or 'owner'
      phone
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup.' });
  }
};
