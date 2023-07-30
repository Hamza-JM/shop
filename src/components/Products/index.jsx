import React from "react";
import Card from "../Card/Card";
import "./products.css";

const Products = (props) => {
  return (
    <>
      <h1>products</h1>
      <div className="cards">
        {props.products.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
