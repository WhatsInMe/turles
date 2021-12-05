const db = require("./db");
const { hash } = require("bcryptjs");

async function seed() {
  await db.User.create({
    username: "wyatt",
    password: await hash("pass", 12),
  });

  const user = await db.User.findOne({
    where: {
      username: "wyatt",
    },
  });

  // await user.createUserInfo({
  //   firstName: "Wyatt",
  //   lastName: "Goettsch",
  //   email: "wyatt.goettsch@gmail.com",
  // });

  await user.createSettings({
    firstName: "Wyatt",
    lastName: "Goettsch",
    email: "wyatt.goettsch@gmail.com",
  });

  const kitchen = await user.createFridge({
    name: "kitchen",
  });

  const garage = await user.createFridge({
    name: "garage",
  });

  await kitchen.createItem({
    name: "cheese",
    price: 100,
    quantity: 1,
  });

  await kitchen.createItem({
    name: "kechup",
    price: 100,
    quantity: 1,
  });

  await kitchen.createItem({
    name: "milk",
    price: 100,
    quantity: 1,
  });

  await garage.createItem({
    name: "pickles",
    price: 100,
    quantity: 1,
  });

  await garage.createItem({
    name: "meat",
    price: 100,
    quantity: 1,
  });
}

module.exports = { seed };
