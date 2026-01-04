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
import {
  CircleUserRound,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Wrench,
  BadgeCheck,
  Sparkle,
  SkipForward,
  SkipBack,
  StepForward,
  type LucideIcon,
} from "lucide-react";
import Preview from "./preview";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useResumePersistence } from "@/hooks/use-resume-persistence";
import ButtonGenerate from "../ui/button-custom-01";
import Import from "./import";

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
  nav: {
    skip: string | null;
    next: string | null;
    prev: string | null;
  };
  icon: LucideIcon;
}

const tabs: TabsProps[] = [
  {
    label: "Contact",
    component: <Contact />,
    nav: {
      skip: null,
      next: "Education",
      prev: null,
    },
    icon: CircleUserRound,
  },
  {
    label: "Education",
    component: <Education />,
    nav: {
      skip: null,
      next: "Experience",
      prev: "Contact",
    },
    icon: GraduationCap,
  },
  {
    label: "Experience",
    component: <Experience />,
    nav: {
      skip: "Leadership & Activities",
      next: "Leadership & Activities",
      prev: "Education",
    },
    icon: BriefcaseBusiness,
  },
  {
    label: "Leadership & Activities",
    component: <LeadershipAndActivities />,
    nav: {
      skip: "Skills",
      next: "Skills",
      prev: "Experience",
    },
    icon: Award,
  },
  {
    label: "Skills",
    component: <Skills />,
    nav: {
      skip: null,
      next: "Certification",
      prev: "Leadership & Activities",
    },
    icon: Wrench,
  },
  {
    label: "Certification",
    component: <Certification />,
    nav: {
      skip: "Extra",
      next: "Extra",
      prev: "Skills",
    },
    icon: BadgeCheck,
  },
  {
    label: "Extra",
    component: <Extra />,
    nav: {
      skip: null,
      next: null,
      prev: "Experience",
    },
    icon: Sparkle,
  },
];

// Define the comprehensive schema for the resume
const resumeSchema = z.object({
  contact: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    country: z.string(),
    city: z.string(),
    postal: z.string(),
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
        country: "",
        city: "",
        postal: "",
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
        <Import />

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
                    <Card className="relative p-1 gap-0 bg-primary dark:bg-primary-foreground">
                      {/* Label */}
                      <div className="flex items-center gap-1.5 text-white py-1 px-2 mb-1 font-medium">
                        <tab.icon className="size-4" /> {tab.label}
                      </div>
                      <div className="flex flex-col gap-4 p-4 bg-background rounded-lg">
                        {/* Component */}
                        {tab.component}

                        {/* Nav Buttons */}
                        <div className="flex justify-end gap-2 [&>button]:text-xs">
                          {tab.nav.skip && (
                            <Button
                              onClick={() => setActiveTab(tab.nav.skip as tabs)}
                              size={"sm"}
                              variant={"ghost"}
                            >
                              <SkipForward className="size-3" />
                              Skip
                            </Button>
                          )}
                          {tab.nav.prev && (
                            <Button
                              onClick={() => setActiveTab(tab.nav.prev as tabs)}
                              size={"sm"}
                              variant={"secondary"}
                              className="hover:border-primary/25"
                            >
                              <SkipBack className="size-3" />
                              Prev
                            </Button>
                          )}
                          {tab.nav.next && (
                            <Button
                              onClick={() => setActiveTab(tab.nav.next as tabs)}
                              size={"sm"}
                            >
                              <StepForward className="size-3" />
                              Next
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
            )}

            {/* Export and View PDF */}
            <div className="flex justify-end gap-2">
              <Preview />
              <ButtonGenerate />
            </div>
          </section>
        </main>
      </form>
    </Form>
  );
};

export default ResumeBuilder;
