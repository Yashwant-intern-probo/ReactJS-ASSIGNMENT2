import React, { useState } from "react";

import "./App.css";

import AllCard from "./components/allCards";

import AllCartItem from "./components/allCartItems";

import totalItems from "./DD/data";

import totalItemsCart from "./DD/cart";

function App() {
  const [ItemArray, setItemArray] = useState(totalItems);

  const [CartArray, setCartArray] = useState(totalItemsCart);

  const addCartHandler = (_index) => {
    console.log(_index, "APP");

    for (let i = 0; i < ItemArray.length; i++) {
      if (ItemArray[i].id === _index && ItemArray[i].avalQty === 0) {
        window.alert("Item is out of stock!!!!");
        return;
      }
    }
    setItemArray((p) => {
      const n = [];
      for (let i = 0; i < p.length; i++) {
        if (p[i].id === _index) p[i].avalQty--;
        n.push(p[i]);
      }
      return n;
    });

    setCartArray((p) => {
      const n = [];
      for (let i = 0; i < p.length; i++) {
        if (p[i].id === _index) p[i].avalQty++;
        n.push(p[i]);
      }
      return n;
    });
  };

  const removeCartHandler = (_index) => {
    setItemArray((p) => {
      const n = [];
      for (let i = 0; i < p.length; i++) {
        if (p[i].id === _index) p[i].avalQty++;
        n.push(p[i]);
      }
      return n;
    });

    setCartArray((p) => {
      const n = [];
      for (let i = 0; i < p.length; i++) {
        if (p[i].id === _index) p[i].avalQty--;
        n.push(p[i]);
      }
      return n;
    });
  };

  return (
    <div>
      <div className="allItems">
        <AllCard allItems={ItemArray} addCart={addCartHandler} />
      </div>
      <div className="cartItems">
        <AllCartItem allItems={CartArray} removeCart={removeCartHandler} />
      </div>
    </div>
  );
}

export default App;
