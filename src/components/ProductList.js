import { useEffect, useState } from "react";
import Productcard from "./Productscard";
import useCart from "../hooks/useCart";

const ProductList = () => {
  const [products, setProducts] = useState([]);

   const { handleAddToCart } = useCart();
 

    useEffect(() => {
    fetch("/products.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);



  return (

    <div className="center">
            <div className="product-grid">
      {products.map(product => (
        <Productcard key={product.id} product={product} onAddToCart={handleAddToCart}/>
      ))}
    </div>
    </div>

  );

 
};

export default ProductList;
