// src/controllers/authController.js
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { generateToken } = require("../config/jwt");

async function signup(req, res) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).json({ message: "Invalid credentials" });
    const token = generateToken({ id: user._id, email: user.email });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { signup, login };
