const express = require("express");
const { Login } = require("../controllers/auth-controller");
const { SignUp } = require("../controllers/auth-controller");

const router = express.Router();

router.route("/login").post(Login);
router.route("/sign-up").post(SignUp);

module.exports = router;
