// import { useEffect } from "react";
// import type { UseFormReturn } from "react-hook-form";
// import type { ResumeValues } from "@/@types/resume";

// export const useResumePersistence = (form: UseFormReturn<ResumeValues>) => {
//   // 1. Load data on mount
//   useEffect(() => {
//     const saved = localStorage.getItem("resume-data");
//     if (saved) {
//       try {
//         const parsedData = JSON.parse(saved);
//         form.reset(parsedData);
//       } catch (e) {
//         console.error("Failed to load resume data", e);
//       }
//     }
//   }, [form]);

//   // 2. Autosave with debounce
//   useEffect(() => {
//     let timeout: ReturnType<typeof setTimeout>;

//     const subscription = form.watch((value) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         localStorage.setItem("resume-data", JSON.stringify(value));
//       }, 1000);
//     });

//     return () => {
//       subscription.unsubscribe();
//       clearTimeout(timeout);
//     };
//   }, [form]);
// };

import { useEffect, useRef } from "react";
import type { UseFormReturn } from "react-hook-form";
import type { ResumeValues } from "@/@types/resume";

export const useResumePersistence = (form: UseFormReturn<ResumeValues>) => {
  const isInitialized = useRef(false);

  // 1. Load data on mount only once
  useEffect(() => {
    if (isInitialized.current) return;
    
    const saved = localStorage.getItem("resume-data");
    if (saved) {
      try {
        const parsedData = JSON.parse(saved);
        form.reset(parsedData);
      } catch (e) {
        console.error("Failed to load resume data", e);
      }
    }
    isInitialized.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // form.watch is stable, no need for dependency
};