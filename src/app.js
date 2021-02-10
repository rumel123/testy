const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
const app = express()


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT =process.env.PORT || 3000

const server = app.listen(PORT,() => {
    console.log(`server is running in port ${PORT}`);
})

//routes
//app.use("/api/movies",require("./routes/movies/app"))

app.use(async (req,res)=>{
    res.status(404).send(`Invalid Routes`)
})

module.exports = app;