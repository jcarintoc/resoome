import { Spotlight } from "@/components/ui/spotlight";
import Background from "@/components/features/landing-page/background";
import logo from "@/assets/resoome-logo.png";
import { Highlighter } from "@/components/ui/highlighter";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Navbar from "@/components/navbar";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/build");
  };
  return (
    <div className="relative bg-background/96 antialiased overflow-hidden">
      <Background />
      <div className="relative sm:flex h-dvh max-w-5xl mx-auto">
        <Navbar />

        <Spotlight
          className="-top-1/1 translate-y-1/2 left-0 md:translate-y-0 md:-top-20 md:left-1/2 md:-translate-x-1/4"
          fill="var(--primary)"
        />

        <div className="relative z-10 flex flex-col items-center justify-center mx-auto w-full max-w-7xl p-4 pt-32 md:pt-0">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center overflow-hidden bg-white border border-primary/25 w-fit rounded-full p-4"
          >
            <img src={logo} alt="Resoome" className="w-16 h-16 mx-auto" />
          </motion.div>

          <br />

          {/* Title */}
          <TextAnimate
            animation="blurIn"
            by="character"
            as="h1"
            once
            className="bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center  font-bold text-primary text-3xl sm:text-4xl md:text-7xl"
          >
            Resoome
          </TextAnimate>

          {/* Subtitle */}
          <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <TextAnimate
              animation="blurIn"
              by="character"
              as="h2"
              once
              className="bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-primary text-xl sm:text-4xl md:text-7xl"
            >
              Your Resume.
            </TextAnimate>

            <TextAnimate
              animation="blurIn"
              by="character"
              as="h2"
              once
              className="bg-opacity-50 bg-linear-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-primary text-xl sm:text-4xl md:text-7xl"
            >
              Perfected.
            </TextAnimate>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-4 max-w-lg text-center text-base md:text-lg font-normal text-primary/90"
          >
            Stop struggling with formatting. Create a polished, professional
            resume in minutes.{" "}
            <Highlighter
              delay={600}
              animationDuration={1000}
              action="underline"
              color="var(--primary)"
            >
              Zero sign-ups, zero stress.
            </Highlighter>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
          >
            <InteractiveHoverButton
              onClick={handleGetStarted}
              className="mt-12"
            >
              Get Started
            </InteractiveHoverButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
