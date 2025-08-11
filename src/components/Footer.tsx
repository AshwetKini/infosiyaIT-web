import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          {/* Company Info */}
<div className="space-y-8">
  <div className="flex items-center space-x-2">
    <span className="text-2xl font-bold gradient-text">Infosiya</span>
  </div>
  <p className="text-gray-400 text-sm leading-relaxed">
    Professional IT solutions company delivering innovative technology services.        
  </p>
  <div className="flex space-x-4">
    <a href="https://www.facebook.com/profile.php?id=61563675386995&mibextid=ZbWKwL" className="text-gray-400 hover:text-purple-400 transition-colors">
      <Facebook className="w-5 h-5" />
    </a>
    <a href="https://x.com/infosiya23" className="text-gray-400 hover:text-purple-400 transition-colors">
      <Twitter className="w-5 h-5" />
    </a>
    <a href="https://www.linkedin.com/company/infosiya/" className="text-gray-400 hover:text-purple-400 transition-colors">
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/infosiya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-purple-400 transition-colors">
      <Instagram className="w-5 h-5" />
    </a>
  </div>
</div>


          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/website-development" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-gray-400 hover:text-purple-400 transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/pc-assembling" className="text-gray-400 hover:text-purple-400 transition-colors">
                  PC Assembling
                </Link>
              </li>
              <li>
                <Link to="/services/crm" className="text-gray-400 hover:text-purple-400 transition-colors">
                  CRM Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/custom-software-development" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">info@infosiya.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">+91 93695 04698</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-400">B-592, Chowkhandi, Tilak nagar, New Delhi, 110018</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Contact</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
              <textarea
                placeholder="Your message"
                rows={3}
                className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full btn-primary text-white py-2 rounded-lg text-sm font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © {currentYear} Infosiya. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;