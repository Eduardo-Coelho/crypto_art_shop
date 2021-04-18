const express = require("express");
const app = express();

app.listen(1234, () => {
  app.get("/Home", (req, res, next) => {
    const file = require(`./Data/Home/FeaturedArt.json`);
    return res.json(file);
  });
  app.get("/Product", (req, res, next) => {
    const { productType } = req.query;
    console.log("params->", productType);

    if (productType) {
      const file = require(`./Data/Products/${productType}/${productType}.json`);
      return res.json(file);
    }
    console.log("error with the /Product params ->", req.query);
  });

  console.log("Server running on port 1234");
});
