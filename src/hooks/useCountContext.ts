import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

export const useCountContext = () => {
  const data = useContext(CountContext);
  if (!data) {
    throw new Error("Context must inside CountContext Provider");
  }
  return data;
};
