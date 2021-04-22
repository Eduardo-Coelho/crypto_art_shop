const express = require("express");
const app = express();

const PORT = 1234;

/**
 *
 * @description Get Home page data
 *
 */

const getHome = async (req, res) => {
  try {
    const file = await require(`./data/home/FeaturedArt.json`);
    return res.json(file);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

app.get("/home", getHome);

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
