const express = require("express");
const penggunaRouter = require ('./pengguna')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.get("/", (req, res) => {
  res.send('Hallo Dunia');
});
app.get("/npm", (req, res) => {
  res.redirect('https://www.npmjs.com/package/express');
});
app.get("/info", (req, res) => {
  res.send("ini adalah route info dari express js");
});

app.post("/user", (req, res) => {
  res.send("ini adalah route post user dari express js");
});

app.put("/user/:id", (req, res) => {
  const id = (req.params)
  res.send(id);
});

app.delete("/user/:userId", (req, res) => {
  res.send(req.params.userId);
});

app.use(penggunaRouter)

app.listen(1212, function () {
  console.log("server ini jalan");
});
