import React from "react";
import { useContext } from "react";

import { useCart } from "../context/Cart";
function ItemCard(prop) {
  const itemPrice = prop.price;
  const itemName = prop.name;
  const cartContext = useCart();
  const { setItems } = cartContext;
  console.log(cartContext);
  function handleAddToCart(item) {
    setItems((prevItems) => [
      ...prevItems,
      { name: itemName, price: itemPrice },
    ]);
  }

  return (
    <div>
      <h4>{itemName}</h4>
      <p>Price $ {itemPrice} </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ItemCard;
