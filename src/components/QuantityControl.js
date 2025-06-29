// QuantityControl.js
import React from "react";

const QuantityControl = ({ quantity, onChange, id, showAddToCartFallback }) => {
  return (
    <>
      {quantity > 0 ? (
        <div className="cart-item-controls">
          <button onClick={() => onChange(id, "decrease")}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={() => onChange(id, "increase")}>+</button>
        </div>
      ) : showAddToCartFallback ? (
        <button onClick={() => onChange(id, "increase")}>Add to Cart</button>
      ) : null}
    </>
  );
};

export default QuantityControl;
