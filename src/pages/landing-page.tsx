import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      <BubbleBackground
        interactive={true}
        className="absolute inset-0 flex items-center justify-center"
        
      />

      <div className="relative z-10  max-w-5xl mx-auto p-4">
        <h1 className="text-4xl font-bold">Landing Page</h1>
      </div>
    </div>
  );
};

export default LandingPage;
