const CartSummary = ({ subtotal, discount, shipping = 10 }) => {
  const total = subtotal + shipping - discount;

  return (
    <div className="summary">
      <div className="summary-line">
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </div>
      <div className="summary-line">
        <p>Shipping</p>
        <p>${shipping.toFixed(2)}</p>
      </div>
      <div className="summary-line total">
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartSummary;
