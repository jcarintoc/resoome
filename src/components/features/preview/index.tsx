import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { Button } from "@/components/ui/button";
import { View } from "lucide-react";

export default function Preview() {
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

      <ExpandableScreenContent className="bg-primary">
        <div className="flex h-full items-center justify-center p-8">
          <h2 className="text-4xl text-primary-foreground">PDF Preview</h2>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
}
