import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (boolean) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", boolean);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark-mode")
    } else {
      body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return [darkMode, setDarkMode];
}; 
