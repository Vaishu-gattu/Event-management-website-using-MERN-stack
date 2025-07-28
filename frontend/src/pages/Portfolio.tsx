import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";
import corporateImage from "@/assets/corporate-event.jpg";
import babyShowerImage from "@/assets/baby-shower.jpg";
import birthdayImage from "@/assets/birthday-party.jpg";
import customDecorImage from "@/assets/custom-decor.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Elegant Garden Wedding",
    category: "Wedding",
    image: heroImage,
    description: "A romantic outdoor ceremony featuring lush florals and candlelit reception under the stars.",
    location: "Napa Valley, CA"
  },
  {
    id: 2,
    title: "Corporate Gala Night",
    category: "Corporate",
    image: corporateImage,
    description: "Sophisticated networking event with modern design elements and premium branding.",
    location: "San Francisco, CA"
  },
  {
    id: 3,
    title: "Dreamy Baby Shower",
    category: "Baby Shower",
    image: babyShowerImage,
    description: "Soft pastels and delicate details created the perfect celebration for expecting parents.",
    location: "Palo Alto, CA"
  },
  {
    id: 4,
    title: "Milestone Birthday Celebration",
    category: "Birthday",
    image: birthdayImage,
    description: "A glamorous 50th birthday party with elegant décor and personalized touches.",
    location: "Sausalito, CA"
  },
  {
    id: 5,
    title: "Custom Interior Styling",
    category: "Styling",
    image: customDecorImage,
    description: "Transforming spaces with bespoke décor and thoughtful design elements.",
    location: "Oakland, CA"
  },
  {
    id: 6,
    title: "Intimate Anniversary Dinner",
    category: "Anniversary",
    image: heroImage,
    description: "Private dining experience with romantic ambiance and personalized details.",
    location: "Carmel, CA"
  }
];

const categories = ["All", "Wedding", "Corporate", "Baby Shower", "Birthday", "Styling", "Anniversary"];

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Discover the stories we've helped tell through beautiful design and 
              thoughtful execution. Each event is a unique expression of our client's 
              vision brought to life.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-6 py-2 text-sm font-inter cursor-pointer hover:bg-primary-soft transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge 
                    className="absolute top-4 left-4 bg-background/90 text-accent border-accent/20"
                  >
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-accent mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-sm text-accent font-inter">
                    📍 {item.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-6">
            Ready to Create Your Story?
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            Let's work together to design an event that perfectly captures your vision 
            and creates memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-hero text-primary-foreground hover:shadow-elegant transform hover:-translate-y-0.5 font-playfair h-14 rounded-lg px-10 text-base"
            >
              Start Planning
            </a>
            <a 
              href="mailto:hello@pearlhaus.com" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground border border-accent/20 hover:bg-accent hover:text-accent-foreground shadow-soft hover:shadow-elegant h-14 rounded-lg px-10 text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;