import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
    color: "#222",
  },
  // Header
  header: {
    textAlign: "left",
    marginBottom: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 11,
    color: "#888",
  },
  // Sections
  section: {
    marginBottom: 12,
  },
  sectionTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 8,
    paddingBottom: 2,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1a2e4a",
    textTransform: "uppercase",
  },

  // Entries
  entry: {
    marginBottom: 6,
  },
  boldLine: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  grayLine: {
    fontSize: 10,
    color: "#888",
    marginTop: 2,
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
    color: "#222",
  },

  // Skills
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 4,
  },
  skillLabel: {
    fontSize: 11,
    fontWeight: "bold",
  },
  skillText: {
    fontSize: 10,
  },
});
