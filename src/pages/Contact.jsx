/**
 * ASP Global Marine Trading LLC - Contact Page
 *
 * React page component with contact form and company information
 * Technology: React functional component with JSX
 */

import { Phone, Mail, MapPin } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Contact from "../components/Contact.jsx";

const ContactPage = () => {
  return (
    <div className="container-full contact-page">
      {/* Hero Section - Using PageHero Component */}
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        icon={Phone}
        badges={[
          { icon: Mail, text: "24/7 Email Support" },
          { icon: MapPin, text: "Global Presence" },
        ]}
      />

      <Contact />
    </div>
  );
};

export default ContactPage;
