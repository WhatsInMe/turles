const db = require("./db");
const server = require("./routes");
const { env } = require("./const");
const { seed } = require("./mock");

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
    await seed();
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
