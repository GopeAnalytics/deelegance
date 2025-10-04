import { LucideIcon } from "lucide-react";

interface ValueItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ValueItem = ({ icon: Icon, title, description }: ValueItemProps) => {
  return (
    <div className="flex flex-col items-center text-center animate-scale-in">
      <div className="w-16 h-16 rounded-full accent-gradient flex items-center justify-center mb-4 elegant-shadow">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};
