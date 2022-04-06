require("dotenv").config()
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
const app = express();

//requiring mongoose
require("./config/mongoose")

//Import Routes
const authRoute = require('./routes/authRoute')
const annonceRoute = require('./routes/annonceRoute');
const repasRoute = require('./routes/repasRoute');


//Middleware
app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Route Middlewares
app.use('/api/auth', authRoute);
app.use('/api/annonce',annonceRoute);
app.use('/api/repas', repasRoute);


//Home Page
app.get("/", (req, res) => {
  res.json({
    message: "Wellcome !!",
  });
})


app.listen(PORT, () =>
  console.log(`server is running at : http://localhost:${PORT}`)
);