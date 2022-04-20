import React from "react";
import lady from "../Assets/assign4image.webp";
import Sizes from "./Sizes";
import "./Card.css";
// import "./Options.css";

const Card = ({ product }) => {
  let { productName, productType, productPrice, productSizes } = product;

  return (
    <div className="overViewContainer">
      <div
        // className="Card"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="img-container" style={{ display: "flex" }}>
          <img src={lady} alt="lady" className="img" />
        </div>
        <h3>
          {productName} <strong>{productType}</strong>
        </h3>
        <p>
          <b>{productPrice}</b>
        </p>
        <Sizes availableSizes={productSizes} />
      </div>
    </div>
  );
};

export default Card;
