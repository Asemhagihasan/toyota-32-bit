import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";
import { ProductPanelProvider } from "./context/ProductControlPanelContext";
import { ConnectionStatusProvider } from "./context/ConnectionStatus";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <AuthProvider>
      <ConnectionStatusProvider>
        <ProductPanelProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </ProductPanelProvider>
      </ConnectionStatusProvider>
    </AuthProvider>
  );
}

export default App;
