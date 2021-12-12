const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory", {
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tokenVersion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Settings = sequelize.define("settings", {
  darkmode: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

Settings.belongsTo(User, {
  foreignKey: "userId",
});
User.hasOne(Settings, {
  as: "settings",
  foreignKey: "userId",
});

const Fridge = sequelize.define("fridge", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

Fridge.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(Fridge, {
  foreignKey: "userId",
});

const Item = sequelize.define("item", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

Item.belongsTo(Fridge, {
  foreignKey: "fridgeId",
});
Fridge.hasMany(Item, {
  foreignKey: "fridgeId",
});

const db = {
  Fridge: Fridge,
  Item: Item,
  User: User,
  Sequelize: Sequelize,
  sequelize: sequelize,
};

module.exports = db;
