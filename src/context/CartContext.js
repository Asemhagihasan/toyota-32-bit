import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const initialstate = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "addItem":
      return { ...state, cart: [...state.cart, action.payload] };
    case "deleteItem":
      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== action.payload),
      };
    case "increaseItemQuantity":
      const updatedCart = state.cart.map((item) => {
        if (item.productId === action.payload) {
          const updatedItem = {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: parseFloat((item.totalPrice + item.price).toFixed(2)),
          };
          return updatedItem;
        }
        return item;
      });
      return { ...state, cart: updatedCart };
    case "decreaseItemQuantity":
      const updatedCart1 = state.cart.map((item) => {
        if (item.productId === action.payload) {
          const updatedQuantity = item.quantity - 1;
          const updatedTotalPrice =
            updatedQuantity > 0 ? item.totalPrice - item.price : 0;
          return {
            ...item,
            quantity: updatedQuantity,
            totalPrice: parseFloat(updatedTotalPrice.toFixed(2)),
          };
        }
        return item;
      });
      const filteredCart = updatedCart1.filter((item) => item.quantity > 0);
      return { ...state, cart: filteredCart };
    case "clearCart":
      return { ...state, cart: [] };
    default:
      throw new Error("Unkown action type");
  }
}

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialstate);

  function getCurrentQuantity(id) {
    return cart.find((item) => item.productId === id)?.quantity ?? 0;
  }

  function getCart() {
    return cart;
  }

  return (
    <CartContext.Provider value={{ dispatch, getCurrentQuantity, getCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart, CartProvider };
