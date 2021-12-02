const env = {
  DEV: (process.env.NODE_ENV || "dev") === "dev",
  EXPRESS_PORT: process.env.EXPRESS_PORT || 3001,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_DIALECT: process.env.POSTGRES_DIALECT,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PASS: process.env.POSTGRES_PASS,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_USER: process.env.POSTGRES_USER,
  SECRET_ACCESSTOKEN: process.env.SECRET_ACCESSTOKEN,
  SECRET_REFRESHTOKEN: process.env.SECRET_REFRESHTOKEN,
};

module.exports = {
  env,
};
