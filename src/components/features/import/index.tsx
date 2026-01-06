import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { memo, useRef } from "react";
import { useFormContext } from "react-hook-form";
import type { ResumeValues } from "@/@types/resume";
import { toast } from "sonner";

const Import = () => {
  const { reset } = useFormContext<ResumeValues>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.name.endsWith(".json")) {
      toast.error("Please select a JSON file");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const data: ResumeValues = JSON.parse(content);

        // Reset form with imported data
        reset(data);

        // Also save to localStorage for persistence
        localStorage.setItem("resume-data", JSON.stringify(data));

        toast.success("Resume data imported successfully!");
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        toast.error("Invalid JSON file. Please check the file format.");
      }
    };

    reader.onerror = () => {
      toast.error("Failed to read the file. Please try again.");
    };

    reader.readAsText(file);

    // Reset input so same file can be selected again
    e.target.value = "";
  };

  return (
    <div className="flex justify-end">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
      />
      <Button variant="outline" onClick={handleButtonClick}>
        <Upload className="size-4" />
        Import JSON
      </Button>
    </div>
  );
};

export default memo(Import);