import React from "react";
import ShopIcon from "../images/Path 2 (1).png";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = ({ name, img, href }) => {
  return (
    <div className="product-comp">
      <img src={img} alt="product-img" className="product-img" />
      <h1>{name}</h1>
      <Link to={href} className="product-link">
        <h1>Shop</h1>
        <img src={ShopIcon} alt="my logo icon" className="logo" />
      </Link>
    </div>
  );
};

export default Products;
