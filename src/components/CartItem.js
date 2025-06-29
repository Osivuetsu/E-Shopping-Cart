
const CartItem = ({ product, onQuantityChange, onDelete }) => {
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-left">
          <img
            className="cart-item-image"
            src={product.image}
            alt="jj"
          />
          <div className="cart-item-details">
            <p className="item-title">{product.name}</p>
            <p className="item-meta">Price: ${product.price}</p>
            <p className="item-meta">Size: {product.size}</p>
          </div>
        </div>

        <div className="right">
          <div className="cart-item-controls">
          

            <button onClick={() => onQuantityChange(product.id, "decrease")}>-</button>
            <input type="number" value={product.quantity || 1} readOnly />
            <button onClick={() => onQuantityChange(product.id, "increase")}>+</button>
          </div>



          <>
            <p className="item-meta">subtotal:{
              product.price * product.quantity
            }</p>
          </>


          


        </div>

        
       
      </div>

      <div className="cart-item-delete">
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};

export default CartItem;
