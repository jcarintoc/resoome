import FormTemplate02 from "@/components/common/form-template-02";

const Certification = () => {
  return (
    <FormTemplate02
      fieldName="certification"
      emptyTitle="No Certifications"
      emptyDescription="You haven't added any certifications yet."
      emptyButtonLabel="Add Certification"
      inputPlaceholder="Add a certification and press Enter..."
      helperText="Press Enter or click Add to add a certification. Click the × to remove."
    />
  );
};

export default Certification;
