import React, { useState } from 'react'
import { toast } from 'react-toastify';

function CouponInput({subtotal,onApplyDiscount}) {

const [coupon,setCoupon] = useState("")
// const [discount,setDiscount] = useState(0)

const handleApplyCoupon = () => {
    let discount = 0

    if (coupon === "FREE10") {
       discount = 10
       toast.success("You've got $10 off");
       
    } else if(coupon === "FREE20") {
        discount = subtotal * 0.2
        toast.success("You've got 20% off");
    } else (
        toast.error('Invalid coupon entry')
    )

    onApplyDiscount(discount)
}

  return (
     <div className="coupon-section">
        <input
            type="text"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
         />
        <button onClick={handleApplyCoupon}>Apply</button>

       
      </div>
  )
}

export default CouponInput