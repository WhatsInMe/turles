const express = require("express");
const { StatusCodes } = require("http-status-codes");

const { User } = require("../../db");

const router = express.Router();

router.use(require("../../verifyToken"));

// router.get(
//   //
//   "/account",
//   async (req, res) => {
//     const user = await User.findByPk(req.userId, {
//       attributes: {
//         exclude: ["password", "tokenVersion"],
//       },
//     });
//     res.json(user);
//   }
// );

router.use(
  //
  async (req, res, next) => {
    const user = await User.findByPk(req.userId);
    req.User = user;
    next();
  }
);

router.get(
  //
  "/fridge",
  async (req, res) => {
    const fridges = await req.User.getFridges();
    if (!fridges) {
      return res.sendStatus(StatusCodes.NOT_FOUND);
    }
    res.json(fridges);
  }
);

router.post(
  //
  "/fridge",
  async (req, res) => {
    const fridge = await req.User.createFridge(req.body);
    if (!fridge) {
      return res.sendStatus(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
    }
    res.json(fridge);
  }
);

router.use("/fridge/:name", require("./fridge"));

module.exports = router;
