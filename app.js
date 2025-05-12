const express = require("express");
const app = express();
const port = 3000;

const { posts } = require("./post");

app.use(express.static("public"));

app.listen(port, () => {
  console.log("server listening on http://lacalhost" + port);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});
