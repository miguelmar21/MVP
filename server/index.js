const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const axios = require("axios");
const API_KEY = require("../config");
const db = require("../database/index");
const {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} = require("../database/queries");

app.use(express.static(__dirname + "/../dist"));
app.use(express.json());
app.use(cors());

//Please use %20 in place of whitespace/spacing between words in a query string
var options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
  },
};

app.get("/exercises", (req, res) => {
  axios
    .request(options)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/exercises/favorites", (req, res) => {
  getFavorites((err, response) => {
    if (err) {
      res.status(500).send('Could not fetch favorites')
    } else {
      res.status(200).send(response);
    }
  })
});

app.post("/exercises/favorites", (req, res) => {
  addToFavorites(req.body.exerciseId, (err, respose) => {
    if (err) {
      res.status(500).send('Could not add to favorites')
    } else {
      res.status(200).send('Added to favorites')
    }
  })

})

app.listen(port, () => {
  console.log(`Server istening at http://localhost:${port}`);
});
