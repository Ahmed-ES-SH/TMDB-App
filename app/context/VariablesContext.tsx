"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { VariablesTypes } from "../types/ContextType";

const Variables = createContext<VariablesTypes | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export default function VaribalesProvider({ children }: Props) {
  const [width, setWidth] = useState<number>(0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);
  const [showMobail, setShowMobail] = useState<boolean>(false);
  const [trendingState, setTrendingState] = useState<"movies" | "shows">(
    "movies"
  );
  const [SearchbarState, setSearchbarState] = useState<boolean>(false);

  useEffect(() => {
    // تحديد القيمة مبدئياً عند تشغيل الكومبوننت (على العميل فقط)
    const handleResize = () => setWidth(window.innerWidth);
    const handleScroll = () => setScrollY(window.scrollY);

    handleResize(); // تعيين القيمة فورًا عند تشغيل

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
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
        SearchbarState,
        setSearchbarState,
        width,
      }}
    >
      {children}
    </Variables.Provider>
  );
}

export const useVariables = () => {
  const context = useContext(Variables);
  if (!context) {
    throw new Error("useVariables must be used within a DataProvider");
  }

  return context;
};
