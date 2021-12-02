const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

const server = express();

server.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use("/login", require("./login"));
server.use("/refresh", require("./refresh"));
server.use("/register", require("./register"));
server.use("/restricted", require("./restricted"));
server.use("/auth", require("./auth"));

module.exports = server;
