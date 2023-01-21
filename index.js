const express = require("express")
const app =express()
const bodyParser = require('body-parser')
const mongoroWaitlistRoute = require('./routes/mongoro/waitlist/api')
const reefWaitlistRoute = require('./routes/reef/waitlist/api')
const mongoose=require('mongoose')
const cors = require('cors')
// const dotenv = require("dotenv")
// dotenv.config()


app.use(bodyParser.json())

app.use(cors())


app.use("/mongoro_waitlist", mongoroWaitlistRoute)
app.use("/reef_waitlist", reefWaitlistRoute)

mongoose.set("strictQuery", true);
mongoose
    .connect("mongodb+srv://mongoro:mongoro@mongoro.dbwd7pc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDB Connected!!!")
    })
    .catch((err) => console.log(err));



const port = process.env.PORT || 4000; 
app.listen(port, () => {
    console.log('Server is running on port '+port);
})