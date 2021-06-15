const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

module.exports.db = new JsonDB(new Config("./models/db", true, true, '/'));