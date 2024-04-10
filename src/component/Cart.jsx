import React, { useContext } from "react";
import { useCart } from "../context/Cart";
var totalSum = 0;
const Cart = () => {
  const cart = useCart();
  const totalSum = cart.items.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => {
          return <li key={item.name}>{item.name} </li>;
        })}

      <h5>Total Bill {totalSum}</h5>
    </div>
  );
};

export default Cart;
