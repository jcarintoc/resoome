import { Button } from "./button";
import { useTemplate } from "@/hooks/use-template";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/animate-ui/components/radix/alert-dialog";
import { TEMPLATES } from "@/constants/templates";

const TemplateButton = () => {
  const { template, setTemplate } = useTemplate();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary" className="hover:border-border">
          Templates
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-h-[95dvh] sm:max-w-5xl p-4">
        <AlertDialogHeader className="gap-0">
          <AlertDialogTitle>Choose Template</AlertDialogTitle>
          <AlertDialogDescription>
            Select a template for your resume.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex flex-col sm:flex-row gap-4 space-y-4 p-2 overflow-y-auto max-h-[75dvh]">
          {TEMPLATES.map((t) => (
            <div
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`flex flex-col gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                template === t.id
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-transparent bg-card"
              }`}
            >
              {/* Image Preview */}
              <div className="w-full overflow-hidden border border-border shadow-sm">
                <img
                  src={t.image}
                  alt={`${t.name} preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Text Info */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-foreground">{t.name}</h3>
                  {template === t.id && (
                    <span className="text-xs font-medium text-white bg-black px-2 py-1 rounded-full">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TemplateButton;
