import { useState, Activity } from "react";
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
import { Upload } from "lucide-react";

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

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState<tabs>("Contact");

  return (
    <div className="space-y-4">
      {/* Imports */}
      <div className="flex justify-end">
        <Button variant={"outline"}>
          <Upload /> Import CSV
        </Button>
      </div>

      <main className="flex gap-4 w-full relative">
        {/* Tabs */}
        <section className="sticky top-4 h-fit w-full lg:w-72">
          <Card className="gap-2 p-2">
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
                } relative w-full py-2 overflow-hidden rounded-lg`}
              >
                <motion.span
                  variants={{
                    initial: {
                      opacity: 0,
                      width: 0,
                      height: "100%",
                      borderRadius: "100px",
                    },
                    hover: { opacity: 1, width: 16, height: "100%" },
                    active: {
                      width: "100%",
                      height: "100%",
                      opacity: 1,
                      borderRadius: "0",
                    },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute top-0 left-0 h-full bg-primary"
                />
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </Card>
        </section>

        {/* Main Content */}
        <section className="w-full">
          {tabs.map((tab) => (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={
                tab.label === activeTab
                  ? { scale: 1, opacity: 1, transition: { duration: 0.3 } }
                  : { scale: 0.95, opacity: 0, transition: { duration: 0 } }
              }
            >
              <Activity mode={tab.label === activeTab ? "visible" : "hidden"}>
                <Card className="p-4 gap-0">{tab.component}</Card>
              </Activity>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ResumeBuilder;
