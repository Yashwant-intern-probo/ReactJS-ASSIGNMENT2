import React from "react";

import "./itemCard.css";

function itemCard(props) {
  console.log(props);

  const cartHandler = () => {
    console.log("INDEX", props.itemdata.id);
    props.onAddtoCart(props.itemdata.id);
  };

  return (
    <div className="itemCard">
      <img src={props.itemdata.img} alt=""></img>
      <h3>{props.itemdata.itemName}</h3>
      <h4>Price : {props.itemdata.itemPrice}</h4>
      <h4>Qty : {props.itemdata.avalQty}</h4>
      <button type="button" onClick={cartHandler}>
        Add to cart
      </button>
    </div>
  );
}

export default itemCard;
