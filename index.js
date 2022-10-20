const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./Data/categories.json");
const news = require("./Data/news.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((news) => news._id == id);
  res.send(selectedNews);
});

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;

  if (id == 8) {
    res.send(news);
  } else {
    const selectedCategory = news.filter((news) => news.category_id == id);
    res.send(selectedCategory);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
