import React from "react";
import "./Options.css";

const Sizes = ({ availableSizes }) => {
  return (
    <div className="option-container">
      {availableSizes.map((val, key) => {
        return (
          <div
            key={key}
            className="optionItem"
            style={{
              border: "1px solid black",
              textAlign: "center",
              width: "20px",
              height: "20px",
              background: val.isAvailable ? "black" : "white",
              color: val.isAvailable ? "white" : "black",
            }}
          >
            {val.size.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default Sizes;
