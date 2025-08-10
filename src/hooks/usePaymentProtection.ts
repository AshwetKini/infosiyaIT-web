import { useState, useEffect } from 'react';
import PaymentProtectionService from '../services/paymentProtection';

export const usePaymentProtection = () => {
  const [isActive, setIsActive] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      setIsChecking(true);
      try {
        const active = await PaymentProtectionService.checkStatus();
        setIsActive(active);
      } catch (error) {
        console.error('Payment protection check failed:', error);
        // Allow access on error
        setIsActive(true);
      } finally {
        setIsChecking(false);
      }
    };

    // Initial check
    checkPaymentStatus();

    // Check every 5 minutes
    const interval = setInterval(checkPaymentStatus, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { isActive, isChecking };
};
