const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => {
  console.log("server listening on http://lacalhost" + port);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
  res.json(posts);
});

app.get("/bacheca", (req, res) => {
  const posts = [
    {
      Titolo: "luogo 1",
      Contenuto: "...",
      img: "/image/ciambellone.jpeg",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 2",
      Contenuto: "...",
      img: "/image/cracker_barbabietola.jpeg",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 3",
      Contenuto: "...",
      img: "/image/pane_fritto_dolce.jpeg",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 4",
      Contenuto: "...",
      img: "/image/pasta_barbabietola.jpeg",
      tags: ["mare", "montagna", "lago"],
    },
    {
      Titolo: "luogo 5",
      Contenuto: "...",
      img: "/torta_paesana.jpeg",
      tags: ["mare", "montagna", "lago"],
    },
    res.json(posts),
  ];
});
