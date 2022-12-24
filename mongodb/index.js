const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./helper/db");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

connect();

const Cat = mongoose.model("Cat", { name: String });

app.get("/cats", async (req, res) => {
  const data = await Cat.find();
  res.send(data);
});

app.post("/cats", async (req, res) => {
  const body = req.body;
  const kitty = new Cat(body);
  await kitty.save();
  res.send("successfully created");
});

app.put("/cat/:id", async (req, res) => {
  const id = req.params.id;
  const cat = await Cat.findByIdAndUpdate(
    id,
    { name: "Duree mangar batsaan " },
    { new: true }
  );
  res.send(cat);
});

app.delete("/cat/:id", async (req, res) => {
  const id = req.params.id;
  await Cat.findByIdAndDelete(id);
  res.send("deleted");
});

app.listen(4000);
