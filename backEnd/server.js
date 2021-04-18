const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  const file = require(`./data/home/FeaturedArt.json`);
  return res.json(file);
});
app.get("/product", (req, res) => {
  try {
    const { productType } = req.query;
    console.log("params->", productType);
    const file = require(`./data/products/${productType}/${productType}.json`);
    return res.json(file);
  } catch (error) {
    console.log(error);
  }
});

app.listen(1234, () => {
  console.log("Server running on port 1234");
});
