const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const { createUserSchema, findUserSchema } = require('../models/userSchema');

const db = new JsonDB(new Config("./db/db", true, true, '/'));

// Wrapped in promises to simulate async calls to database
module.exports.addUser = function(authType, authID, name, email, password) {
  return new Promise((resolve, reject) => {
    try {
      const user = createUserSchema(authType, authID, name, email, password);
      db.push("/userData[]", user, true);
      resolve(user);
    }
    catch (err) {
      reject(err);
    }
  });
};

module.exports.getUser = function(authType, authID) {
  return new Promise((resolve, reject) => {
    try {
      const userSchema = findUserSchema(authType, authID);
      const userIndex = db.getIndex("/userData", Object.values(userSchema)[0], Object.keys(userSchema)[0]);
      const user = db.getData(`/userData[${userIndex}]`);
      (userIndex !== -1) ? resolve(user) : resolve(null);
    }
    catch (err) {
      reject(err);
    }
  });
};

module.exports.getUserByPk = function(primaryKey) {
  return new Promise((resolve, reject) => {
    try {
      const userIndex = db.getIndex("/userData", primaryKey);
      const user = db.getData(`/userData[${userIndex}]`);
      (userIndex !== -1) ? resolve(user) : resolve(null);
    }
    catch (err) {
      reject(err);
    }
  });
};