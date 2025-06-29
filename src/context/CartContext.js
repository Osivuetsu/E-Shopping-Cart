import React, {createContext, useEffect, useState } from 'react'
import { toast } from "react-toastify";


export const CartContext = createContext();

export function CartProvider({children}) {

    const [cartItems , setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : []
    })



    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }, [cartItems])



    const handleAddToCart = (product) => {
        const index = cartItems.findIndex((item) => item.id === product.id)
        let updated

       
        if (index > -1) {
            updated = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );

        } else {
            updated = [...cartItems, { ...product, quantity: 1 }];
        }

        setCartItems(updated);
         toast.success(`${product.name} added to cart`);
    };

    const handleQuantityChange = (id, type, source = "cart") => {
    const updated = cartItems.map((item) => {
        if (item.id === id) {
            const qty = item.quantity || 0;
            const min = source === "cart" ? 1 : 0; // Cart should not go below 1
            const newQty = type === "increase" ? qty + 1 : Math.max(min, qty - 1);
        return { ...item, quantity: newQty };
        }
        return item;
    });

    setCartItems(updated);
    };

  // Delete from cart
  const handleDelete = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  // Subtotal
  const subtotal = cartItems.reduce((sum, item) => {
    const qty = item.quantity || 1;
    const price = parseFloat(item.price) || 0;
    return sum + qty * price;
  }, 0);


  // Item count for navbar
  const itemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
   
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleQuantityChange,
        handleDelete,
        subtotal,
        itemCount,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

