import { useEffect, useState } from "react";
import Productcard from "./Productscard";
import useCart from "../hooks/useCart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/products.json");
        
        // Check if response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Validate data format
        if (!Array.isArray(data)) {
          throw new Error("Invalid data format: Expected an array of products");
        }

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message || "Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Render different states
  if (isLoading) {
    return (
      <div className="center">
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center">
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="center">
        <p>No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="center">
      <div className="product-grid">
        {products.map(product => (
          <Productcard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;