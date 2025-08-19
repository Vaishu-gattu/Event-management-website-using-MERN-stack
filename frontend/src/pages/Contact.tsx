"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { format } from "date-fns";
import axios from "axios";

import { CalendarIcon, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    guestCount: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        eventDate: date,
      };
      const response = await axios.post("http://localhost:5000/api/bookings", payload);
      alert("Inquiry submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit inquiry.");
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-warm">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-accent mb-6">
            Let's Create Magic Together
          </h1>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Get in touch with us to discuss your upcoming event and discover how we can make it extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-accent">
                  Tell Us About Your Event
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your last name" />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXXXXXXX" />
                  </div>
                </div>

                {/* Event Type and Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select onValueChange={(val) => handleSelectChange("eventType", val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="baby-shower">Baby Shower</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="custom">Custom Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location">Event Location</Label>
                  <Input id="location" value={formData.location} onChange={handleChange} placeholder="City, State or Venue Name" />
                </div>

                {/* Guest Count & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guestCount">Expected Guest Count</Label>
                    <Select onValueChange={(val) => handleSelectChange("guestCount", val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guest count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-25">10–25 guests</SelectItem>
                        <SelectItem value="25-50">25–50 guests</SelectItem>
                        <SelectItem value="50-100">50–100 guests</SelectItem>
                        <SelectItem value="100-200">100–200 guests</SelectItem>
                        <SelectItem value="200+">200+ guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(val) => handleSelectChange("budget", val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-90k">Under ₹90,000</SelectItem>
                        <SelectItem value="90k-2L">₹90,000 - ₹2,00,000</SelectItem>
                        <SelectItem value="2L-5L">₹2,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="5L-10L">₹5,00,000 - ₹10,00,000</SelectItem>
                        <SelectItem value="10L+">₹10,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Tell Us More About Your Vision</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your ideas, inspiration, or any specific requirements..."
                    className="min-h-32"
                  />
                </div>

                <Button onClick={handleSubmit} variant="elegant" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-accent mb-6">Get In Touch</h3>
                <div className="space-y-4 font-inter">
                  <div className="flex items-center space-x-3"><Mail className="w-5 h-5 text-accent" /><span>pearlhaus.events@gmail.com</span></div>
                  <div className="flex items-center space-x-3"><Phone className="w-5 h-5 text-accent" /><span>+91 9989211777</span></div>
                  <div className="flex items-center space-x-3"><MapPin className="w-5 h-5 text-accent" /><span>Hyderabad, India</span></div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-accent mb-6">Office Hours</h3>
                <div className="space-y-3 font-inter">
                  <div className="flex items-center space-x-3"><Clock className="w-5 h-5 text-accent" /><div><p>Mon–Fri</p><p className="text-muted-foreground">9:00 AM - 6:00 PM</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="w-5 h-5 text-accent" /><div><p>Saturday</p><p className="text-muted-foreground">10:00 AM - 4:00 PM</p></div></div>
                  <div className="flex items-center space-x-3"><Clock className="w-5 h-5 text-accent" /><div><p>Sunday</p><p className="text-muted-foreground">By Appointment</p></div></div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-elegant">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-playfair font-semibold text-accent mb-4">Follow Our Journey</h3>
                <p className="font-inter text-muted-foreground mb-4">
                  Stay inspired with behind-the-scenes content and recent events.
                </p>
                <Button variant="luxury" size="lg" className="w-full">@PearlHausEvents</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
