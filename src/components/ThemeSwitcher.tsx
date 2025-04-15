
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export function ThemeSwitcher() {
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="h-10 w-10 rounded-full border-none bg-background/50 backdrop-blur-sm hover:bg-accent"
      disabled
    >
      <Moon size={18} className="text-foreground" />
      <span className="sr-only">Dark Mode</span>
    </Button>
  );
}
