const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const Products = require("../models/Products");

router.get("/", async (req, res) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, process.env.JWT_SECRET, async () => {
      const products = await Products.find().sort({ createdAt: -1 }).limit(10);
      return res.status(200).json(products);
    });
  }
});

module.exports = router;
