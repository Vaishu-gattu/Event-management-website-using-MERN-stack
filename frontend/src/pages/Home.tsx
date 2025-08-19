import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* Dandiya Nights Advertisement Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <img
            src="/src/assets/dandiya night event.png"
            alt="The Grand Dandiya Extravaganza"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Book Tickets Button */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-6 flex justify-end items-center">
          <p className="text-lg font-inter text-accent mr-4">
            Grab your passes now and get an exclusive early bird discount!
          </p>
          <a
            href="https://www.district.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-hero text-primary-foreground hover:shadow-elegant transform hover:-translate-y-0.5 font-playfair h-14 rounded-lg px-10 text-base"
          >
            Book Tickets on
            <img src="/src/assets/district-logo.png" alt="District by Zomato" className="h-6 ml-2" />
          </a>
        </div>
      </section>

      <ServicesPreview />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Home;
