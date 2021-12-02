const db = require("../db")
const express = require("express");
const { hash } = require("bcryptjs");

const router = express.Router();

router.post(
  //
  "/",
  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.send("no");
    }

    try {
      const user = await db.User.create({
        username: username,
        password: await hash(password, 12),
      });

      const message = {
        id: user.id,
        username: user.username,
      };

      return res.json(message);
    } catch (err) {
      console.error(err);
      return res.send("no");
    }
  }
);

module.exports = router;
