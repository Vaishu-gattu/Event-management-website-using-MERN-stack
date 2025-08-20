import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-accent mb-6 leading-tight">
            Where Stories and
            <span className="block text-secondary">Style Intertwine</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-inter mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating unforgettable moments through luxury event design and styling. 
            From intimate gatherings to grand celebrations, we bring your vision to life 
            with elegance and sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="elegant" size="xl">
              <Link to="/contact">Book Your Event</Link>
            </Button>
            <Button asChild variant="luxury" size="xl">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          {/* Scroll Indicator - Removed as per request */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
