import { Input } from "@/components/ui/input";
import { useFormContext, useFieldArray } from "react-hook-form";
import type { ResumeValues } from "@/@types/resume";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EmptyData from "@/components/ui/empty-data";
import { toast } from "sonner";
import { Checkbox } from "@/components/animate-ui/components/radix/checkbox";
import FormContainer from "@/components/common/form-container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { months } from "@/lib/monthsUtils.ts";

const EducationSection = () => {
  const { control, setValue, watch } = useFormContext<ResumeValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const educationValues = watch("education");

  const onHandleRemove = (index: number) => {
    remove(index);
    toast.success("Education removed successfully");
  };

  if (fields.length === 0) {
    return (
      <EmptyData
        title="No Education"
        description="You haven't added any education yet."
        buttonLabel="Add Education"
        onClick={() =>
          append({
            schoolName: "",
            city: "",
            country: "",
            program: "",
            graduationMonth: "",
            graduationYear: new Date().getFullYear(),
            showAdditionalInfo: false,
            additionalInfo: {
              gpa: 0,
              awards: "",
              extracurricular: "",
            },
          })
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      {fields.map((item, index) => (
        <FormContainer
          key={item.id}
          section={`Education ${index + 1}`}
          hasDeleteButton={true}
          onHandleRemove={() => onHandleRemove(index)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* School Name */}
            <FormField
              control={control}
              name={`education.${index}.schoolName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="University of the Philippines"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Program */}
            <FormField
              control={control}
              name={`education.${index}.program`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program/Degree</FormLabel>
                  <FormControl>
                    <Input placeholder="BS Computer Science" {...field} />
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
              name={`education.${index}.city`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Quezon City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={control}
              name={`education.${index}.country`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Philippines" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Graduation Month */}
            <FormField
              control={control}
              name={`education.${index}.graduationMonth`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Graduation Month</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value ?? ""}
                      value={field.value ?? ""}
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

            {/* Graduation Year */}
            <FormField
              control={control}
              name={`education.${index}.graduationYear`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Graduation Year</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={new Date().getFullYear().toString()}
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

          {/* Show Additional Info */}
          {/* Show Additional Info */}
          <FormField
            control={control}
            name={`education.${index}.showAdditionalInfo`}
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => {
                      field.onChange(checked);
                      if (!checked) {
                        setValue(`education.${index}.additionalInfo.gpa`, 0);
                        setValue(
                          `education.${index}.additionalInfo.awards`,
                          ""
                        );
                        setValue(
                          `education.${index}.additionalInfo.extracurricular`,
                          ""
                        );
                      }
                    }}
                  />
                </FormControl>
                <FormLabel className="font-normal cursor-pointer">
                  Additional Info
                </FormLabel>
              </FormItem>
            )}
          />

          {educationValues?.[index]?.showAdditionalInfo && (
            <>
              {/* GPA Score */}
              <FormField
                control={control}
                name={`education.${index}.additionalInfo.gpa`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GPA</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="3.8" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Awards */}
              <FormField
                control={control}
                name={`education.${index}.additionalInfo.awards`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Awards <Badge variant="secondary">Comma separated</Badge>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Summa Cum Laude, Dean's Lister"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Extracurricular */}
              <FormField
                control={control}
                name={`education.${index}.additionalInfo.extracurricular`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Extracurricular Activities{" "}
                      <Badge variant="secondary">Comma separated</Badge>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Student Council, Coding Club"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </FormContainer>
      ))}

      <Button
        type="button"
        variant="outline"
        className="w-full border-dashed"
        onClick={() =>
          append({
            schoolName: "",
            city: "",
            country: "",
            program: "",
            graduationMonth: "",
            graduationYear: new Date().getFullYear(),
            showAdditionalInfo: false,
            additionalInfo: {
              gpa: 0,
              awards: "",
              extracurricular: "",
            },
          })
        }
      >
        <Plus className="h-4 w-4" />
        Add Education
      </Button>
    </div>
  );
};

export default EducationSection;
