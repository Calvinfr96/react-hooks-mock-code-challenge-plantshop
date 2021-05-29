import React, { useState } from "react";

function PlantCard({ name, img, price }) {
  const [isClicked, setIsClicked] = useState(false)
  function handleClick() {
    setIsClicked(!isClicked)
  }
  return (
    <li className="card">
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price.toFixed(2)}</p>
      {!isClicked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
