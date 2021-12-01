const express = require('express');


const app = express();
const routes = require('./routes');

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.json({
    status: 'OK',
    data: "please use the /api endpoint, this endpoint is dead" 
  })
})
app.use("/api", routes);

app.listen(port, () => {
  console.log("listening on port:", port);
});