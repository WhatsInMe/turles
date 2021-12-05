const express = require("express");
const { Fridge, Item, User } = require("../../db");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

router.get(
  //
  "/",
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
  "/",
  async (req, res) => {
    const fridge = await req.User.createFridge(req.body);
    if (!fridge) {
      return res.sendStatus(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
    }
    res.json(fridge);
  }
);

// async function findFridge(req, res, next) {
//   const fridge = await Fridge.findOne({
//     where: {
//       userId: req.User.id,
//       name: req.params.name,
//     },
//   });
//   req.Fridge = fridge;
//   next();
// };

// router.get(
//   //
//   "/:name",
//   findFridge,
//   async (req, res) => {
//     const items = await req.Fridge.getItems();
//     const message = {
//       ...req.Fridge.dataValues,
//       items,
//     }
//     res.json(message);
//   }
// );

router.get(
  //
  "/:name",
  async (req, res) => {
    const fridge = await Fridge.findOne({
      where: {
        name: req.params.name,
        userId: req.User.id,
      },
      include: Item,
    });
    if (!fridge) {
      return res.sendStatus(StatusCodes.NOT_FOUND);
    }
    res.json(fridge);
  }
);

router.post(
  //
  "/:name",
  async (req, res) => {
    const fridge = await Fridge.findOne({
      where: {
        name: req.params.name,
        userId: req.User.id,
      },
    });
    if (!fridge) {
      return res.sendStatus(StatusCodes.NOT_FOUND);
    }
    const item = await fridge.createItem(req.body);
    if (!item) {
      return res.sendStatus(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
    }
    res.json(item);
  }
);

module.exports = router;
