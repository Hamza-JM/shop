import React from "react";
import Card from "../../components/Card/Card";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
function Products(props) {
  return (
    <div>
      <h1>products</h1>
      {props.products.map((product) => (
        <Card key={product.name} value={product} />
      ))}
    </div>
  );
}
function Home() {
  const products = [
    {
      name: "Calabrese Broccoli",
      description:
        "Calabrese is an old-fashioned variety of broccoli renowned for its bluish green heads and multiple side shoots",
      oldPrice: 20,
      newPrice: 13,
      rate: 5,
      category: "vegetable",
    },
    {
      name: "Strawberry",
      description:
        "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries",
      oldPrice: 40,
      newPrice: 25,
      rate: 5,
      category: "fruit",
    },
  ];

  return (
    <div className="home_page">
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">{Products({ products })}</div>
    </div>
  );
}

export default Home;
