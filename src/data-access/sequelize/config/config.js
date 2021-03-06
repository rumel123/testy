require("dotenv").config();

module.exports = {
  development:{
    username:process.env.PGUSER,
    password:process.env.PGPASSWORD,
    database:process.env.PGDATABASE,
    host:process.env.PGHOST,
    dialect:"postgres",
    logging:false
  },
  test:{
    username:"root",
    password:null,
    database:"movie_world",
    host:"localhost",
    dialect:"mongo"
  },
  production:{
    username:"root",
    password:null,
    database:"movie_world",
    host:"localhost",
    dialect:"mongo"
  }
}