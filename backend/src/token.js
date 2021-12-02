const { env } = require("./const");
const { sign } = require("jsonwebtoken");

function newAccessToken(user) {
  return sign(
    {
      id: user.id,
    },
    env.SECRET_ACCESSTOKEN,
    {
      expiresIn: env.DEV ? "15s" : "15m",
    }
  );
}

function newRefreshToken(user) {
  return sign(
    {
      id: user.id,
      tokenVersion: user.tokenVersion,
    },
    env.SECRET_REFRESHTOKEN,
    {
      // expiresIn: "1m",
      expiresIn: env.DEV ? "30s" : "24h",
    }
  );
}

module.exports = {
  newAccessToken,
  newRefreshToken,
};
