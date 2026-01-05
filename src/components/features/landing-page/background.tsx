import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

const Background = () => {
  return (
    <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 16],
          [12, 10],
          [10, 11],
          [13, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
  )
}

export default Background
