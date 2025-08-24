// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// interface LeadFormProps {
//   service?: string;
//   className?: string;
//   title?: string;
// }

// interface FormData {
//   fullName: string;
//   email: string;
//   mobile: string;
//   service: string;
//   company?: string;
//   message?: string;
//   honeypot?: string;
// }

// const schema = yup.object({
//   fullName: yup.string().required('Full name is required'),
//   email:    yup.string().email('Invalid email address').required('Email is required'),
//   mobile:   yup.string().required('Mobile number is required')
//                  .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid mobile number'),
//   service:  yup.string().required('Service selection is required'),
//   company:  yup.string(),
//   message:  yup.string(),
//   honeypot: yup.string().max(0, 'Spam detected'),
// });

// const LeadForm: React.FC<LeadFormProps> = ({
//   service = '',
//   className = '',
//   title = 'Get a Free Quote'
// }) => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
//   const [showModal, setShowModal] = useState(false);

//   const services = [
//     'Website Development',
//     'App Development',
//     'PC Assembling',
//     'CRM Solutions',
//     'Custom Software Development'
//   ];

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     reset,
//     setValue
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//     mode: 'onChange',
//     defaultValues: { service }
//   });

//   React.useEffect(() => {
//     if (service) setValue('service', service);
//   }, [service, setValue]);

//   const onSubmit = async (data: FormData) => {
//     if (data.honeypot) return; // spam

//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       // build URL-encoded body
//       const formBody = new URLSearchParams({
//         timestamp: new Date().toISOString(),
//         service:   data.service,
//         fullName:  data.fullName,
//         email:     data.email,
//         mobile:    data.mobile,
//         company:   data.company || '',
//         message:   data.message || '',
//         sourcePage: window.location.pathname
//       }).toString();

//       const response = await fetch(
//         'https://script.google.com/macros/s/AKfycbyA93RQ97J3D0b7mt3U08p9gXfa773pRru7v5pcm1b8LFeQrtjFSwvGh7dFsteVVFrm/exec',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//           },
//           body: formBody
//         }
//       );

//       const result = await response.json();
//       if (!result.success) throw new Error(result.error || 'Unknown error');

//       setSubmitStatus('success');
//       setShowModal(true);
//       reset();

//       // GA4 event
//       if (typeof gtag !== 'undefined') {
//         gtag('event', 'infosiya_form_submit', {
//           event_category: 'lead_generation',
//           event_label: data.service,
//           value: 1
//         });
//       }
//     } catch (error) {
//       console.error('Form submission error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`bg-white rounded-2xl shadow-2xl p-6 lg:p-8 ${className}`}
//       >
//         <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <input
//             {...register('honeypot')}
//             type="text"
//             style={{ display: 'none' }}
//             tabIndex={-1}
//             autoComplete="off"
//           />

//           {/* Full Name */}
//           <div>
//             <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name *
//             </label>
//             <input
//               {...register('fullName')}
//               id="fullName"
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
//                 errors.fullName ? 'form-field-error' : 'border-gray-300'
//               }`}
//               placeholder="Enter your full name"
//             />
//             {errors.fullName && (
//               <p className="text-red-500 text-sm mt-1 flex items-center">
//                 <AlertCircle className="w-4 h-4 mr-1" />
//                 {errors.fullName.message}
//               </p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email Address *
//             </label>
//             <input
//               {...register('email')}
//               id="email"
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
//                 errors.email ? 'form-field-error' : 'border-gray-300'
//               }`}
//               placeholder="Enter your email address"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1 flex items-center">
//                 <AlertCircle className="w-4 h-4 mr-1" />
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Mobile */}
//           <div>
//             <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
//               Mobile Number *
//             </label>
//             <input
//               {...register('mobile')}
//               id="mobile"
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
//                 errors.mobile ? 'form-field-error' : 'border-gray-300'
//               }`}
//               placeholder="Enter your mobile number"
//             />
//             {errors.mobile && (
//               <p className="text-red-500 text-sm mt-1 flex items-center">
//                 <AlertCircle className="w-4 h-4 mr-1" />
//                 {errors.mobile.message}
//               </p>
//             )}
//           </div>

//           {/* Service */}
//           <div>
//             <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
//               Service Required *
//             </label>
//             <select
//               {...register('service')}
//               id="service"
//               className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
//                 errors.service ? 'form-field-error' : 'border-gray-300'
//               }`}
//             >
//               <option value="">Select a service</option>
//               {services.map((svc) => (
//                 <option key={svc} value={svc}>
//                   {svc}
//                 </option>
//               ))}
//             </select>
//             {errors.service && (
//               <p className="text-red-500 text-sm mt-1 flex items-center">
//                 <AlertCircle className="w-4 h-4 mr-1" />
//                 {errors.service.message}
//               </p>
//             )}
//           </div>

