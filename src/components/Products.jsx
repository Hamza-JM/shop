import React from "react";
import Card from "./Card/Card";

const Products = (props) => {
  return (
    <div>
      <h1>products</h1>
      {props.products.map((product) => (
        <Card key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Products;
