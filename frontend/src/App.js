import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./components/about";
import Dev from "./components/dev";
import Home from "./components/home";
import Login from "./components/login";
import { isLoggedIn } from "./utility/login";
import { dev } from "./utility/constants";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.withCredentials = true;

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  // const delay = dev ? 10000 : (60000 * 10);
  const delay = 10000;

  React.useEffect(() => {
    async function checkLogin() {
      setLoggedIn(await isLoggedIn());
    }

    checkLogin();

    const interval = setInterval(() => {
      checkLogin();
    }, delay);

    return () => clearInterval(interval);
  }, [loggedIn]);

  return (
    <div>
      {!loggedIn ? (
        <Login />
      ) : (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dev">Dev</Link>
              </li>
            </ul>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/dev" element={<Dev />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
