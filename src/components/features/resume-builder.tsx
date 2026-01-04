import { useState } from "react";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Extra from "./extra";
import LeadershipAndActivities from "./leadership-and-activities";
import Skills from "./skills";
import Certification from "./certification";
import { type ReactNode } from "react";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FileText, Upload } from "lucide-react";
import Preview from "./preview";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useResumePersistence } from "@/hooks/use-resume-persistence";

type tabs =
  | "Contact"
  | "Education"
  | "Experience"
  | "Extra"
  | "Leadership & Activities"
  | "Skills"
  | "Certification";

interface TabsProps {
  label: tabs;
  component: ReactNode;
}

const tabs: TabsProps[] = [
  {
    label: "Contact",
    component: <Contact />,
  },
  {
    label: "Education",
    component: <Education />,
  },
  {
    label: "Experience",
    component: <Experience />,
  },
  {
    label: "Extra",
    component: <Extra />,
  },
  {
    label: "Leadership & Activities",
    component: <LeadershipAndActivities />,
  },
  {
    label: "Skills",
    component: <Skills />,
  },
  {
    label: "Certification",
    component: <Certification />,
  },
];

// Define the comprehensive schema for the resume
const resumeSchema = z.object({
  contact: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
  education: z.array(z.any()),
  experience: z.array(z.any()),
  extra: z.array(z.any()),
  leadership: z.array(z.any()),
  skills: z.array(z.any()),
  certification: z.array(z.any()),
});

export type ResumeValues = z.infer<typeof resumeSchema>;

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState<tabs>("Contact");

  // 1. Initialize Form
  const form = useForm<ResumeValues>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      contact: {
        name: "",
        email: "",
        phone: "",
      },
      education: [],
      experience: [],
      extra: [],
      leadership: [],
      skills: [],
      certification: [],
    },
    mode: "onChange",
  });

  // Initialize persistence hook
  useResumePersistence(form);

  return (
    <Form {...form}>
      <form onSubmit={(e) => e.preventDefault()} className="relative space-y-4">
        {/* Imports */}
        <div className="flex justify-end">
          <Button variant={"outline"}>
            <Upload /> Import CSV
          </Button>
        </div>

        <main className="flex flex-col md:flex-row gap-4 w-full relative">
          {/* Tabs */}
          <section className="md:sticky md:top-4 h-fit w-full md:w-72">
            <Card className="gap-2 p-2 flex-row md:flex-col overflow-x-auto scrollbar-thin">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.label}
                  initial="initial"
                  animate={activeTab === tab.label ? "active" : "initial"}
                  whileHover={activeTab === tab.label ? "active" : "hover"}
                  onClick={() => setActiveTab(tab.label)}
                  className={`${
                    activeTab === tab.label
                      ? "text-background hover:opacity-90 font-semibold"
                      : "bg-primary/10 font-medium hover:bg-primary/15"
                  } relative w-full py-2 px-2 rounded-lg`}
                >
                  <motion.span
                    variants={{
                      initial: {
                        opacity: 0,
                        width: 0,
                        height: "100%",
                        borderRadius: "10px",
                      },
                      hover: { opacity: 1, width: 16, height: "100%" },
                      active: {
                        width: "100%",
                        height: "100%",
                        opacity: 1,
                        borderRadius: "10px",
                      },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-0 left-0 h-full bg-primary rounded-lg"
                  />
                  <span className="relative z-10 text-nowrap">{tab.label}</span>
                </motion.button>
              ))}
            </Card>
          </section>

          {/* Main Content */}
          <section className="w-full space-y-4">
            {tabs.map(
              (tab) =>
                tab.label === activeTab && (
                  <motion.div
                    key={tab.label}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={
                      tab.label === activeTab
                        ? {
                            scale: 1,
                            opacity: 1,
                            transition: { duration: 0.3 },
                          }
                        : {
                            scale: 0.95,
                            opacity: 0,
                            transition: { duration: 0 },
                          }
                    }
                  >
                    <Card className="p-4 gap-0">{tab.component}</Card>
                  </motion.div>
                )
            )}

            {/* Export and View PDF */}
            <div className="flex justify-end gap-2">
              <Preview />
              <Button size={"lg"} className="bg-red-600 hover:bg-red-700">
                <FileText /> Generate PDF
              </Button>
            </div>
          </section>
        </main>
      </form>
    </Form>
  );
};

export default ResumeBuilder;
