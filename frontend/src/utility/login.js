import axios from "axios";
import { setAccessToken, isTokenValid } from "./token";

export async function login(username, password) {
  const res = await axios.post("/login", { username, password });
  const token = res?.data?.accessToken;
  if (token) {
    setAccessToken(token);
  } else {
    console.log("failed to log in");
  }
}

export async function refreshTokens() {
  console.log("refreshing token");
  try {
    const res = await axios.get("/refresh");
    const token = res?.data?.accessToken;
    if (token) {
      setAccessToken(token);
      return true;
    }
    return false;
  } catch (e) {
    console.log("refresh token expired");
    return false;
  }
}

export async function isLoggedIn() {
  if (!isTokenValid() && !(await refreshTokens())) {
    return false;
  }
  return true;
}
