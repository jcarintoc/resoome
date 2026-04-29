import { Document, Page, Text, View } from "@react-pdf/renderer";
import type { ResumeValues } from "@/@types/resume";
import { styles } from "./styles";

interface ATS2TemplateProps {
  data: ResumeValues;
}

const ATS2Template = ({ data }: ATS2TemplateProps) => {
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

        {/* Education Section */}
        {education.length > 0 && education[0].schoolName && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Education</Text>
            </View>
            {education.map((edu, index) => (
              <View key={index} style={styles.entry}>
                <Text style={styles.boldLine}>
                  {edu.program} | {edu.schoolName}
                </Text>
                <Text style={styles.grayLine}>
                  {edu.showAdditionalInfo && edu.additionalInfo.awards
                    ? `${edu.additionalInfo.awards}, `
                    : ""}
                  {edu.graduationMonth} {edu.graduationYear}
                </Text>

                {edu.showAdditionalInfo && edu.additionalInfo.gpa > 0 && (
                  <Text style={[styles.grayLine, { marginTop: 0 }]}>
                    GPA: {edu.additionalInfo.gpa}
                  </Text>
                )}
                {edu.showAdditionalInfo &&
                  edu.additionalInfo.extracurricular && (
                    <Text style={[styles.grayLine, { marginTop: 0 }]}>
                      Extracurricular: {edu.additionalInfo.extracurricular}
                    </Text>
                  )}
              </View>
            ))}
          </View>
        )}

        {/* Professional Experience Section */}
        {experience.length > 0 && experience[0].title && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Experience</Text>
            </View>
            {experience.map((exp, index) => (
              <View key={index} style={styles.entry}>
                <Text style={styles.boldLine}>
                  {exp.title} | {exp.organization}
                </Text>
                <Text style={styles.grayLine}>
                  {exp.startMonth} {exp.startYear} —{" "}
                  {exp.currentlyWorking
                    ? "Present"
                    : `${exp.endMonth} ${exp.endYear}`}
                  , {exp.city}, {exp.country}
                </Text>

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

        {/* Leadership & Activities */}
        {leadership.length > 0 && leadership[0].title && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Leadership & Activities</Text>
            </View>
            {leadership.map((lead, index) => (
              <View key={index} style={styles.entry}>
                <Text style={styles.boldLine}>
                  {lead.title} | {lead.organization}
                </Text>
                <Text style={styles.grayLine}>
                  {lead.startMonth} {lead.startYear} —{" "}
                  {lead.currentlyWorking
                    ? "Present"
                    : `${lead.endMonth} ${lead.endYear}`}
                  , {lead.city}, {lead.country}
                </Text>

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
              <Text style={styles.sectionTitle}>Skills</Text>
            </View>
            <View style={styles.skillsRow}>
              <Text style={styles.skillText}>
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
              {certification.map((cert, index) => {
                // If it looks like "Name | Org", we split it or we can just render the raw string if not formatted
                const parts = cert.split("|").map((p) => p.trim());
                if (parts.length >= 2) {
                  return (
                    <View key={index} style={styles.bulletItem}>
                      <Text style={styles.bullet}>•</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.boldLine}>
                          {parts[0]} | {parts[1]}
                        </Text>
                        {parts[2] && (
                          <Text style={styles.grayLine}>{parts[2]}</Text>
                        )}
                      </View>
                    </View>
                  );
                }
                return (
                  <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bullet}>•</Text>
                    <View style={{ flex: 1 }}>
                      <Text>{cert}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {/* Additional Info */}
        {(extra.laguages.length > 0 ||
          extra.interest.length > 0 ||
          extra.laboratory.length > 0) && (
          <View style={styles.section}>
            <View style={styles.sectionTitleContainer}>
              <Text style={styles.sectionTitle}>Additional</Text>
            </View>

            {extra.laguages.length > 0 && extra.laguages[0] !== "" && (
              <View style={styles.skillsRow}>
                <Text style={styles.skillText}>
                  <Text style={styles.skillLabel}>Languages: </Text>
                  {extra.laguages.join(", ")}
                </Text>
              </View>
            )}

            {extra.laboratory.length > 0 && extra.laboratory[0] !== "" && (
              <View style={styles.skillsRow}>
                <Text style={styles.skillText}>
                  <Text style={styles.skillLabel}>
                    Laboratory / Technical:{" "}
                  </Text>
                  {extra.laboratory.join(", ")}
                </Text>
              </View>
            )}

            {extra.interest.length > 0 && extra.interest[0] !== "" && (
              <View style={styles.skillsRow}>
                <Text style={styles.skillText}>
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

export default ATS2Template;
