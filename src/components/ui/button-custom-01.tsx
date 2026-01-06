import { FileText } from "lucide-react";
import { memo, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import JSZip from "jszip";
import HarvardTemplate from "@/templates/harvard";
import type { ResumeValues } from "@/@types/resume";
import { toast } from "sonner";

const ButtonGenerate = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    // Get data from localStorage
    const saved = localStorage.getItem("resume-data");
    if (!saved) {
      toast.error("No resume data found. Please fill out the form first.");
      return;
    }

    try {
      setIsGenerating(true);
      const data: ResumeValues = JSON.parse(saved);
      const fileName = data.contact.name || "resume";

      // Generate PDF blob
      const pdfBlob = await pdf(<HarvardTemplate data={data} />).toBlob();

      // Create JSON blob for reimporting
      const jsonBlob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });

      // Create ZIP file
      const zip = new JSZip();
      zip.file(`${fileName}.pdf`, pdfBlob);
      zip.file(`${fileName}-data.json`, jsonBlob);

      // Generate ZIP blob
      const zipBlob = await zip.generateAsync({ type: "blob" });

      // Create download link
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}-resume.zip`;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast.success("Resume package generated successfully!");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-red-600 dark:bg-red-700 px-4 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-red-600 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <span className="text-sm inline-flex items-center gap-2">
        <FileText className="size-4" />
        {isGenerating ? "Generating..." : "Generate PDF"}
      </span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </button>
  );
};

export default memo(ButtonGenerate);