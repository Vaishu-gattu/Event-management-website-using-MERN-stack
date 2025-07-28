import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-warm">
      <div className="text-center">
        <h1 className="text-6xl font-playfair font-bold mb-4 text-accent">404</h1>
        <p className="text-xl text-muted-foreground font-inter mb-8">Oops! This page seems to have wandered off</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-hero text-primary-foreground hover:shadow-elegant transform hover:-translate-y-0.5 font-playfair h-11 rounded-md px-8"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
