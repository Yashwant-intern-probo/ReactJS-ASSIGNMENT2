import React from "react";

import "./cartItem.css";

function cartItems(props) {
  console.log(props);

  const cartHandler = () => {
    console.log("INDEX", props.itemdata.id);
    props.onRemoveCart(props.itemdata.id);
  };

  return (
    <div className="cartItem">
      <h3>{props.itemdata.itemName}</h3>
      <h4>Price : {props.itemdata.itemPrice * props.itemdata.avalQty}</h4>
      <h4>Qty : {props.itemdata.avalQty}</h4>
      <div className="remove">
        <button type="button" onClick={cartHandler}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default cartItems;
