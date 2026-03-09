import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AlertPopup from "@/components/ui/alert-popup";
import { Trash2, GripVertical } from "lucide-react";
import type { ReactNode, HTMLAttributes } from "react";

interface FormContainerProps {
  section: string;
  hasDeleteButton?: boolean;
  onHandleRemove?: () => void;
  children: ReactNode;
  dragHandleProps?: HTMLAttributes<HTMLDivElement>;
}

const FormContainer = ({
  section,
  hasDeleteButton = false,
  onHandleRemove,
  children,
  dragHandleProps,
}: FormContainerProps) => {
  return (
    <Card className="gap-2 p-3 hover:ring-2 hover:ring-primary relative">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          {dragHandleProps && (
            <div
              {...dragHandleProps}
              className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground hover:bg-muted p-1 rounded-md transition-colors"
            >
              <GripVertical className="size-4" />
            </div>
          )}
          <Badge>{section}</Badge>
        </div>
        {hasDeleteButton && (
          <AlertPopup
            title="Delete Education"
            description="Are you sure you want to delete this education?"
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
      </CardHeader>

      <CardContent className="grid gap-4">{children}</CardContent>
    </Card>
  );
};

export default FormContainer;
