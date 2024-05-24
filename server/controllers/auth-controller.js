const asyncHandler = require("express-async-handler");
const { Sequelize, Op } = require("sequelize");
const { AuthUser } = require("../models");

const Login = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email) {
    return res.status(400).json({ message: "Username or Email is required" });
  }

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  try {
    if (username && email) {
      user = await AuthUser.findOne({
        where: {
          [Sequelize.Op.or]: [{ UserName: username }, { Email: email }],
          Password: password,
        },
      });
    } else if (username) {
      user = await AuthUser.findOne({
        where: {
          UserName: username,
          Password: password,
        },
      });
    } else if (email) {
      user = await AuthUser.findOne({
        where: {
          Email: email,
          Password: password,
        },
      });
    }

    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (err) {
    console.error("Database query failed:", err);
    res.status(500).json({ message: "Server error" });
  }
});

const SignUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Username, Email, and Password are required" });
  }

  try {
    const existingUser = await AuthUser.findOne({
      where: {
        [Op.or]: [{ UserName: username }, { Email: email }],
      },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Username or Email already exists" });
    }

    const newUser = await AuthUser.create({
      UserName: username,
      Email: email,
      Password: password,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    console.error("Database query failed:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = {
  Login,
  SignUp,
};
