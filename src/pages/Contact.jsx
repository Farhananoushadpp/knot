/**
 * Knot & Sail - Contact Page
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
        description="At Ocean Infinity, we're here to help you with all your marine service needs. Reach out to us for inquiries, quotes, and expert support for your maritime requirements."
        backgroundImage="/knot and sail images/Asset 35.webp"
      />

      <Contact />
    </div>
  );
};

export default ContactPage;
