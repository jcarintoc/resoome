import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
    color: "#1a1a1a",
  },
  // Header
  header: {
    textAlign: "center",
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 10,
  },
  // Sections
  section: {
    marginBottom: 12,
  },
  sectionTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
    marginBottom: 12,
    paddingBottom: 2,
  },
  sectionTitle: {
    fontSize: 11,
    textTransform: "uppercase",
  },

  // Entries (Experience, Education, etc.)
  entry: {
    marginBottom: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  companyName: {
    fontWeight: "bold",
  },
  jobTitle: {
    fontStyle: "italic",
  },
  locationDate: {
    fontStyle: "italic",
    textAlign: "right",
  },
  locationDateNormal: {
    textAlign: "right",
  },
  degreeName: {
    fontWeight: "bold",
  },

  // Bullet points
  bulletList: {
    marginTop: 4,
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 2,
  },
  bullet: {
    width: 15,
    paddingLeft: 5,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
  },

  // Skills
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
  },
  skillLabel: {
    fontWeight: "bold",
  },
});
