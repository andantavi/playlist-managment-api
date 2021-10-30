const router = require("express").Router();
const Song = require("../models/Song");

router.get("/all", (_, response) => {
  Song.find({}, (error, result) => {
    (error && console.log(error)) || response.json(result);
  });
});

router.post("/add", async (request, response) => {
  const newSong = new Song({
    name: request.body.name,
    band: request.body.band,
    link: request.body.link,
    multitracklink: request.body.multitracklink,
  });

  let newBdSong = await newSong.save();
  console.log(newBdSong);
  response.status(201).json(newBdSong);
});

module.exports = router;
