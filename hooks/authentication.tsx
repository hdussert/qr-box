import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(true);
  }, []);
  return isAuthenticated;
};
