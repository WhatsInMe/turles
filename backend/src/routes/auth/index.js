const express = require("express");

const router = express.Router();

router.use(require("../../verifyToken"));

router.use("/account", require("./account"));
router.use("/fridge", require("./fridge"));

module.exports = router;
