const { verify } = require("jsonwebtoken");
const { env } = require("./const");

function verifyToken(req, res, next) {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    return res.sendStatus(401);
  }
  verify(
    //
    accessToken,
    env.SECRET_ACCESSTOKEN,
    (err, decoded) => {
      if (err) {
        return res.sendStatus(401);
      }
      req.userId = decoded.id;
      next();
    }
  );
}

module.exports = verifyToken;
