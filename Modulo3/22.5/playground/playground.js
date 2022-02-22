// const fetch = require("node-fetch");
const express = require("express");
const path = require("path");
const fs = require("fs");
const reload = require("reload");
const public = path.join(__dirname);
const bodyParser = require("body-parser");
const app = express();
const recipes = require("./recipes");

app.use(bodyParser.json());

const pageHome = fs.readFileSync("./playground/home.html", "utf8");
const pageComida = fs.readFileSync("./playground/comida.html", "utf8");

app.get("/comida", (_req, res) =>
  res.send(pageComida + `<div>${recipes[1].name}</div>`)
);

app.get("/", (_req, res) => res.send(pageHome));

app.get("/recipes/id/:id", function (req, res) {
  if (!recipes[req.params.id - 1])
    return res.status(400).json({ message: "error" });
  res.json(recipes[req.params.id - 1]);
});

app.get("/recipes", function (_req, res) {
  res.json(recipes);
});

app.get("/recipes/search", function (req, res) {
  const replace = req.query.name;
  const re = new RegExp(replace, "i");
  const recipe = recipes.filter((e) => re.test(e.name));
  res.json(recipe);
});

const bob = () => recipes.filter((e) => /a/i.test(e.name));

app.post("/recipes", function (req, res) {
  const { name, price } = req.body;
  if (!name || !price) res.status(422).json({ error: "falta nome ou preço" });
  recipes.push({ id: recipes.length + 1, name, price });
  res.status(201).json({ message: "Recipe created successfully!" });
});

app.put("/recipes", function (req, res) {
  const { name, price } = req.body;
  if (!name || !price) res.status(422).json({ error: "falta nome ou preço" });
  recipes.push({ id: recipes.length + 1, name, price });
  res.status(201).json({ message: "Recipe created successfully!" });
});

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/delete/:id', function (req, res) {
  const { id } = req.params;
  if (!recipes[id - 1]) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(id - 1, 1);

  recipes.forEach((e, i) => e.id = i + 1)

  res.status(204).end();
});

const recipeIndex = recipes.findIndex((r) => r.id === parseInt(3));

app.get('/xablau', function (req, res) {
  return res.status(404).json({ message: `Xablau!`});
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(
  3002,
  console.log(bob()),
  console.log(recipes.length + 1),
  console.log(recipes[5]),
  console.log(recipeIndex)
);

reload(app);
