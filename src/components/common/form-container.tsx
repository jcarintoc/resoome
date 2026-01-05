import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AlertPopup from "@/components/ui/alert-popup";
import { Trash2 } from "lucide-react";
import type { ReactNode } from "react";

interface FormContainerProps {
  section: string;
  hasDeleteButton?: boolean;
  onHandleRemove?: () => void;
  children: ReactNode;
}

const FormContainer = ({
  section,
  hasDeleteButton = false,
  onHandleRemove,
  children,
}: FormContainerProps) => {
  return (
    <Card className="gap-2 p-3 hover:ring-2 hover:ring-primary">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <Badge>{section}</Badge>
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
