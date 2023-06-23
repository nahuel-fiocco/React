import React, { useState } from 'react';
import './ItemQuantitySelector.css';

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
      <button type='button' className='btn btn-primary' onClick={handleIncrease}>+</button>
      <span>{quantity}</span>
      <button type='button' className='btn btn-primary' onClick={handleDecrease}>-</button>
    </div>
  );
}

export default ItemQuantitySelector;
