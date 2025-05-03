"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { VariablesTypes } from "../types/ContextType";

const Variables = createContext<VariablesTypes | undefined>(undefined);

const VaribalesProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [showMobail, setShowMobail] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [trendingState, setTrendingState] = useState<"movies" | "shows">(
    "movies"
  );
  const [trendingStatus, setTrendingStatus] = useState<"movies" | "shows">(
    "movies"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف الحدث عند الخروج من المكون
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Variables.Provider
      value={{
        show,
        setShow,
        showMobail,
        setShowMobail,
        scrollY,
        setScrollY,
        trendingState,
        setTrendingState,
        trendingStatus,
        setTrendingStatus,
      }}
    >
      {children}
    </Variables.Provider>
  );
};

export default VaribalesProvider;

export const useVariables = () => {
  const context = useContext(Variables);
  if (!context) {
    throw new Error("useVariables must be used within a DataProvider");
  }

  return context;
};