//           {/* Company */}
//           <div>
//             <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
//               Company Name (Optional)
//             </label>
//             <input
//               {...register('company')}
//               id="company"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
//               placeholder="Enter your company name"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//               Message / Requirements (Optional)
//             </label>
//             <textarea
//               {...register('message')}
//               id="message"
//               rows={4}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none"
//               placeholder="Tell us about your project requirements"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={!isValid || isSubmitting}
//             className="w-full btn-primary text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {isSubmitting ? (
//               <>
//                 <div className="spinner" />
//                 <span>Submitting...</span>
//               </>
//             ) : (
//               <>
//                 <Send className="w-5 h-5" />
//                 <span>Submit Request</span>
//               </>
//             )}
//           </button>

//           {submitStatus === 'error' && (
//             <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center text-red-700 text-sm">
//               <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
//               <span>There was an error submitting your request. Please try again.</span>
//             </div>
//           )}
//         </form>
//       </motion.div>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
//           >
//             <div className="mb-4">
//               <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
//             <p className="text-gray-600 mb-6">
//               We've received your request. Our team will contact you within 24 hours.
//             </p>
//             <button
//               onClick={() => setShowModal(false)}
//               className="btn-primary text-white px-6 py-3 rounded-lg font-medium"
//             >
//               Close
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// };

// export default LeadForm;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface LeadFormProps {
  service?: string;
  className?: string;
  title?: string;
}

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  service: string;
  company?: string;
  message?: string;
  honeypot?: string;
}

const schema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  mobile: yup
    .string()
    .required('Mobile number is required')
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid mobile number'),
  service: yup.string().required('Service selection is required'),
  company: yup.string(),
  message: yup.string(),
  honeypot: yup.string().max(0, 'Spam detected')
});

const LeadForm: React.FC<LeadFormProps> = ({
  service = '',
  className = '',
  title = 'Get a Free Quote'
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);

  const services = [
    'Website Development',
    'App Development',
    'PC Assembling',
    'CRM Solutions',
    'Custom Software Development',
    'Digital Marketing'
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: { service }
  });

  useEffect(() => {
    if (service) setValue('service', service);
  }, [service, setValue]);

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return; // spam trap

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Build URL-encoded form body
      const formBody = new URLSearchParams({
        timestamp: new Date().toISOString(),
        service: data.service,
        fullName: data.fullName,
        email: data.email,
        mobile: data.mobile,
        company: data.company || '',
        message: data.message || '',
        sourcePage: window.location.pathname
      }).toString();

      // ✅ Call your Hostinger PHP proxy instead of direct Apps Script URL
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      });

      const result = await response.json();
      if (!result.success) throw new Error(result.error || 'Unknown error');

      setSubmitStatus('success');
      setShowModal(true);
      reset();

      // Optional GA4 tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'infosiya_form_submit', {
          event_category: 'lead_generation',
          event_label: data.service,
          value: 1
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-2xl shadow-2xl p-6 lg:p-8 ${className}`}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot */}
          <input
            {...register('honeypot')}
            type="text"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              {...register('fullName')}
              id="fullName"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                errors.fullName ? 'form-field-error' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                errors.email ? 'form-field-error' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              {...register('mobile')}
              id="mobile"
              type="tel"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                errors.mobile ? 'form-field-error' : 'border-gray-300'
              }`}
              placeholder="Enter your mobile number"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Required *
            </label>
            <select
              {...register('service')}
              id="service"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                errors.service ? 'form-field-error' : 'border-gray-300'
              }`}
            >
              <option value="">Select a service</option>
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name (Optional)
            </label>
            <input
              {...register('company')}
              id="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
              placeholder="Enter your company name"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message / Requirements (Optional)
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none"
              placeholder="Tell us about your project requirements"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full btn-primary text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="spinner" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Request</span>
              </>
            )}
          </button>

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center text-red-700 text-sm">
              <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>There was an error submitting your request. Please try again.</span>
            </div>
          )}
        </form>
      </motion.div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
          >
            <div className="mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              We've received your request. Our team will contact you within 24 hours.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="btn-primary text-white px-6 py-3 rounded-lg font-medium"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default LeadForm;
