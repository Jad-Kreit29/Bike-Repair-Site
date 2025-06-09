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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.2459383652213!2d-75.68890352513783!3d45.42454343608588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050684c71d83%3A0xdd3b5f2536e96216!2sTabaret%20Hall%20(TBT)!5e0!3m2!1sen!2sca!4v1749436322630!5m2!1sen!2sca"
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
          <div className="flex-1 text-gray-700 flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-2">Tabaret Hall</h3>
            <p className="textlg mb-1">550 Cumberland St, Ottawa, ON K1N 6N8</p>
            <p className="text-lg mb-1"><strong>Phone:</strong> (123) 456-7890</p>
            <p className="text-lg mb-4"><strong>Opening Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM</p>
            {/* Add directions link or other buttons if needed */}
            <a href="https://www.google.com/maps/place/Tabaret+Hall+(TBT)/@45.4245397,-75.6889035,17z/data=!3m1!4b1!4m6!3m5!1s0x4cce050684c71d83:0xdd3b5f2536e96216!8m2!3d45.4245397!4d-75.6863286!16s%2Fg%2F1tdd9gr2?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;