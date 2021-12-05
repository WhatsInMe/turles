const express = require("express");
const { User } = require("../../db");

const router = express.Router();

router.use(require("../../verifyToken"));
router.use(
  //
  async (req, res, next) => {
    const user = await User.findByPk(req.userId);
    req.User = user;
    next();
  }
);

router.use("/account", require("./account"));
router.use("/fridge", require("./fridge"));

module.exports = router;
