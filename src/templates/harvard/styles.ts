import { StyleSheet, Font } from "@react-pdf/renderer";

// Register fonts (optional - Harvard uses Times New Roman typically)
Font.register({
  family: "Times-Roman",
  src: "https://fonts.gstatic.com/s/timesnewroman/v1/...", // Or use local font
});

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Times-Roman",
    lineHeight: 1.4,
  },
  // Header
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  contactInfo: {
    fontSize: 10,
    color: "#333",
  },
  // Sections
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 2,
    marginBottom: 6,
  },

  // Entries (Education, Experience)
  entry: {
    marginBottom: 12,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  entryTitle: {
    fontWeight: "bold",
  },
  entrySubtitle: {
    fontStyle: "italic",
  },
  entryDate: {
    textAlign: "right",
  },
  // Bullet points
  bulletList: {
    marginLeft: 10,
    marginTop: 2,
  },
  bulletItem: {
    flexDirection: "row",
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  // Skills (inline)
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    marginRight: 8,
  },
});