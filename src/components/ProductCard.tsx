import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  qualities: string[];
  price: string;
}

export const ProductCard = ({ image, name, description, qualities, price }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden card-shadow hover:scale-105 smooth-transition animate-fade-in">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {qualities.map((quality, index) => (
            <span 
              key={index}
              className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
            >
              {quality}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button size="sm" variant="hero">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
