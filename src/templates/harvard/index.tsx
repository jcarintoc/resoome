import { Document, Page, Text, View } from "@react-pdf/renderer";
import type { ResumeValues } from "@/@types/resume";
import { styles } from "./styles";

interface HarvardTemplateProps {
  data: ResumeValues;
}

const HarvardTemplate = ({ data }: HarvardTemplateProps) => {
  const {
    contact,
    education,
    experience,
    leadership,
    skills,
    certification,
    extra,
  } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {/* Name */}
          <Text style={styles.name}>{contact.name}</Text>
          {/* Contact Information */}
          <Text style={styles.contactInfo}>
            {contact.city}, {contact.country} {contact.postal + " "} &#8226;{" "}
            {" " + contact.phone + " "} &#8226; {" " + contact.email}
          </Text>
        </View>

        {/* Education Section */}
        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.entry}>
                {/* School Name and Graduation Date */}
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{edu.schoolName}</Text>
                  <Text style={styles.entryDate}>
                    {edu.city}, {edu.country}
                  </Text>
                </View>
                {/* Program and Location */}
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{edu.program}</Text>
                  <Text style={styles.entryDate}>
                    {edu.graduationMonth} {edu.graduationYear}
                  </Text>
                </View>
                {/* Additional Information */}
                {edu.showAdditionalInfo && edu.additionalInfo.gpa > 0 && (
                  <Text>GPA: {edu.additionalInfo.gpa}</Text>
                )}
                {edu.showAdditionalInfo && edu.additionalInfo.awards && (
                  <Text>Awards: {edu.additionalInfo.awards}</Text>
                )}
                {edu.showAdditionalInfo && edu.additionalInfo.extracurricular && (
                  <Text>Extracurricular: {edu.additionalInfo.extracurricular}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Experience Section */}
        {experience.length > 0 && experience[0].title && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp, index) => (
              <View key={index} style={styles.entry}>
                {/* Company and Location */}
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{exp.organization}</Text>
                  <Text style={styles.entryDate}>
                    {exp.city}, {exp.country}
                  </Text>
                </View>

                {/* Title and Date */}
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{exp.title}</Text>
                  <Text style={styles.entryDate}>
                    {exp.startMonth} {exp.startYear} -{" "}
                    {exp.currentlyWorking
                      ? "Present"
                      : `${exp.endMonth} ${exp.endYear}`}
                  </Text>
                </View>

                {/* Responsibilities */}
                {exp.experience.length > 0 && (
                  <View style={styles.bulletList}>
                    {exp.experience.map((bullet, i) => (
                      <View key={i} style={styles.bulletItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>{bullet}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Leadership Section */}
        {leadership.length > 0 && leadership[0].title && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Leadership & Activities</Text>
            {leadership.map((lead, index) => (
              <View key={index} style={styles.entry}>
                {/* Company and Location */}
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{lead.organization}</Text>
                  <Text style={styles.entryDate}>
                    {lead.city}, {lead.country}
                  </Text>
                </View>

                {/* Title and Date */}
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{lead.title}</Text>
                  <Text style={styles.entryDate}>
                    {lead.startMonth} {lead.startYear} -{" "}
                    {lead.currentlyWorking
                      ? "Present"
                      : `${lead.endMonth} ${lead.endYear}`}
                  </Text>
                </View>

                {/* Responsibilities */}
                {lead.experience.length > 0 && (
                  <View style={styles.bulletList}>
                    {lead.experience.map((bullet, i) => (
                      <View key={i} style={styles.bulletItem}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.bulletText}>{bullet}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsRow}>
              <Text>{skills.join(", ")}</Text>
            </View>
          </View>
        )}

        {/* Certifications */}
        {certification.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            <Text>{certification.join(", ")}</Text>
          </View>
        )}

        {/* Extra - Languages, Interests */}
        {(extra.laguages.length > 0 || extra.interest.length > 0) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Additional</Text>
            {extra.laguages.length > 0 && (
              <Text>Languages: {extra.laguages.join(", ")}</Text>
            )}
            {extra.interest.length > 0 && (
              <Text>Interests: {extra.interest.join(", ")}</Text>
            )}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default HarvardTemplate;
