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
  const {
    payload: { exp },
  } = jwt.decode(token, { complete: true });
  return new Date().getTime() < exp * 1000;
}

export { getAccessToken, setAccessToken, isTokenValid };
