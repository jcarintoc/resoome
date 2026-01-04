import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { memo } from "react";

const index = () => {
  console.log("Import Rerendered");
  return (
    <div className="flex justify-end">
      <Button variant={"outline"}>
        <Upload /> Import CSV
      </Button>
    </div>
  );
};

export default memo(index);
