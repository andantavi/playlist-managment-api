const express = require("express");
const app = express();
const mongoose = require("mongoose");
const playlistRoute = require("./routes/playlist");
const songRoute = require("./routes/song");

const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.URI)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => console.error(err));

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use(express.json());
app.use("/api/playlist", playlistRoute);
app.use("/api/song", songRoute);
app.listen(process.env.PORT || 3000, () => console.log("Backend is running"));
