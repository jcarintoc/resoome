import { useFieldArray, useFormContext } from "react-hook-form";
import type { ResumeValues } from "@/@types/resume";
import FormTemplate from "@/components/common/form-template";
import EmptyData from "@/components/ui/empty-data";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const Experience = () => {
  const { control } = useFormContext<ResumeValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

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
            startMonth: new Date(),
            startYear: new Date(),
            endMonth: new Date(),
            endYear: new Date(),
            currentlyWorking: false,
            experience: [],
          })
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {fields.map((item, index) => (
        <FormTemplate
          key={item.id}
          section="Experience"
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
            startMonth: new Date(),
            startYear: new Date(),
            endMonth: new Date(),
            endYear: new Date(),
            currentlyWorking: false,
            experience: [],
          })
        }
      >
        <Plus className="h-4 w-4" />
        Add Experience
      </Button>
    </div>
  );
};

export default Experience;
