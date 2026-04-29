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

      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader className="gap-0">
          <AlertDialogTitle>Choose Template</AlertDialogTitle>
          <AlertDialogDescription>
            Select a template for your resume.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-3 py-4">
          {TEMPLATES.map((t) => (
            <div
              key={t.id}
              onClick={() => setTemplate(t.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                template === t.id
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                {template === t.id && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    Selected
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {t.description}
              </p>
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
