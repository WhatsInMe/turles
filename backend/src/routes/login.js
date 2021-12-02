const db = require("../db");
const express = require("express");
const { compare } = require("bcryptjs");
const { newAccessToken, newRefreshToken } = require("../token");
const { env } = require("../const");

const router = express.Router();

router.post(
  //
  "/",
  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      return res.send("bad input");
    }

    const user = await db.User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.send("wrong username");
    }

    const comparison = await compare(password, user.password);
    if (!comparison) {
      return res.send("wrong password");
    }

    res.cookie(
      //
      "refreshToken",
      newRefreshToken(user),
      {
        // maxAge: 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: true,
      }
    );

    res.send({
      accessToken: newAccessToken(user),
    });
  }
);

module.exports = router;
