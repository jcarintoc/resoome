import { FileText } from "lucide-react";
import { memo } from "react";

const ButtonGenerate = () => {
  console.log("Button Generate Rerendered");
  return (
    <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-red-600 dark:bg-red-500 px-4 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-red-600 border border-white/20">
      <span className="text-sm inline-flex items-center gap-2">
        <FileText className="size-4" /> Generate PDF
      </span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </button>
  );
};

export default memo(ButtonGenerate);
