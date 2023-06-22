import React, { useState } from 'react';

function ItemQuantitySelector({ initialQuantity, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 0 && quantity != 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="item-quantity-selector">
      <button onClick={handleIncrease}>+</button>
      <span>{quantity}</span>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default ItemQuantitySelector;
