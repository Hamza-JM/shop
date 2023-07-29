import React from "react";
import Card from "../../components/Card/Card";
import bannerImg from "../../assets/icons/Banner.svg";
import "./Home.css";
import Products from "../../components/Products";

function Home() {
  const products = [
    {
      id: 1,
      name: "Calabrese Broccoli",
      description:
        "Calabrese is an old-fashioned variety of broccoli renowned for its bluish green heads and multiple side shoots",
      oldPrice: 20,
      newPrice: 13,
      rate: 5,
      imgUrl: "https://shorturl.at/iuIX3",
      category: "vegetable",
    },
    {
      id: 2,
      name: "Strawberry",
      description:
        "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries",
      oldPrice: 40,
      newPrice: 25,
      rate: 5,
      imgUrl: "https://shorturl.at/bpHJ3",
      category: "fruit",
    },
    {
      id: 3,
      name: "Watermelon",
      description:
        "Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit.",
      oldPrice: 35,
      newPrice: 20,
      rate: 5,
      imgUrl: "https://shorturl.at/ouAC0",
      category: "fruit",
    },

    {
      id: 5,
      name: "Apple",
      description:
        "An apple is a round, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
      oldPrice: 32,
      newPrice: 18,
      rate: 5,
      imgUrl: "https://shorturl.at/wIMO4",
      category: "fruit",
    },
    {
      id: 6,
      name: "Onion",
      description:
        "An onion also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium.",
      oldPrice: 25,
      newPrice: 10,
      rate: 5,
      imgUrl: "https://shorturl.at/bktC5",
      category: "vegetable",
    },
    {
      id: 7,
      name: "Orange",
      description:
        "An orange is a fruit of various citrus species in the family Rutaceae",
      oldPrice: 30,
      newPrice: 16,
      rate: 5,
      imgUrl: "https://shorturl.at/cvLY7",
      category: "fruit",
    },
  ];

  return (
    <div className="home_page">
      <img className="banner_img" src={bannerImg} alt="" />
      <div className="content">
        {" "}
        <Products products={products} />{" "}
      </div>
    </div>
  );
}

export default Home;
