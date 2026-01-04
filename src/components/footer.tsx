import {
  PreviewLinkCard,
  PreviewLinkCardTrigger,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
} from "@/components/animate-ui/components/radix/preview-link-card";
import { Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const handleLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <footer className="fixed z-0 bottom-0 left-0 w-full border-t bg-background">
      <div className="max-w-5xl mx-auto p-2 sm:p-4 flex items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
          <h1>Developed by</h1>
          <PreviewLinkCard href="https://jca-dev.vercel.app">
            <PreviewLinkCardTrigger className="font-bold">
              JCA
            </PreviewLinkCardTrigger>
            <PreviewLinkCardContent>
              <PreviewLinkCardImage alt="Preview link card content" />
            </PreviewLinkCardContent>
          </PreviewLinkCard>
        </div>

        <div className="w-0.5 h-4 sm:h-6 bg-primary/50 ml-2" />

        <div>
          <Button
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/jose-carlo-arintoc-68020b350"
              )
            }
            size="icon"
            variant="ghost"
          >
            <Linkedin />
          </Button>
          <Button
            onClick={() => handleLinkClick("https://github.com/jcarintoc")}
            size="icon"
            variant="ghost"
          >
            <Github />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
