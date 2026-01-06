import type { ResumeValues } from "@/@types/resume";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useState, type KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import EmptyData from "@/components/ui/empty-data";

type FieldName =
  | "skills"
  | "certification"
  | "extra.laguages"
  | "extra.laboratory"
  | "extra.interest";

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
  const { append, remove } = useFieldArray({
    control,
    name: fieldName as never,
  });
  const [inputValue, setInputValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const items = watch(fieldName);

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
      <div className="flex flex-wrap gap-2 p-3 min-h-[60px] border border-dashed border-muted-foreground/30 rounded-lg bg-muted/20">
        {items.map((item, index) => (
          <div
            key={index}
            className="border flex items-center gap-2 pl-4 pr-1.5 rounded-full bg-primary text-background text-xs font-semibold"
          >
            {item}
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-transparent hover:bg-red-500/50 hover:text-red-200 rounded-full p-1"
              aria-label={`Remove ${item}`}
            >
              <X className="size-3" />
            </button>
          </div>
        ))}
      </div>

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
