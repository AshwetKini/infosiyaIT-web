import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Mail, Phone, MessageCircle, Clock } from 'lucide-react';

const SuspensionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>
        
        {/* Warning animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-center mb-6"
        >
          <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-4" />
        </motion.div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Temporarily Suspended
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            InfosiyaIT website access has been restricted by developers due to an outstanding payment.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg"
          >
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
              <span className="font-semibold text-red-800">Immediate Action Required</span>
            </div>
            <p className="text-red-700">
              Outstanding payment detected for hosting services
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Information
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              {/* <motion.a
                href="mailto:your-email@domain.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">your-email@domain.com</div>
                </div>
              </motion.a> */}

              <motion.a
                href="https://wa.me/918329833526"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-green-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-900">WhatsApp</div>
                  <div className="text-sm text-gray-600">+91-8329833526</div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-purple-500 mr-3" />
                <div className="text-left">
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-sm text-gray-600">+91-8329833526</div>
                </div>
              </motion.a>
            </div>
          </div>

          <div className="bg-gray-800 text-white p-4 rounded-lg mb-6">
            <div className="font-mono text-sm">
              REF: INFOSIYA_2025
            </div>
          </div>

          <div className="text-center text-gray-600">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-medium">Service Restoration</span>
            </div>
            <p className="text-sm mb-4">
              Access will be restored within 2-4 hours of payment confirmation
            </p>
            <p className="text-xs">
              <strong>Data Safety:</strong> All website data remains secure and intact
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SuspensionPage;
