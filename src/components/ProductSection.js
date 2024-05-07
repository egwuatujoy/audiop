import React from "react";
import Products from "./Products";
import HeadphonesImg from "../images/HeadPhones.png";
import EarphonesImg from "../images/EarPhones.png";
import Speaker from "../images/Speaker.png";
import "./Product.css";
const ProductSection = () => {
  return (
    <div className="p-container">
      <Products name={"Headphones"} img={HeadphonesImg} href={"/headphones"} />
      <Products name={"Speakers"} img={Speaker} href={"/speakers"} />
      <Products name={"Earphones"} img={EarphonesImg} href={"/earphone"} />
    </div>
  );
};

export default ProductSection;
