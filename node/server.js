const express = require("express");
const app = express();

app.listen(1234, () => {
  app.get("/Home", (req, res, next) => {
    const file = require(`./Data/Home/FeaturedArt.json`);
    return res.json(file);
  });
  app.get("/Product", (req, res, next) => {
    try {
      const { productType } = req.query;
      console.log("params->", productType);
      const file = require(`./Data/Products/${productType}/${productType}.json`);
      return res.json(file);
    } catch (error) {
      console.log(error);
    }
  });

  console.log("Server running on port 1234");
});
