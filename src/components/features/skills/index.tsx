import FormTemplate02 from "@/components/common/form-template-02";

const Skills = () => {
  return (
    <FormTemplate02
      fieldName="skills"
      emptyTitle="No Skills"
      emptyDescription="You haven't added any skills yet."
      emptyButtonLabel="Add Skills"
      inputPlaceholder="Add a skill and press Enter..."
      helperText="Press Enter or click Add to add a skill. Click the × to remove."
    />
  );
};

export default Skills;
