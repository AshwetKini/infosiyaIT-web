// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ServicePage from './pages/ServicePage';
// import ContactPage from './pages/ContactPage';
// import SuspensionPage from './components/SuspensionPage';
// import { usePaymentProtection } from './hooks/usePaymentProtection';
// import './App.css';
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   const { isActive, isChecking } = usePaymentProtection();

//   // Show loading while checking
//   if (isChecking) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//           className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
//         />
//       </div>
//     );
//   }

//   // Show suspension page if not active
//   if (!isActive) {
//     return <SuspensionPage />;
//   }

//   // Show normal app if active
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <AnimatePresence mode="wait">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/services/:serviceSlug?" element={<ServicePage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </AnimatePresence>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import SuspensionPage from './components/SuspensionPage';
import { usePaymentProtection } from './hooks/usePaymentProtection';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";
import FloatingContactButtons from './components/FloatingContactButtons';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Pass location and key so AnimatePresence can detect route changes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceSlug?" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { isActive, isChecking } = usePaymentProtection();

  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!isActive) {
    return <SuspensionPage />;
  }

  return (
    <Router>
      <ScrollToTop />   {/* <-- add here */}
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <FloatingContactButtons />
      </div>
    </Router>
  );
}

export default App;
