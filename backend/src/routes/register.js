const db = require("../db");
const express = require("express");
const { hash } = require("bcryptjs");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

router.post(
  //
  "/",
  async (req, res) => {
    const { username, password, firstName, lastName, email } = req.body;

    try {
      const user = await db.User.create({
        username,
        password: await hash(password, 12),
        firstName,
        lastName,
        email,
      });

      await user.createSettings();

      const message = {
        id: user.id,
        username: user.username,
      };

      return res.status(StatusCodes.OK).json(message);
    } catch (err) {
      return res.sendStatus(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
    }
  }
);

module.exports = router;
