// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa'; // Font Awesome

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">🛒 ShopNow</Link>

//       <div className="nav-links">
//         <Link to="/cart" className="cart-link">
//           <FaShoppingCart className="cart-icon" />
//           <span>Cart</span>
//           {/* Optionally show item count like: <span className="cart-count">2</span> */}
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import useCart from '../hooks/useCart';

const Navbar = () => {
  const { itemCount } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🛒 ShopNow</Link>

      <div className="nav-links">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          <span>Cart</span>
           <span className="cart-count">{itemCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
