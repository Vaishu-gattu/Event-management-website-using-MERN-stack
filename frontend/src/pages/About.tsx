import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import founderImage from "@/assets/founder-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Born from a passion for creating magical moments, Pearl Haus transforms 
              ordinary occasions into extraordinary memories through thoughtful design 
              and impeccable attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-6">
                Meet Our Founder
              </h2>
              <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
                <p>
                  Pearl Haus was founded by Isabella Martinez, a visionary event designer 
                  with over a decade of experience in luxury hospitality and event management. 
                  Her journey began in the world of high-end hotels, where she discovered 
                  her passion for creating unforgettable experiences.
                </p>
                <p>
                  Isabella's design philosophy centers on the belief that every event tells 
                  a story. She works closely with each client to understand their vision, 
                  weaving personal touches and meaningful details into elegant designs that 
                  reflect their unique style and personality.
                </p>
                <p>
                  With a background in interior design and a keen eye for contemporary trends, 
                  Isabella brings a sophisticated aesthetic to every project, ensuring that 
                  each event is both timeless and current.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={founderImage}
                  alt="Isabella Martinez, Founder of Pearl Haus"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-elegant"
                />
                <div className="absolute -bottom-4 -left-4 bg-gradient-hero p-6 rounded-lg shadow-elegant">
                  <p className="font-playfair font-semibold text-primary-foreground">
                    "Every event is a canvas for creating beautiful memories"
                  </p>
                  <p className="text-primary-foreground/80 font-inter mt-2">
                    - Isabella Martinez
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-accent mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              The principles that guide everything we do at Pearl Haus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-playfair font-bold text-primary-foreground">E</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-accent mb-4">
                  Elegance
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  We believe in the power of sophisticated design and refined aesthetics 
                  to create truly memorable experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-playfair font-bold text-primary-foreground">P</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-accent mb-4">
                  Personalization
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Every event is unique, and we tailor our approach to reflect your 
                  individual style, story, and vision.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-playfair font-bold text-primary-foreground">E</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-accent mb-4">
                  Excellence
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  We pursue perfection in every detail, ensuring flawless execution 
                  and exceptional results for every client.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;