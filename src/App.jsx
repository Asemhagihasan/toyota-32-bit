import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";
import { InputControlProvider } from "./context/InputControlContext";
import { ConnectionStatusProvider } from "./context/ConnectionStatus";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <AuthProvider>
      <ConnectionStatusProvider>
        <InputControlProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </InputControlProvider>
      </ConnectionStatusProvider>
    </AuthProvider>
  );
}

export default App;
