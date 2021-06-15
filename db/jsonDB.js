const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const userSchema = require('../models/userSchema');

const db = new JsonDB(new Config("./db", true, true, '/'));

module.exports.addUser = function(name, password, email, authType, authID) {
  const user = userSchema(name, password, email, authType, authID);
  db.push("/userData[]", user, true);
};