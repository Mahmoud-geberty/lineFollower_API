let router = require("express").Router();

let pathFinder = require("./controllers/pathFinder");

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "This API endpoint is only to confirm connection",
  });
});

router.get("/path", (req, res) => {
  console.log(req.query)
  let pathPlan = pathFinder.findPath(req.query.id)
  res.json(pathPlan);
});

module.exports = router;
