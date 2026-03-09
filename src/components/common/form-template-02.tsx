import type { ResumeValues } from "@/@types/resume";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X, GripVertical } from "lucide-react";
import EmptyData from "@/components/ui/empty-data";
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
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type FieldName =
  | "skills"
  | "certification"
  | "extra.laguages"
  | "extra.laboratory"
  | "extra.interest";

interface SortableTagProps {
  id: string;
  index: number;
  onRemove: (index: number) => void;
  children: ReactNode;
}

const SortableTag = ({ id, index, onRemove, children }: SortableTagProps) => {
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
    opacity: isDragging ? 0.8 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border flex items-center gap-1 pl-1 pr-1.5 rounded-full bg-primary text-background text-xs font-semibold relative touch-none"
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing hover:bg-white/20 p-1 rounded-full transition-colors flex items-center justify-center"
      >
        <GripVertical className="size-3" />
      </div>
      <span className="px-1">{children}</span>
      <button
        type="button"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => onRemove(index)}
        className="bg-transparent hover:bg-red-500/50 hover:text-red-200 rounded-full p-1 transition-colors"
        aria-label={`Remove ${children}`}
      >
        <X className="size-3" />
      </button>
    </div>
  );
};

interface FormTemplate02Props {
  fieldName: FieldName;
  emptyTitle: string;
  emptyDescription: string;
  emptyButtonLabel: string;
  inputPlaceholder: string;
  helperText: string;
}

const FormTemplate02 = ({
  fieldName,
  emptyTitle,
  emptyDescription,
  emptyButtonLabel,
  inputPlaceholder,
  helperText,
}: FormTemplate02Props) => {
  const { control, watch } = useFormContext<ResumeValues>();
  const { append, remove, move } = useFieldArray({
    control,
    name: fieldName as never,
  });
  const [inputValue, setInputValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const items = watch(fieldName) ?? [];

  const handleAddItem = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !items.includes(trimmedValue)) {
      append(trimmedValue as never);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddItem();
    }
  };

  const removeAllItems = () => {
    remove();
    setIsAdding(false);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.indexOf(active.id as string);
      const newIndex = items.indexOf(over.id as string);
      if (oldIndex !== -1 && newIndex !== -1) {
        move(oldIndex, newIndex);
      }
    }
  };

  if (items.length === 0 && !isAdding) {
    return (
      <EmptyData
        title={emptyTitle}
        description={emptyDescription}
        buttonLabel={emptyButtonLabel}
        onClick={() => setIsAdding(true)}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Tags Display */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-wrap gap-2 p-3 min-h-[60px] border border-dashed border-muted-foreground/30 rounded-lg bg-muted/20">
          <SortableContext items={items} strategy={rectSortingStrategy}>
            {items.map((item, index) => (
              <SortableTag key={item} id={item} index={index} onRemove={remove}>
                {item}
              </SortableTag>
            ))}
          </SortableContext>
        </div>
      </DndContext>

      {/* Clear All */}
      {items.length > 0 && (
        <div className="flex justify-end">
          <Button
            type="button"
            size={"xs"}
            variant="destructive"
            className="w-fit"
            onClick={removeAllItems}
          >
            <X />
            Clear All
          </Button>
        </div>
      )}
      {/* Add Input */}
      <div className="flex gap-2">
        <Input
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
        />
        <Button
          type="button"
          onClick={handleAddItem}
          disabled={!inputValue.trim()}
        >
          <Plus className="size-4" />
          Add
        </Button>
      </div>

      {/* Helper Text */}
      <p className="text-xs text-muted-foreground">{helperText}</p>
    </div>
  );
};

export default FormTemplate02;
