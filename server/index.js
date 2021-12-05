const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;
const axios = require('axios');

app.use(express.static(__dirname + '/../dist'))
app.use(express.json());
app.use(cors());


//Please use %20 in place of whitespace/spacing between words in a query string
var options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': 'a6363e0359msh297369e10617062p171bebjsnceb00df166ed'
  }
};

app.get('/exercises', (req, res) => {
  axios.request(options)
  .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

app.get('/bodyPart/:bodyPart', (req, res) => {
  var bodyPart = req.params.bodyPart;
  options.url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
  axios.request(options)
  .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

app.listen(port, () => {
  console.log(`Server istening at http://localhost:${port}`)
});
