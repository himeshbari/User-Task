

import User from "../models/userModel.js";
import JWT from "jsonwebtoken";
import bcryptjs from "bcrypt";

export const addUser = async (req, res) => {
  try {
    const { firstName, surname, email, username, department, designation, locationId, userId, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "User already registered. Please log in.",
      });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({
      firstName,
      surname,
      email,
      username,
      department,
      designation,
      locationId,
      userId,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    if (savedUser) {
      res.status(201).json({
        success: true,
        data: savedUser,
        message: "User registration successful.",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcryptjs.compare(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = JWT.sign(
      {
        _id: user._id,
        username: user.username,
        // Include other user properties as needed
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        ...user.toObject(),
        userId: user._id,
        locationId: user.locationId,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in login",
    });
  }
};

// Get all users
export const getUser = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json({
      success: true,
      data: data,
      message: "All User List",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
