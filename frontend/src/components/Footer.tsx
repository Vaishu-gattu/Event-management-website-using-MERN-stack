import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="group">
              <h3 className="text-2xl font-playfair font-bold text-accent mb-2">
                Pearl Haus
              </h3>
              <p className="text-sm font-inter mb-4 opacity-80">
                Where stories and style intertwine
              </p>
            </Link>
            <p className="font-inter leading-relaxed opacity-90 mb-6">
              Creating unforgettable moments through luxury event design and styling. 
              From intimate gatherings to grand celebrations, we bring your vision to 
              life with elegance and sophistication.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:bg-accent/20 rounded-md transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-accent/20 rounded-md transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 hover:bg-accent/20 rounded-md transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2 font-inter">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4 text-accent">
              Contact
            </h4>
            <div className="space-y-3 font-inter">
              <div className="flex items-center space-x-3 opacity-80">
                <Mail size={16} />
                <span>hello@pearlhaus.com</span>
              </div>
              <div className="flex items-center space-x-3 opacity-80">
                <Phone size={16} />
                <span>+91 8076123467</span>
              </div>
              <div className="flex items-center space-x-3 opacity-80">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 mt-12 pt-8 text-center">
          <p className="font-inter opacity-80">
            © 2025 Pearl Haus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;