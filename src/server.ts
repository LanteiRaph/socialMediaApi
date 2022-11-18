import Express from "express";
import mongoose from "mongoose";
const app = Express();
const uri =
  "mongodb+srv://lantei:lantei95@cluster0.aybaugd.mongodb.net/socialmedia?retryWrites=true&w=majority";

mongoose.connect(uri, () => {
  console.log("Connected to MongoDB");
});

app.use("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8080, () => {
  console.log("Server up ad running");
});
