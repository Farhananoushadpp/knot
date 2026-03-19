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
        title="Get In Touch"
        subtitle="Connect with our expert team for all your marine equipment needs"
        description="We're here to help you find the right solutions for your maritime requirements. Reach out to us for inquiries, quotes, or technical support."
        icon={Mail}
        badges={[
          { text: "Quick Response" },
          { text: "Expert Support" },
          { text: "24/7 Availability" },
        ]}
        backgroundImage="/contact.jpg"
      />

      <Contact />
    </div>
  );
};

export default ContactPage;
