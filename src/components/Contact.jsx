import React from 'react';
// Assuming you have shadcn/ui Accordion components installed and imported
// If not, you'll need to implement a basic toggle or use another library.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust path if necessary

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white min-h-screen">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Contact Us</h1>

      {/* Our Location Section */}
      <div className="w-full max-w-4xl mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Location</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Map Embed */}
          <div className="flex-1 min-h-[300px] md:min-h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace the src with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.755452281273!2d-75.6888494!3d45.419077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a41857907%3A0xc3b9f30b912f293b!2sUniversity%20of%20Ottawa%20Faculty%20of%20Engineering!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map of University of Ottawa Faculty of Engineering"
            ></iframe>
          </div>

          {/* Contact Details */}
          <div className="flex-1 text-gray-700">
            <h3 className="text-xl font-medium mb-2">Site - Faculty of Engineering</h3>
            <p className="mb-1">800 King Edward Ave, Ottawa, ON K1N 6N5</p>
            {/* You might want to link the phone number, maybe add a small phone icon */}
            <p className="mb-1"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="mb-4"><strong>Opening Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM</p>
            {/* Add directions link or other buttons if needed */}
            <a href="https://maps.app.goo.gl/your-directions-link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are your opening hours?</AccordionTrigger>
            <AccordionContent>
              We are open Monday to Friday, from 9:00 AM to 5:00 PM.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you accept walk-in patients?</AccordionTrigger>
            <AccordionContent>
              Yes, we do accept walk-in patients, but appointments are highly recommended to ensure prompt service.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What insurance plans do you accept?</AccordionTrigger>
            <AccordionContent>
              Please contact us directly to inquire about specific insurance plans. We work with a variety of providers.
            </AccordionContent>
          </AccordionItem>
          {/* Add more FAQ items as needed */}
        </Accordion>
      </div>
    </div>
  );
};

export default Contact;