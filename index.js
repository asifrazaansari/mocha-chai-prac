const express = require("express")
const route = require("./routes/userRoute")
const app = express()


app.use('/user', route)


app.listen(8000, () => {
    console.log("server started")
})