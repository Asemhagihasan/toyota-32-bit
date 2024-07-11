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
      <DarkModeProvider>
        <AuthProvider>
          <LanguageProvider>
            <ConnectionStatusProvider>
              <InputControlProvider>
                <CartProvider>
                  <RouterProvider router={router} />
                </CartProvider>
              </InputControlProvider>
            </ConnectionStatusProvider>
          </LanguageProvider>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </AuthProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
