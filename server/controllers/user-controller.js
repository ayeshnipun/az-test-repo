const asyncHandler = require("express-async-handler");
const { User } = require("../models");
const { AuthUser } = require("../models");

const getUser = asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await User.findByPk(userId);

    if (user) {
      res.status(200).json({
        success: true,
        user: user,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    console.error("SQL error: ", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = {
  getUser,
};
