const express = require("express");
const { env } = require("../const");
const { newAccessToken, newRefreshToken } = require("../token");
const { verify } = require("jsonwebtoken");

const router = express.Router();

router.get(
  //
  "/",
  (req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) {
      console.log("no refresh token");
      return res.sendStatus(401);
    }
    verify(
      //
      refreshToken,
      env.SECRET_REFRESHTOKEN,
      (err, decoded) => {
        if (err) {
          console.log("refresh token expired");
          return res.sendStatus(401);
        }
        res.cookie(
          //
          "refreshToken",
          newRefreshToken(decoded),
          {
            // maxAge: 60 * 60 * 24 * 7,
            httpOnly: true,
            secure: true,
          }
        );
        res.send({
          accessToken: newAccessToken(decoded),
        });
      }
    );
  }
);

module.exports = router;
