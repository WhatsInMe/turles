import React from "react";
// import { useNavigate } from "react-router-dom";

import { login } from "../utility/login";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   console.log(username);
  // }, [username]);
  // React.useEffect(() => {
  //   console.log(password);
  // }, [password]);

  return (
    <div>
      <input
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <input
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        onClick={async () => {
          await login(username, password);
          window.location.reload(true);
          // navigate("/");
        }}
      >
        login
      </button>
    </div>
  );
}
