import React from 'react';
import { clearCaptchaVerification, resetCaptchaVerification } from '@/utils/captchaUtils';

const DevTools = () => {
  // Only show in development
  if (import.meta.env.MODE === 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-50">
      <h3 className="text-sm font-semibold mb-2">Dev Tools</h3>
      <div className="space-y-2">
        <button
          onClick={clearCaptchaVerification}
          className="block w-full text-xs bg-red-600 hover:bg-red-700 px-2 py-1 rounded"
        >
          Clear Captcha
        </button>
        <button
          onClick={resetCaptchaVerification}
          className="block w-full text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
        >
          Reset & Reload
        </button>
      </div>
    </div>
  );
};

export default DevTools; 