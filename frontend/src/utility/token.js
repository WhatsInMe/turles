import jwt from "jsonwebtoken";

let accessToken;

function getAccessToken() {
  return accessToken;
}
function setAccessToken(token) {
  accessToken = token;
}

function isTokenValid() {
  const token = getAccessToken();

  if (!token) {
    return false;
  }

  const decoded = jwt.decode(token, { complete: true });
  const exp = decoded.payload.exp * 1000 - 20000;
  const now = new Date().getTime();

  // console.log(now.getTime());
  // console.log(exp);

  return now < exp;
}

export { getAccessToken, setAccessToken, isTokenValid };
