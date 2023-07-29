import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();
  function handelNavigate() {
    return navigate(`/${product.id}`, { state: product });
  }
  return (
    <div className="card">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <img src={product.imgUrl}></img>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h6 className="Price">Price : {product.newPrice}$</h6>
      <p className="oldPrice">oldPrice : {product.oldPrice}$</p>
      <ul>
        <li>
          <i className="fa fa-star checked"></i>
        </li>
        <li>
          <i className="fa fa-star checked"></i>
        </li>
        <li>
          <i className="fa fa-star checked"></i>
        </li>
        <li>
          <i className="fa fa-star checked"></i>
        </li>
        <li>
          <i className="fa fa-star "></i>
        </li>
      </ul>
      <button type="button" onClick={handelNavigate}>
        See more
      </button>
    </div>
  );
}

export default Card;
