import { useState, useEffect } from "react";

export type TemplateType = "harvard" | "ats-1" | "ats-2";

export const useTemplate = () => {
  const [template, setTemplateState] = useState<TemplateType>(() => {
    return (localStorage.getItem("selected-template") as TemplateType) || "harvard";
  });

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "selected-template") {
        setTemplateState((e.newValue as TemplateType) || "harvard");
      }
    };

    const handleLocalChange = () => {
      setTemplateState((localStorage.getItem("selected-template") as TemplateType) || "harvard");
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("template-changed", handleLocalChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("template-changed", handleLocalChange);
    };
  }, []);

  const setTemplate = (newTemplate: TemplateType) => {
    localStorage.setItem("selected-template", newTemplate);
    setTemplateState(newTemplate);
    window.dispatchEvent(new Event("template-changed"));
  };

  return { template, setTemplate };
};
