import { FolderOpen, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

interface EmptyDataProps {
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
}

const EmptyData = ({
  title,
  description,
  buttonLabel,
  onClick,
}: EmptyDataProps) => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen />
        </EmptyMedia>
        <div>
          <EmptyTitle>{title}</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </div>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={onClick}>
          <Plus />
          {buttonLabel}
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export default EmptyData;
