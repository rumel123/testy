const { connects } = require("../app") //<-call database->
const models = require("../sequelize/models")
const query = require("./query")
const movieDB = query({ connects,models})

module.exports = movieDB

