import { createContext, useContext, useEffect, useState } from "react";

const ConnectionStatusContext = createContext();

function ConnectionStatusProvider({ children }) {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <ConnectionStatusContext.Provider value={{ isOnline }}>
      {children}
    </ConnectionStatusContext.Provider>
  );
}

function useConnection() {
  const context = useContext(ConnectionStatusContext);
  return context;
}

export { useConnection, ConnectionStatusProvider };
