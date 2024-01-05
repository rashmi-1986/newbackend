const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (req, res) => {
  // Implementation for user registration
  const register = async (req, res) => {
    try {
      const { username, password } = req.body;
  
  
     // Check if the username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
  
     // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
  
     // Create a new user
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
  
  
     res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

};


const login = async (req, res) => {
  // Implementation for user login
  const login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
  
     // Find the user in the database
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
  
     // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
  
     // Generate a JWT token
      // const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  
     res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
};


module.exports = { register, login };