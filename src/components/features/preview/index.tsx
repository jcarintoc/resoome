import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { Button } from "@/components/ui/button";
import { View } from "lucide-react";
import { memo, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import type { ResumeValues } from "@/@types/resume";
import HarvardTemplate from "@/templates/harvard";

const Preview = () => {
  const [data, setData] = useState<ResumeValues | null>(null);

  const handleExpandChange = (expanded: boolean) => {
    if (expanded) {
      // Load data from localStorage when opening
      const saved = localStorage.getItem("resume-data");
      if (saved) {
        try {
          setData(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to load resume data", e);
        }
      }
    }
  };

  return (
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="100px"
      contentRadius="24px"
      onExpandChange={handleExpandChange}
    >
      <ExpandableScreenTrigger>
        <Button size={"lg"} variant={"ghost"}>
          <View /> Preview
        </Button>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent
        closeButtonClassName="text-primary bg-secondary hover:bg-secondary/80 top-2! right-2! sm:top-4! sm:right-8! shadow"
        className="bg-background dark:bg-secondary shadow-lg border-2 "
      >
        <div className="w-full h-full ">
          {data ? (
            <PDFViewer  showToolbar={false} className="w-full h-full  ">
              <HarvardTemplate data={data} />
            </PDFViewer>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-muted-foreground">No resume data available</p>
            </div>
          )}
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export default memo(Preview);
