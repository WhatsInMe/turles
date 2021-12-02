const db = require("../../db");
const express = require("express");

const router = express.Router();

router.use(async (req, res, next) => {
  const user = await db.User.findByPk(req.userId);
  req.user = user;
  next();
});

router.get("/", (req, res) => {
  console.log("get fridge");
  res.send("get fridge");
});

router.get("/:id", async (req, res) => {
  const fridge = await db.Fridge.findOne({
    where: {
      userId: req.user.id,
    },
  });
  res.json(fridge);
});

router.post("/", async (req, res) => {
  const fridge = await req.user.createFridge(req.body);
  if (!fridge) {
    return res.sendStatus(500);
  }
  res.json(fridge);
});

module.exports = router;
