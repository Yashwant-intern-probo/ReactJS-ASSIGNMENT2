import React from "react";

import ItemCard from "./itemCard";

const allCard = (props) => {
  console.log(props.allItems);

  const onAddCartHandler = (_index) => {
    console.log(_index, "allCard");
    props.addCart(_index);
  };

  const results = [];

  props.allItems.forEach((row, i) => {
    results.push(
      <ItemCard itemdata={row} onAddtoCart={onAddCartHandler}></ItemCard>
    );
  });

  return <div>{results}</div>;
};

export default allCard;
