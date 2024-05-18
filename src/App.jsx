import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";
import { ProductPanelProvider } from "./context/ProductControlPanelContext";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <AuthProvider>
      <ProductPanelProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductPanelProvider>
    </AuthProvider>
  );
}

export default App;
