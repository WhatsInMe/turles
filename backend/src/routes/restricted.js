const express = require("express");

const router = express.Router();

router.use(require("../verifyToken"));

router.get(
  //
  "/",
  (req, res) => {
    res.json([
      {
        name: "ramen",
        quantity: 3,
        price: 100,
      },
      {
        name: "cereal",
        quantity: 5,
        price: 500,
      },
    ]);
  }
);

module.exports = router;
