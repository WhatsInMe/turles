const express = require("express");
const { Fridge, Item } = require("../../db");
const { StatusCodes } = require("http-status-codes");

const router = express.Router({ mergeParams: true });

router.use(
  //
  async (req, res, next) => {
    const fridge = await Fridge.findOne({
      where: {
        userId: req.User.id,
        name: req.params.name,
      },
      include: Item,
    });
    if (!fridge) {
      return res.sendStatus(StatusCodes.NOT_FOUND);
    }
    req.Fridge = fridge;
    next();
  }
);

router.get(
  //
  "/",
  async (req, res) => {
    res.json(req.Fridge);
  }
);

router.post(
  //
  "/",
  async (req, res) => {
    const item = await req.Fridge.createItem(req.body);
    if (!item) {
      return res.sendStatus(StatusCodes.UNSUPPORTED_MEDIA_TYPE);
    }
    res.json(item);
  }
);

module.exports = router;
