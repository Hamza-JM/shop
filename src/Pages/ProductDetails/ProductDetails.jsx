import "./ProductDetails.css";
import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="card">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <img src={location.state.imgUrl}></img>
      <h3>{location.state.name}</h3>
      <p>{location.state.description}</p>
      <h6 className="Price">Price : {location.state.newPrice}$</h6>
      <p className="oldPrice">oldPrice : {location.state.oldPrice}$</p>
    </div>
  );
}

export default ProductDetails;
