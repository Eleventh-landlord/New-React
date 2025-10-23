import React, { useState } from "react";
import "./App.css";

function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Jollof Rice", price: 1500, quantity: 2 },
    { id: 2, name: "Plantain", price: 500, quantity: 1 },
    { id: 3, name: "Suya", price: 1000, quantity: 3 },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Clear all
  const clearCart = () => setCart([]);

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2> Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>
                <strong>{item.name}</strong> - ₦{item.price.toLocaleString()} ×{" "}
                {item.quantity} = ₦
                {(item.price * item.quantity).toLocaleString()}
              </p>
              <div className="actions">
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button
                  onClick={() => decreaseQty(item.id)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <button className="remove" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="total">
            Total: ₦{total.toLocaleString()}
          </h3>

          <button className="clear" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
