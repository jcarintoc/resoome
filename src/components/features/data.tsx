import { lazy } from "react";
const Contact = lazy(() => import("./contact"));
const Education = lazy(() => import("./education"));
const Experience = lazy(() => import("./experience"));
const Extra = lazy(() => import("./extra"));
const LeadershipAndActivities = lazy(() => import("./leadership-and-activities"));
const Skills = lazy(() => import("./skills"));
const Certification = lazy(() => import("./certification"));
import { type ReactNode } from "react";
import {
  CircleUserRound,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Wrench,
  BadgeCheck,
  Sparkle,
  type LucideIcon,
} from "lucide-react";
import type { tabs } from "@/@types/common";

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

export const tabsData: TabsProps[] = [
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
