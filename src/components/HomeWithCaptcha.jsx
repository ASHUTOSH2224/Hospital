import React, { useState, useEffect } from 'react';
import Home from '@/pages/Home/Home';
import CaptchaVerification from './CaptchaVerification';
import { isCaptchaVerified } from '@/utils/captchaUtils';

const HomeWithCaptcha = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already verified
    if (isCaptchaVerified()) {
      setIsVerified(true);
    }
    setIsLoading(false);
  }, []);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isVerified) {
    return <CaptchaVerification onVerificationSuccess={handleVerificationSuccess} />;
  }

  return <Home />;
};

export default HomeWithCaptcha; 