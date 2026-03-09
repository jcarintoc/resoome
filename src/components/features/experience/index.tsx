import { useFieldArray, useFormContext } from "react-hook-form";
import type { ResumeValues } from "@/@types/resume";
import FormTemplate from "@/components/common/form-template";
import EmptyData from "@/components/ui/empty-data";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableFormTemplateProps {
  id: string;
  index: number;
  onHandleRemove: () => void;
}

const SortableFormTemplate = ({
  id,
  index,
  onHandleRemove,
}: SortableFormTemplateProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 10 : 1,
    position: "relative" as const,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <FormTemplate
        section="Experience"
        index={index}
        onHandleRemove={onHandleRemove}
        dragHandleProps={{ ...attributes, ...listeners }}
      />
    </div>
  );
};

const Experience = () => {
  const { control } = useFormContext<ResumeValues>();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "experience",
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = fields.findIndex((item) => item.id === active.id);
      const newIndex = fields.findIndex((item) => item.id === over.id);
      move(oldIndex, newIndex);
    }
  };

  const onHandleRemove = (index: number) => {
    remove(index);
    toast.success("Experience removed successfully");
  };

  if (fields.length === 0) {
    return (
      <EmptyData
        title="No Experience"
        description="You haven't added any experience yet."
        buttonLabel="Add Experience"
        onClick={() =>
          append({
            title: "",
            organization: "",
            country: "",
            city: "",
            startMonth: "",
            startYear: new Date().getFullYear(),
            endMonth: "",
            endYear: new Date().getFullYear(),
            currentlyWorking: false,
            experience: [],
          })
        }
      />
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={fields.map((f) => f.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-6">
          {fields.map((item, index) => (
            <SortableFormTemplate
              key={item.id}
              id={item.id}
              index={index}
              onHandleRemove={() => onHandleRemove(index)}
            />
          ))}

          <Button
            type="button"
            variant="outline"
            className="w-full border-dashed"
            onClick={() =>
              append({
                title: "",
                organization: "",
                country: "",
                city: "",
                startMonth: "",
                startYear: new Date().getFullYear(),
                endMonth: "",
                endYear: new Date().getFullYear(),
                currentlyWorking: false,
                experience: [],
              })
            }
          >
            <Plus className="h-4 w-4" />
            Add Experience
          </Button>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Experience;
