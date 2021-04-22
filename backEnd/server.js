const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  const file = require(`./data/home/FeaturedArt.json`);
  return res.json(file);
});

/**
 *
 * @description Get the Product
 *
 */

const getProducts = async (req, res) => {
  try {
    const { productSlug } = req.params;
    const file = await require(`./data/products/${productSlug}/${productSlug}.json`);
    return res.json(file);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

app.get("/product:productSlug", getProducts);

app.listen(1234, () => {
  console.log("Server running on port 1234");
});
