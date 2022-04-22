import React, { useState } from "react";
import axios from "axios";

const TrendingProductsData = () => {
  const [products, setProducts] = useState();

  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProducts(res.data));

  return products;
};

export default TrendingProductsData;
