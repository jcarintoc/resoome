import FormContainer from "./form-container";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Checkbox } from "@/components/animate-ui/components/radix/checkbox";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormTemplateProps {
  section: "Experience" | "Leadership & Activities";
  onHandleRemove: () => void;
  index: number;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const FormTemplate = ({
  section,
  onHandleRemove,
  index,
}: FormTemplateProps) => {
  const { control, watch, setValue } = useFormContext();

  // Map section label to form key
  const formKey = section === "Experience" ? "experience" : "leadership";

  const currentlyWorking = watch(`${formKey}.${index}.currentlyWorking`);

  // Bullet points for experience
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${formKey}.${index}.experience`,
  });

  return (
    <FormContainer
      section={`${section} ${index + 1}`}
      hasDeleteButton={true}
      onHandleRemove={onHandleRemove}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Title */}
        <FormField
          control={control}
          name={`${formKey}.${index}.title`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title / Position</FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    section === "Experience"
                      ? "Software Engineer"
                      : "Student Council President"
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Organization */}
        <FormField
          control={control}
          name={`${formKey}.${index}.organization`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization / Company</FormLabel>
              <FormControl>
                <Input placeholder="Acme Corp" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* City */}
        <FormField
          control={control}
          name={`${formKey}.${index}.city`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Manila" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country */}
        <FormField
          control={control}
          name={`${formKey}.${index}.country`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="PH" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Start Month */}
        <FormField
          control={control}
          name={`${formKey}.${index}.startMonth`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Month</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Start Month</SelectLabel>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Start Year */}
        <FormField
          control={control}
          name={`${formKey}.${index}.startYear`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Year</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder={new Date().getFullYear().toString()}
                  {...field}
                  onChange={(e) => {
                    const val = e.target.valueAsNumber;
                    field.onChange(isNaN(val) ? null : val);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Currently Working Checkbox */}
      <div className="flex items-center gap-2">
        <FormField
          control={control}
          name={`${formKey}.${index}.currentlyWorking`}
          render={({ field: checkboxField }) => (
            <FormItem className="flex flex-row items-center gap-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={checkboxField.value}
                  onCheckedChange={(checked) => {
                    checkboxField.onChange(checked);
                    if (checked) {
                      setValue(`${formKey}.${index}.endYear`, null);
                      setValue(`${formKey}.${index}.endMonth`, null);
                    }
                  }}
                />
              </FormControl>
              <FormLabel className="font-normal cursor-pointer">
                I currently work here
              </FormLabel>
            </FormItem>
          )}
        />
      </div>

      {/* Hide this if currentlyWorking is checked */}
      {!currentlyWorking && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* End Month */}
          <FormField
            control={control}
            name={`${formKey}.${index}.endMonth`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Month</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value ?? ""}
                    value={field.value ?? ""}
                    disabled={currentlyWorking}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>End Month</SelectLabel>
                        {months.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* End Year */}
          <FormField
            control={control}
            name={`${formKey}.${index}.endYear`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Year</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={new Date().getFullYear().toString()}
                    disabled={currentlyWorking}
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => {
                      const val = e.target.valueAsNumber;
                      field.onChange(isNaN(val) ? null : val);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}

      {/* Experience Bullet Points */}
      <div className="space-y-4">
        <FormLabel>Experience / Responsibilities</FormLabel>

        {fields.map((item, k) => (
          <div key={item.id} className="flex gap-2 items-center">
            <FormField
              control={control}
              name={`${formKey}.${index}.experience.${k}`}
              render={({ field }) => (
                <FormItem className="flex-1 space-y-0">
                  <FormControl>
                    <Input
                      placeholder="Led a team of developers..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(k)}
              className="text-destructive hover:text-destructive/90"
            >
              <X className="size-4" />
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full border-dashed"
          onClick={() => append("New bullet point")}
        >
          <Plus className="size-4 mr-2" />
          Add Bullet Point
        </Button>
      </div>
    </FormContainer>
  );
};

export default FormTemplate;
