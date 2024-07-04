import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";
import { InputControlProvider } from "./context/InputControlContext";
import { ConnectionStatusProvider } from "./context/ConnectionStatus";
import { DarkModeProvider } from "./context/DarkModeContext";
import { LanguageProvider } from "./context/LanguageContext ";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <AuthProvider>
      <DarkModeProvider>
        <LanguageProvider>
          <ConnectionStatusProvider>
            <InputControlProvider>
              <CartProvider>
                <RouterProvider router={router} />
              </CartProvider>
            </InputControlProvider>
          </ConnectionStatusProvider>
        </LanguageProvider>
      </DarkModeProvider>
    </AuthProvider>
  );
}

export default App;
