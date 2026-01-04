import Navbar from "@/components/navbar";
import ResumeBuilder from "@/components/features/resume-builder";
import { StripeBgGuides } from "@/components/ui/stripe-bg-guides";
import Footer from "./components/footer";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <StripeBgGuides
          columnCount={12}
          animated={true}
          animationDuration={8}
          glowColor="hsl(var(--primary))"
          randomize={true}
          randomInterval={3000}
          contained={true}
          className="bg-gray-50 dark:bg-background"
        />

        <div className="relative z-10 max-w-5xl mx-auto p-2 space-y-8 sm:space-y-20">
          <Navbar />
          <ResumeBuilder />
          <div className="block sm:hidden">
            <br />
            <br />
          </div>
        </div>

        <Footer />
      </div>

      {/* Toast / Sonner */}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
