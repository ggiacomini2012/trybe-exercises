require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  return res.send('Está vivo!!!');
});



const bob = () => {
  const test = 'server running!';
  return test
}

app.listen(3000, () => {
  console.log(bob);
});
