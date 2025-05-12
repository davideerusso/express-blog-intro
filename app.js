const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log("server listening on http://lacalhost" + port);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      Titolo: "luogo 1",
      Contenuto: "...",
      img: "./img",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 2",
      Contenuto: "...",
      img: "./img",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 3",
      Contenuto: "...",
      img: "./img",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 4",
      Contenuto: "...",
      img: "./img",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 5",
      Contenuto: "...",
      img: "./img",
      tags: ["mare", "montagna", "lago"],
    },
    res.json(posts),
  ];
  res.send("Server del mio blog");
});
