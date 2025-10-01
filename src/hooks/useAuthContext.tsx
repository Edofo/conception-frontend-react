import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () => {
  const data = useContext(AuthContext);
  if (!data) {
    throw new Error("Context must inside AuthContext Provider");
  }
  return data;
};
