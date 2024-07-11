import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";
import { InputControlProvider } from "./context/InputControlContext";
import { ConnectionStatusProvider } from "./context/ConnectionStatus";
import { DarkModeProvider } from "./context/DarkModeContext";
import { LanguageProvider } from "./context/LanguageContext ";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>

          <LanguageProvider>
            <ConnectionStatusProvider>
              <InputControlProvider>
                <CartProvider>
                  <RouterProvider router={router} />
                </CartProvider>
              </InputControlProvider>
            </ConnectionStatusProvider>
          </LanguageProvider>

    </>
  );
}

export default App;
