import React from "react";

import CartItems from "./cartItems";

const allCartItems = (props) => {
  console.log(props.allItems);

  const onRemoveCartHandler = (_index) => {
    console.log(_index, "allCartItems");
    props.removeCart(_index);
  };

  const results = [];

  props.allItems.forEach((row, i) => {
    if (row.avalQty !== 0) {
      results.push(
        <CartItems
          itemdata={row}
          index={i}
          onRemoveCart={onRemoveCartHandler}
        />
      );
    }
  });

  return <div>{results}</div>;
};

export default allCartItems;
