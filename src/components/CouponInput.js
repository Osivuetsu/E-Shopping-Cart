import React, { useState } from 'react';
import { toast } from 'react-toastify';

function CouponInput({ subtotal, onApplyDiscount }) {
  const [coupon, setCoupon] = useState('');
  const [error, setError] = useState('');

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    setError('');

    if (!code) return showError('Enter a coupon code');
    if (!/^[A-Z0-9]{4,10}$/.test(code)) return showError('Invalid format');

    let discount = 0;

    if (code === 'FREE10') {
      if (subtotal < 10) return showError('Min $10 required');
      discount = 10;
    } else if (code === 'FREE20') {
      if (subtotal < 20) return showError('Min $20 required');
      discount = subtotal * 0.2;
    } else {
      return showError('Invalid code');
    }

    onApplyDiscount(discount);
    toast.success(`Discount applied: $${discount.toFixed(2)}`);
    setCoupon('');
  };

  const showError = (msg) => {
    setError(msg);
    toast.error(msg);
    onApplyDiscount(0);
  };

  return (
    <div className="coupon-section">
      <div>
        Use 'FREE10' to get $10 off and 'FREE20' for 20% off
      </div>
      <div className="coupon-input-wrapper">
        <input
          type="text"
          placeholder="Enter coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === 'Enter' && handleApplyCoupon()}
          className={error ? 'input-error' : ''}
        />
      </div>
      <button onClick={handleApplyCoupon} disabled={!coupon.trim()}>
        Apply
      </button>
        {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default CouponInput;
