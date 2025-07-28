import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Vijay Thala",
    event: "Wedding",
    rating: 5,
    content: "Pearl Haus transformed our wedding into a fairytale. Every detail was perfect, from the floral arrangements to the lighting. Our guests are still talking about how beautiful everything was.",
    location: "Kerala"
  },
  {
    name: "Hemanth Reddy",
    event: "Corporate Gala",
    rating: 5,
    content: "The team at Pearl Haus delivered an exceptional corporate event. Professional, elegant, and perfectly executed. Our clients were thoroughly impressed.",
    location: "Hyderabad"
  },
  {
    name: "Vaishnavi Gattu",
    event: "Baby Shower",
    rating: 5,
    content: "They created the most beautiful baby shower celebration. The attention to detail and personal touches made it truly special. Highly recommend!",
    location: "Maharashtra"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about 
            their Pearl Haus experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-playfair font-semibold text-accent">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-inter">
                    {testimonial.event} • {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;