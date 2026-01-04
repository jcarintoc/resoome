import Navbar from "@/components/navbar";
import ResumeBuilder from "@/components/features/resume-builder";

export function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-2 space-y-20">
        <Navbar />
        <ResumeBuilder />
      </div>
    </div>
  );
}

export default App;
