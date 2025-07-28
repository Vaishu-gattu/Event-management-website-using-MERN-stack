import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Building, Baby, Gift, Palette } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Creating dream weddings with elegant design and flawless execution.",
    image: "bg-gradient-to-br from-primary-soft to-primary"
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional events that leave lasting impressions on your clients.",
    image: "bg-gradient-to-br from-secondary/20 to-accent/20"
  },
  {
    icon: Baby,
    title: "Baby Showers",
    description: "Celebrating new beginnings with beautiful, memorable celebrations.",
    image: "bg-gradient-to-br from-primary to-primary-soft"
  },
  {
    icon: Gift,
    title: "Special Occasions",
    description: "Birthdays, anniversaries, and milestones designed with love.",
    image: "bg-gradient-to-br from-accent/20 to-secondary/20"
  },
  {
    icon: Palette,
    title: "Custom Styling",
    description: "Bespoke decor and styling tailored to your unique vision.",
    image: "bg-gradient-to-br from-primary-soft to-primary"
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we specialize in creating 
            unforgettable experiences tailored to your unique style and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-lg ${service.image} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-accent mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild variant="luxury" size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;