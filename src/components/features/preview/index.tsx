import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { Button } from "@/components/ui/button";
import { View } from "lucide-react";
import { memo } from "react";

const Preview = () => {
  console.log("Preview Rerendered");
  return (
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="100px"
      contentRadius="24px"
    >
      <ExpandableScreenTrigger>
        <Button size={"lg"} variant={"ghost"}>
          <View /> Preview
        </Button>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent
        closeButtonClassName="text-primary"
        className="bg-background dark:bg-secondary shadow-lg border-2"
      >
        <div className="flex h-full items-center justify-center p-8">
          <h2 className="text-4xl text-primary">PDF Preview</h2>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export default memo(Preview);
