# 🛒 E-Shopping-Cart

A responsive, single-page shopping cart web application built with **React**, using **React Router**, **React Context API**, and **localStorage** for state persistence. Styled with plain CSS and deployed via **GitHub Pages**.

---

## 🚀 Features

- ✅ Product listing from `products.json`
- ✅ Add/Remove items from cart
- ✅ Quantity control with `+/-` buttons
- ✅ LocalStorage persistence
- ✅ Toast notifications (via `react-toastify`)
- ✅ Coupon discount system (flat or percentage)
- ✅ Order summary (subtotal, total)
- ✅ Error handling (404, fetch failure, invalid input)
- ✅ Git-based version control
- ✅ Live demo hosted on GitHub Pages

---

## 📸 Screenshots

> *(Add your screenshots here)*  
> `./public/screenshots/home.png`  
> `./public/screenshots/cart.png`

---

## 🌐 Live Site

🔗 [View Deployed App on Vercel](https://e-shopping-cart-git-main-osivuetsus-projects.vercel.app/)

---

## 🧰 Tech Stack

- **React** (CRA)
- **React Router DOM**
- **React Context API**
- **React Toastify**
- **LocalStorage**
- **Plain CSS**
- **Git & GitHub**

---

## 📁 Folder Structure

cart-app/
├── public/
│   ├── images/
│   │   ├── cart.png
│   │   └── home.png
│   └── products.json
├── src/
│   ├── components/
│   │   ├── Cart.js
│   │   ├── CartItem.js
│   │   ├── CartSummary.js
│   │   ├── CouponInput.js
│   │   ├── ErrorPage.js
│   │   ├── Layout.js
│   │   ├── Navbar.js
│   │   ├── ProductList.js
│   │   └── Productscard.js
│   ├── context/
│   │   └── CartContext.js
│   ├── hooks/
│   │   └── useCart.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md


