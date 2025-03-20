import { AppStateContext } from "@/contexts/AppStateContext";
import { useContext } from "react";

export const useAppState = () => {
  return useContext(AppStateContext);
};
