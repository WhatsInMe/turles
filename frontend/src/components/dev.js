import React from "react";

import { getAccessToken, isTokenValid } from "../utility/token";
import { refreshTokens } from "../utility/login";

export default function Dev(props) {
  return (
    <div>
      <button
        onClick={() => {
          console.log("accessToken:");
          console.log(getAccessToken());
          console.log(`valid: ${isTokenValid()}`);
        }}
      >
        log accessToken
      </button>

      <button
        onClick={() => {
          console.log("new refreshToken");
          refreshTokens();
        }}
      >
        refresh tokens
      </button>
    </div>
  );
}
