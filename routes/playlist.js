const router = require("express").Router();

router.get("/all", (request, response) => {
  response.send("user test");
});

router.post("/add", (request, response) => {
  console.log(request.body)
  response.json(request.body);
});

module.exports = router;
