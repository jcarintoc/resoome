import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AlertPopup from "@/components/ui/alert-popup";
import { Trash2, GripVertical, ChevronDown, ChevronUp } from "lucide-react";
import { useState, type ReactNode, type HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FormContainerProps {
  section: string;
  hasDeleteButton?: boolean;
  onHandleRemove?: () => void;
  children: ReactNode;
  dragHandleProps?: HTMLAttributes<HTMLDivElement>;
  isDragging?: boolean;
}

const FormContainer = ({
  section,
  hasDeleteButton = false,
  onHandleRemove,
  children,
  dragHandleProps,
  isDragging = false,
}: FormContainerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isDragging ? false : isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      <Card className="gap-2 p-3 hover:ring-2 hover:ring-primary relative transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-2">
            {dragHandleProps && (
              <div
                {...dragHandleProps}
                className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground hover:bg-muted p-1 rounded-md transition-colors touch-none"
              >
                <GripVertical className="size-4" />
              </div>
            )}
            <Badge className="">
              <span className="truncate max-w-28 sm:max-w-full">{section}</span>
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            {hasDeleteButton && (
              <AlertPopup
                title={`Delete ${section}`}
                description={`Are you sure you want to delete this ${section.toLowerCase()}?`}
                cancelLabel="Cancel"
                acceptLabel="Delete"
                onAccept={onHandleRemove!}
                variant={"destructive"}
                size={"icon"}
                acceptClassName="bg-red-600 hover:bg-red-700 text-white"
              >
                <Trash2 className="size-4" />
              </AlertPopup>
            )}
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                disabled={isDragging}
              >
                {isOpen && !isDragging ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>

        <CollapsibleContent className="space-y-2">
          <CardContent className="grid gap-4 pt-4 border-t mt-2">
            {children}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default FormContainer;
