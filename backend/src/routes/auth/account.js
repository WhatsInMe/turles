const db = require("../../db");
const express = require("express");

const router = express.Router();

router.get(
  //
  "/",
  async (req, res) => {
    const user = await db.User.findByPk(req.userId, {
      attributes: {
        exclude: ["password", "tokenVersion"],
      },
    });
    res.json(user);
  }
);

module.exports = router;
