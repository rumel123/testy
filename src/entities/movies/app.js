const services = require("../../functions/app")
const { decrypt,encrypt } = require("../../functions/app")

const makemovies = require('./make-movies')
const patchmovies = require('./patch-movies')

const makemovie = makemovies({ decrypt, encrypt })
const patchmovie = patchmovies({ decrypt, encrypt })

const service = Object.freeze({ makemovie,patchmovie })

module.exports = service
module.exports = { makemovie,patchmovie }
