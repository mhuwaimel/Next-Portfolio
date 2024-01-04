import React, { useEffect, useState } from "react";

export const LanguageContext = React.createContext();

export default function LanguageProvider(props) {
  const [lang, setLang] = useState("ar");
  useEffect(() => {
    const Thm = localStorage.getItem("lang");
    if (!Thm) {
      setLang(lang);
    }
  }, []);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
