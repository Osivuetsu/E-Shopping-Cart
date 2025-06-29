import React, { useState } from "react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import CouponInput from "./CouponInput";
import CartSummary from "./CartSummary";

const Cart = () => {
  const {cartItems, handleQuantityChange, handleDelete, subtotal } = useCart();
  const [discount, setDiscount] = useState(0);

  const handleDiscountApply = (value) => setDiscount(value);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.map((item, index) => (
        <CartItem
          key={item.id}
          product={item}
          onQuantityChange={handleQuantityChange}
          onDelete={() => handleDelete(index)}
        />
      ))}

      <CouponInput subtotal={subtotal} onApplyDiscount={handleDiscountApply} />

      <CartSummary subtotal={subtotal} discount={discount} />
    </div>
  );
};

export default Cart;
