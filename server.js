
const express = require("express");
const fs = require('fs');
const path = require('path');

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const { animals } = require('./data/animals.json');

const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// add middleware to make the css and js files available from the html
app.use(express.static('public'));



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// make server listen to the Express.js server and send data to client
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
