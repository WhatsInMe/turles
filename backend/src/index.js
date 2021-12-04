const db = require("./db");
const server = require("./routes");
const { env } = require("./const");
const { hash } = require("bcryptjs");

if (env.DEV) {
  console.log(env);
}

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  await db.sequelize.sync({
    force: env.DEV,
  });

  if (env.DEV) {
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

    // const items = await user.getItems();
    // console.log(items.map((e) => e.toJSON()));

    server.get(
      //
      "/",
      (req, res) => {
        res.send("ok");
      }
    );
  }

  server.listen(
    //
    env.EXPRESS_PORT,
    () => {
      console.log(`express running on ${env.EXPRESS_PORT}`);
    }
  );
})();
