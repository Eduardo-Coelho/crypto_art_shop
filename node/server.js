const express = require("express");
const app = express();

app.listen(1234, () => {
  app.get("/Home", (req, res, next) => {
    console.log("Home", req);
    const file = require(`./Data/mock.json`);
    return res.json(file);
  });
  console.log("Server running on port 1234");
});
