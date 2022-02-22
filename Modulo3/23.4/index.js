const express = require('express');
const MovieController = require('./controllers/movieController');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/movies', MovieController.create);

app.get('/', (req, res) => {
  return res.send('hello');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});


