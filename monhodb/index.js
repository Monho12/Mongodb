const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./helper/db");
const mongoose = require("mongoose");

app.use(cors());

connect();

const Cat = mongoose.model("Cat", { name: String });

app.get("/cats", async (req, res) => {
  //   await connect();
  const data = await Cat.find()
  res.send(data);
});

app.post("/cats", async (req, res) => {
  const kitty = new Cat({ name: "mnho" });
  kitty.save().then(() => console.log("meow"));
  res.send("successfully created");
});

app.listen(3000);
