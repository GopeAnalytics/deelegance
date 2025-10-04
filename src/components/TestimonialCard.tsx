import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  initial: string;
  testimonial: string;
  rating: number;
}

export const TestimonialCard = ({ name, initial, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg card-shadow animate-fade-in">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mr-4">
          {initial}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <div className="flex gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground italic">&ldquo;{testimonial}&rdquo;</p>
    </div>
  );
};
