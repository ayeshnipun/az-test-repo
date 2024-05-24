const express = require("express");
const { getUser } = require("../controllers/user-controller");

const router = express.Router();

router.route("/get/:id").get(getUser);

module.exports = router;
