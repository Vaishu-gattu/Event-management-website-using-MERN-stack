import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Building, Baby, Gift, Palette, CheckCircle } from "lucide-react";
import corporateImage from "@/assets/corporate-event.jpg";
import weddingImage from "@/assets/wedding.jpg";
import babyShowerImage from "@/assets/baby-shower.jpg";
import birthdayImage from "@/assets/birthday-party.jpg";
import customDecorImage from "@/assets/custom-decor.jpg";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning & Design",
    description: "From intimate ceremonies to grand celebrations, we create wedding experiences that reflect your unique love story.",
    image: weddingImage, // Using corporate image as placeholder for wedding
    features: [
      "Full-service wedding planning",
      "Custom floral design",
      "Venue styling and decoration",
      "Timeline coordination",
      "Vendor management"
    ],
    pricing: "Starting from ₹30L"
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional events that elevate your brand and create lasting impressions on clients and partners.",
    image: corporateImage,
    features: [
      "Product launches",
      "Corporate galas",
      "Conference styling",
      "Team building events",
      "Brand activation"
    ],
    pricing: "Starting from ₹10L"
  },
  {
    icon: Baby,
    title: "Baby Showers",
    description: "Celebrating new beginnings with beautiful, memorable celebrations that honor this special milestone.",
    image: babyShowerImage,
    features: [
      "Themed decorations",
      "Custom dessert tables",
      "Photo booth setup",
      "Game coordination",
      "Keepsake creation"
    ],
    pricing: "Starting from ₹5L"
  },
  {
    icon: Gift,
    title: "Birthday & Special Occasions",
    description: "Milestone birthdays, anniversaries, and personal celebrations designed with love and attention to detail.",
    image: birthdayImage,
    features: [
      "Custom theme development",
      "Entertainment coordination",
      "Catering arrangements",
      "Photography setup",
      "Party favors"
    ],
    pricing: "Starting from ₹3L"
  },
  {
    icon: Palette,
    title: "Custom Styling & Decor",
    description: "Bespoke decor and styling services tailored to your unique vision and space requirements.",
    image: customDecorImage,
    features: [
      "Interior event styling",
      "Floral arrangements",
      "Lighting design",
      "Furniture rental",
      "Custom installations"
    ],
    pricing: "Starting from ₹2L"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer comprehensive event planning and 
              styling services that transform your vision into an unforgettable reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-cols-2' : ''}`}>
                    {/* Image */}
                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <CardContent className={`p-8 lg:p-12 ${!isEven ? 'lg:order-1' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-accent">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h3 className="font-playfair font-semibold text-accent mb-4">
                          What's Included:
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-muted-foreground font-inter">
                              <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-playfair font-semibold text-accent">
                          {service.pricing}
                        </p>
                        <Button asChild variant="elegant">
                          <Link to="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something beautiful together. 
            Contact us for a consultation and personalized quote.
          </p>
          <Button asChild variant="elegant" size="xl">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;