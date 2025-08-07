// Enhanced utility functions for captcha verification

export const clearCaptchaVerification = () => {
  localStorage.removeItem('captchaVerified');
  localStorage.removeItem('captchaAttemptCount');
  localStorage.removeItem('lastCaptchaAttempt');
  localStorage.removeItem('captchaBlocked');
};

export const isCaptchaVerified = () => {
  return localStorage.getItem('captchaVerified') === 'true';
};

export const setCaptchaVerified = () => {
  localStorage.setItem('captchaVerified', 'true');
  // Add timestamp for additional security
  localStorage.setItem('captchaVerifiedAt', Date.now().toString());
};

// Function to reset verification (useful for testing or admin purposes)
export const resetCaptchaVerification = () => {
  clearCaptchaVerification();
  // Optionally reload the page to show captcha again
  window.location.reload();
};

// Enhanced security checks
export const validateCaptchaSession = () => {
  const verifiedAt = localStorage.getItem('captchaVerifiedAt');
  const now = Date.now();
  
  // Check if verification is older than 24 hours
  if (verifiedAt && (now - parseInt(verifiedAt)) > 24 * 60 * 60 * 1000) {
    clearCaptchaVerification();
    return false;
  }
  
  return isCaptchaVerified();
};

// Bot detection utilities
export const detectSuspiciousActivity = () => {
  const suspicious = [];
  
  // Check for rapid-fire attempts
  const attemptCount = parseInt(localStorage.getItem('captchaAttemptCount') || '0');
  if (attemptCount > 10) suspicious.push('Too many attempts');
  
  // Check for very fast responses
  const lastAttempt = localStorage.getItem('lastCaptchaAttempt');
  if (lastAttempt) {
    const timeSinceLastAttempt = Date.now() - parseInt(lastAttempt);
    if (timeSinceLastAttempt < 1000) suspicious.push('Too fast response');
  }
  
  // Check for blocked status
  const blockedUntil = localStorage.getItem('captchaBlocked');
  if (blockedUntil && Date.now() < parseInt(blockedUntil)) {
    suspicious.push('Currently blocked');
  }
  
  return suspicious;
};

// Rate limiting functions
export const isRateLimited = () => {
  const blockedUntil = localStorage.getItem('captchaBlocked');
  return blockedUntil && Date.now() < parseInt(blockedUntil);
};

export const getRemainingBlockTime = () => {
  const blockedUntil = localStorage.getItem('captchaBlocked');
  if (!blockedUntil) return 0;
  
  const remaining = parseInt(blockedUntil) - Date.now();
  return remaining > 0 ? remaining : 0;
};

// Security logging (for potential server-side integration)
export const logCaptchaAttempt = (success, details = {}) => {
  const logEntry = {
    timestamp: Date.now(),
    success,
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    ...details
  };
  
  // Store in localStorage for now (could be sent to server)
  const logs = JSON.parse(localStorage.getItem('captchaLogs') || '[]');
  logs.push(logEntry);
  
  // Keep only last 50 entries
  if (logs.length > 50) {
    logs.splice(0, logs.length - 50);
  }
  
  localStorage.setItem('captchaLogs', JSON.stringify(logs));
  
  // In production, you could send this to your server
  // fetch('/api/captcha-log', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(logEntry)
  // });
};

// IP-based blocking simulation (would need server-side implementation)
export const checkIPBlocklist = async () => {
  // This would typically check against a server-side blocklist
  // For now, we'll simulate with localStorage
  const blockedIPs = JSON.parse(localStorage.getItem('blockedIPs') || '[]');
  
  // In production, you'd get the actual IP from the server
  // const clientIP = await fetch('/api/client-ip').then(r => r.json());
  
  return false; // Simulate no blocking for now
};

// Advanced bot detection
export const analyzeClientBehavior = () => {
  const behavior = {
    mouseMovements: 0,
    keyStrokes: 0,
    timeSpent: 0,
    scrollEvents: 0,
    focusEvents: 0
  };
  
  // Track various user interactions
  document.addEventListener('mousemove', () => behavior.mouseMovements++);
  document.addEventListener('keydown', () => behavior.keyStrokes++);
  document.addEventListener('scroll', () => behavior.scrollEvents++);
  document.addEventListener('focus', () => behavior.focusEvents++);
  
  return behavior;
};

// Session management
export const createSecureSession = () => {
  const sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
  const sessionData = {
    id: sessionId,
    created: Date.now(),
    verified: false,
    attempts: 0
  };
  
  localStorage.setItem('captchaSession', JSON.stringify(sessionData));
  return sessionId;
};

export const getCurrentSession = () => {
  const session = localStorage.getItem('captchaSession');
  return session ? JSON.parse(session) : null;
};

export const updateSession = (updates) => {
  const session = getCurrentSession();
  if (session) {
    const updatedSession = { ...session, ...updates };
    localStorage.setItem('captchaSession', JSON.stringify(updatedSession));
  }
}; 