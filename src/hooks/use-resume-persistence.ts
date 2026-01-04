import { useEffect } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { ResumeValues } from "@/@types/resume";

export const useResumePersistence = (form: UseFormReturn<ResumeValues>) => {
  // 1. Load data on mount
  useEffect(() => {
    const saved = localStorage.getItem("resume-data");
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        form.reset(parsedData);
      } catch (e) {
        console.error("Failed to load resume data", e);
      }
    }
  }, [form]);

  // 2. Autosave with debounce
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const subscription = form.watch((value) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        localStorage.setItem("resume-data", JSON.stringify(value));
      }, 1000);
    });

    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, [form]);
};
