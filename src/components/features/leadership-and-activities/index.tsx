import { useFieldArray, useFormContext } from "react-hook-form";
import type { ResumeValues } from "@/@types/resume";
import FormTemplate from "@/components/common/form-template";
import EmptyData from "@/components/ui/empty-data";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const LeadershipAndActivities = () => {
  const { control } = useFormContext<ResumeValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "leadership",
  });

  const onHandleRemove = (index: number) => {
    remove(index);
    toast.success("Leadership entry removed successfully");
  };

  if (fields.length === 0) {
    return (
      <EmptyData
        title="No Leadership & Activities"
        description="You haven't added any leadership or activities yet."
        buttonLabel="Add Leadership"
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
    <div className="space-y-6">
      {fields.map((item, index) => (
        <FormTemplate
          key={item.id}
          section="Leadership & Activities"
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
        Add Leadership & Activities
      </Button>
    </div>
  );
};

export default LeadershipAndActivities;
