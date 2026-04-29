import { Document, Page, Text, View } from "@react-pdf/renderer";
import type { ResumeValues } from "@/@types/resume";
import { styles } from "./styles";

interface ATS1TemplateProps {
  data: ResumeValues;
}

const ATS1Template = ({ data }: ATS1TemplateProps) => {
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
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.contactInfo}>
            {contact.city && contact.country
              ? `${contact.city}, ${contact.country}`
              : contact.city || contact.country}
            {contact.postal ? ` ${contact.postal}` : ""}
            {(contact.city || contact.country || contact.postal) &&
            (contact.phone || contact.email)
              ? " • "
              : ""}
            {contact.phone}
            {contact.phone && contact.email ? " • " : ""}
            {contact.email}
          </Text>
        </View>

        {/* Professional Experience Section */}
        {experience.length > 0 && experience[0].title && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Professional Experience</Text>
            </View>
            {experience.map((exp, index) => (
              <View key={index} style={styles.entry}>
                <View style={styles.row}>
                  <Text style={styles.companyName}>{exp.organization}</Text>
                  <Text style={styles.locationDateNormal}>
                    {exp.city}, {exp.country}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.jobTitle}>{exp.title}</Text>
                  <Text style={styles.locationDate}>
                    {exp.startMonth} {exp.startYear} –{" "}
                    {exp.currentlyWorking
                      ? "Present"
                      : `${exp.endMonth} ${exp.endYear}`}
                  </Text>
                </View>

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

        {/* Education Section */}
        {education.length > 0 && education[0].schoolName && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Education</Text>
            </View>
            {education.map((edu, index) => (
              <View key={index} style={styles.entry}>
                <View style={styles.row}>
                  <Text style={styles.degreeName}>{edu.program}</Text>
                  <Text style={styles.locationDateNormal}>
                    {edu.showAdditionalInfo && edu.additionalInfo.awards
                      ? edu.additionalInfo.awards
                      : ""}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text>{edu.schoolName}</Text>
                  <Text style={styles.locationDateNormal}>
                    {edu.graduationMonth} {edu.graduationYear}
                  </Text>
                </View>

                {/* Additional Info below if needed, though ATS-1 design has it clean */}
                {edu.showAdditionalInfo && edu.additionalInfo.gpa > 0 && (
                  <Text style={{ fontSize: 10, marginTop: 2 }}>
                    GPA: {edu.additionalInfo.gpa}
                  </Text>
                )}
                {edu.showAdditionalInfo &&
                  edu.additionalInfo.extracurricular && (
                    <Text style={{ fontSize: 10, marginTop: 2 }}>
                      Extracurricular: {edu.additionalInfo.extracurricular}
                    </Text>
                  )}
              </View>
            ))}
          </View>
        )}

        {/* Leadership & Activities */}
        {leadership.length > 0 && leadership[0].title && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Leadership & Activities</Text>
            </View>
            {leadership.map((lead, index) => (
              <View key={index} style={styles.entry}>
                <View style={styles.row}>
                  <Text style={styles.companyName}>{lead.organization}</Text>
                  <Text style={styles.locationDateNormal}>
                    {lead.city}, {lead.country}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.jobTitle}>{lead.title}</Text>
                  <Text style={styles.locationDate}>
                    {lead.startMonth} {lead.startYear} –{" "}
                    {lead.currentlyWorking
                      ? "Present"
                      : `${lead.endMonth} ${lead.endYear}`}
                  </Text>
                </View>

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
        {skills.length > 0 && skills[0] !== "" && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Expert-Level Skills</Text>
            </View>
            <View style={styles.skillsRow}>
              <Text>
                <Text style={styles.skillLabel}>Skills: </Text>
                {skills.join(", ")}
              </Text>
            </View>
          </View>
        )}

        {/* Certifications Section */}
        {certification.length > 0 && certification[0] !== "" && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Certifications</Text>
            </View>
            <View style={styles.bulletList}>
              {certification.map((cert, index) => (
                <View key={index} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{cert}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Additional Info */}
        {(extra.laguages.length > 0 ||
          extra.interest.length > 0 ||
          extra.laboratory.length > 0) && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Additional Information</Text>
            </View>

            {extra.laguages.length > 0 && extra.laguages[0] !== "" && (
              <View style={styles.skillsRow}>
                <Text>
                  <Text style={styles.skillLabel}>Languages: </Text>
                  {extra.laguages.join(", ")}
                </Text>
              </View>
            )}

            {extra.laboratory.length > 0 && extra.laboratory[0] !== "" && (
              <View style={styles.skillsRow}>
                <Text>
                  <Text style={styles.skillLabel}>
                    Laboratory / Technical:{" "}
                  </Text>
                  {extra.laboratory.join(", ")}
                </Text>
              </View>
            )}

            {extra.interest.length > 0 && extra.interest[0] !== "" && (
              <View style={styles.skillsRow}>
                <Text>
                  <Text style={styles.skillLabel}>Interests: </Text>
                  {extra.interest.join(", ")}
                </Text>
              </View>
            )}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default ATS1Template;
