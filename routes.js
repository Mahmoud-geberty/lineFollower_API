let router = require("express").Router();

let pathFinder = require("./controllers/pathFinder");
let mobHits = 0;

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "This API endpoint is only to confirm connection",
  });
});

router.get("/nav", (req, res) => {
  let path = pathFinder.sendPath()
  res.json({
    status: "OK",
    hits: mobHits,
    path
  })
});

router.get("/path", (req, res) => {
  let pathPlan = pathFinder.findPath(req.query.id)
  mobHits++;
  res.json(pathPlan);
});

module.exports = router;
