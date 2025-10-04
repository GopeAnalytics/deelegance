import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ValueItem } from "@/components/ValueItem";
import { Shield, Truck, HeartHandshake, Lock, Sparkles, Package, ShoppingBag, MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

import heroImage from "@/assets/hero-bg.jpg";
import productShoesMen from "@/assets/product-shoes-men.jpg";
import productShoesWomen from "@/assets/product-shoes-women.jpg";
import productBagMessenger from "@/assets/product-bag-messenger.jpg";
import productBagTote from "@/assets/product-bag-tote.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build email body with form details
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:olwenyjohn87@gmail.com?subject=${encodeURIComponent('Product Inquiry')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your email client will open with your message.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappNumber = "+254703405769"; // Replace with actual number

  return (
    <div className="min-h-screen bg-background">
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center elegant-shadow smooth-transition hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Step Out in Style with <span className="text-accent">Deelegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Where Quality Meets Elegance
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Discover premium shoes and bags crafted for confidence, comfort, and class.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => scrollToSection('products')}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
            <Button 
              size="lg" 
              variant="wholesale"
              onClick={() => scrollToSection('wholesale')}
            >
              <Package className="mr-2 h-5 w-5" />
              Buy in Bulk / Wholesale
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 animate-fade-in-up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Deelegance</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Deelegance is a trusted SME dedicated to providing high-quality, stylish, and affordable 
              footwear and bags for both men and women. We handpick every design to ensure it meets 
              our standards of durability, comfort, and elegance. Your satisfaction is our guarantee.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg card-shadow">
                <div className="text-accent text-3xl font-bold mb-2">1,00+</div>
                <div className="text-foreground font-semibold">Trusted Customers</div>
              </div>
              <div className="bg-card p-6 rounded-lg card-shadow">
                <div className="text-accent text-3xl font-bold mb-2">Fast</div>
                <div className="text-foreground font-semibold">Delivery</div>
              </div>
              <div className="bg-card p-6 rounded-lg card-shadow">
                <div className="text-accent text-3xl font-bold mb-2">100%</div>
                <div className="text-foreground font-semibold">Secure Payments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Handpicked selections of our finest shoes and bags</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              image={productShoesMen}
              name="Classic Oxford Shoes"
              description="Timeless elegance for the modern gentleman"
              qualities={["Genuine Leather", "Comfort Fit", "Handcrafted"]}
              price="Ksh.1500"
            />
            <ProductCard 
              image={productShoesWomen}
              name="Elegant Heels"
              description="Sophistication meets comfort"
              qualities={["Premium Quality", "All-Day Comfort", "Designer Style"]}
              price="Ksh.2000"
            />
            <ProductCard 
              image={productBagMessenger}
              name="Leather Messenger Bag"
              description="Professional style for work and travel"
              qualities={["Water-Resistant", "Multiple Pockets", "Durable"]}
              price="Ksh.1000"
            />
            <ProductCard 
              image={productBagTote}
              name="Designer Tote"
              description="Spacious elegance for everyday use"
              qualities={["Genuine Leather", "Spacious", "Gold Hardware"]}
              price="Ksh.800"
            />
          </div>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking to Stock or Buy in Bulk?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We offer attractive discounted rates for group, corporate, and reseller purchases. 
            Grow your business with our premium products.
          </p>
          <Button 
            size="lg" 
            variant="wholesale"
            onClick={() => scrollToSection('contact')}
          >
            Get Wholesale Quote
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">Real experiences from real customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard 
              name="Sarah Doe"
              initial="SD"
              testimonial="I love my Deelegance bag — great quality and fast delivery! It's become my everyday essential."
              rating={5}
            />
            <TestimonialCard 
              name="Kelvine Inganga"
              initial="KI"
              testimonial="The Oxford shoes are incredibly comfortable and stylish. Perfect for both work and casual outings."
              rating={5}
            />
            <TestimonialCard 
              name="John Doe"
              initial="JD"
              testimonial="Outstanding service! The wholesale prices are unbeatable, and the quality is consistently excellent."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose Deelegance?</h2>
            <p className="text-lg text-muted-foreground">Excellence in every detail</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            <ValueItem 
              icon={Shield}
              title="Premium Quality"
              description="Only the finest materials and craftsmanship"
            />
            <ValueItem 
              icon={Sparkles}
              title="Elegant Designs"
              description="Trendy styles that turn heads"
            />
            <ValueItem 
              icon={Truck}
              title="Fast Delivery"
              description="Reliable shipping to your doorstep"
            />
            <ValueItem 
              icon={HeartHandshake}
              title="Customer Support"
              description="Friendly team ready to help"
            />
            <ValueItem 
              icon={Lock}
              title="Secure Payments"
              description="Shop with confidence and safety"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 accent-gradient">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Shop Now & Elevate Your Style with Deelegance
          </h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Don't miss out on our premium collection. Start your elegance journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('products')}
            >
              Shop Shoes
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('products')}
            >
              Shop Bags
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg card-shadow animate-scale-in">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <Input 
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                <Input 
                  type="tel"
                  placeholder="+254 123456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" variant="hero">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-playfair">Deelegance</h3>
              <p className="text-secondary-foreground/80 mb-4">
                Premium shoes and bags for the modern, elegant lifestyle.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-secondary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Eastleigh, Nairobi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 720 367990</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@deelegance.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full flex items-center justify-center smooth-transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full flex items-center justify-center smooth-transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full flex items-center justify-center smooth-transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2025 Deelegance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
