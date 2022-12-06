const express= require("express");
const mongoose = require('mongoose');
require("dotenv").config()

const userRoute = require('./routes/userRoute')
const buyerRoute = require('./routes/buyerRoute')

  




PORT= process.env.PORT;

const db = require("./middleware/db");


const app = express()




app.use(express.json())
app.use(express.urlencoded({extended:true}));

db.connectToMongoDB();


app.get('/', (req, res) => {
    res.json({
      status: 'status',
      message: 'Visit the following link(s) for details about usage',
      link: 'https://github.com/tobisupreme/blogolicious#usage',
      readme: 'https://github.com/tobisupreme/blogolicious#readme',
    })
  })


app.use('/api/vd/user', userRoute)
app.use('/api/vd/buyer', buyerRoute)








app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})
