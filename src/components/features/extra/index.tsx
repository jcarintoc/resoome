import FormTemplate02 from "@/components/common/form-template-02";
import FormContainer from "@/components/common/form-container";

const Extra = () => {
  return (
    <div className="space-y-6">
      {/* Languages Section */}
      <FormContainer section="Languages">
        <FormTemplate02
          fieldName="extra.laguages"
          emptyTitle="No Languages"
          emptyDescription="Add languages you speak."
          emptyButtonLabel="Add Language"
          inputPlaceholder="e.g. English, Spanish, Mandarin..."
          helperText="Press Enter or click Add to add a language."
        />
      </FormContainer>

      {/* Laboratory / Technical Skills Section */}
      <FormContainer section="Laboratory / Technical">
        <FormTemplate02
          fieldName="extra.laboratory"
          emptyTitle="No Laboratory Skills"
          emptyDescription="Add laboratory or technical skills."
          emptyButtonLabel="Add Skill"
          inputPlaceholder="e.g. PCR, Spectroscopy, Data Analysis..."
          helperText="Press Enter or click Add to add a skill."
        />
      </FormContainer>

      {/* Interests Section */}
      <FormContainer section="Interests">
        <FormTemplate02
          fieldName="extra.interest"
          emptyTitle="No Interests"
          emptyDescription="Add your hobbies and interests."
          emptyButtonLabel="Add Interest"
          inputPlaceholder="e.g. Photography, Hiking, Reading..."
          helperText="Press Enter or click Add to add an interest."
        />
      </FormContainer>
    </div>
  );
};

export default Extra;
