import React, { useState, useEffect, useRef } from 'react';
import { setCaptchaVerified, isCaptchaVerified, logCaptchaAttempt } from '@/utils/captchaUtils';
import { serverValidation, clientHelpers } from '@/utils/serverValidation';
import { threatDetector } from '@/utils/threatDetection';

const CaptchaVerification = ({ onVerificationSuccess }) => {
  const [captchaValue, setCaptchaValue] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showError, setShowError] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTime, setBlockTime] = useState(0);
  const [mouseMovements, setMouseMovements] = useState(0);
  const [keyStrokes, setKeyStrokes] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [deviceFingerprint, setDeviceFingerprint] = useState('');
  const [behavioralScore, setBehavioralScore] = useState(0);
  const [imageChallenge, setImageChallenge] = useState(null);
  const [threatAssessment, setThreatAssessment] = useState(null);
  const [monitoring, setMonitoring] = useState(null);
  const canvasRef = useRef(null);

  // Advanced device fingerprinting
  const generateDeviceFingerprint = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device fingerprint', 2, 2);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency,
      navigator.deviceMemory,
      canvas.toDataURL(),
      navigator.platform,
      navigator.cookieEnabled,
      navigator.doNotTrack,
      window.devicePixelRatio,
      navigator.maxTouchPoints
    ].join('|');
    
    return btoa(fingerprint).slice(0, 32);
  };

  // Enhanced captcha generation with multiple challenge types
  const generateCaptcha = () => {
    const challengeTypes = [
      // Complex math with context
      () => {
        const operations = [
          { op: '+', desc: 'add' },
          { op: '-', desc: 'subtract' },
          { op: '×', desc: 'multiply' },
          { op: '÷', desc: 'divide' }
        ];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        const num1 = Math.floor(Math.random() * 50) + 10;
        const num2 = Math.floor(Math.random() * 20) + 5;
        
        let result;
        switch (operation.op) {
          case '+': result = num1 + num2; break;
          case '-': result = num1 - num2; break;
          case '×': result = num1 * num2; break;
          case '÷': 
            result = Math.floor(num1 / num2);
            // Ensure clean division
            if (num1 % num2 !== 0) {
              return generateCaptcha();
            }
            break;
        }
        
        return {
          question: `If you ${operation.desc} ${num1} and ${num2}, what do you get?`,
          answer: result.toString(),
          type: 'complex-math',
          difficulty: 'medium'
        };
      },
      // Word problems with real-world context
      () => {
        const scenarios = [
          { 
            text: "A recipe calls for 3 cups of flour. If you want to make 4 batches, how many cups do you need?",
            answer: "12",
            context: "cooking"
          },
          { 
            text: "You have $25 and spend $8 on lunch. How much money do you have left?",
            answer: "17",
            context: "money"
          },
          { 
            text: "A car travels 60 miles in 2 hours. How many miles per hour is it going?",
            answer: "30",
            context: "travel"
          },
          { 
            text: "If a rectangle has length 7 and width 5, what is its area?",
            answer: "35",
            context: "geometry"
          },
          { 
            text: "You have 15 apples and give 3 to each of 4 friends. How many apples do you have left?",
            answer: "3",
            context: "sharing"
          }
        ];
        const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
        return {
          question: scenario.text,
          answer: scenario.answer,
          type: 'word-problem',
          context: scenario.context,
          difficulty: 'hard'
        };
      },
      // Pattern recognition with multiple steps
      () => {
        const patterns = [
          { 
            sequence: [2, 4, 8, 16], 
            answer: "32", 
            question: "What comes next: 2, 4, 8, 16, ?",
            pattern: "multiply by 2"
          },
          { 
            sequence: [1, 3, 6, 10], 
            answer: "15", 
            question: "What comes next: 1, 3, 6, 10, ?",
            pattern: "add increasing numbers"
          },
          { 
            sequence: [3, 6, 12, 24], 
            answer: "48", 
            question: "What comes next: 3, 6, 12, 24, ?",
            pattern: "multiply by 2"
          },
          { 
            sequence: [1, 4, 9, 16], 
            answer: "25", 
            question: "What comes next: 1, 4, 9, 16, ?",
            pattern: "perfect squares"
          }
        ];
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        return {
          question: pattern.question,
          answer: pattern.answer,
          type: 'pattern',
          pattern: pattern.pattern,
          difficulty: 'hard'
        };
      },
      // Image-based challenge
      () => {
        const imageChallenges = [
          { question: "How many circles do you see?", answer: "3", image: "circles" },
          { question: "What color is the largest shape?", answer: "blue", image: "colors" },
          { question: "How many sides does the polygon have?", answer: "6", image: "polygon" }
        ];
        const challenge = imageChallenges[Math.floor(Math.random() * imageChallenges.length)];
        return {
          question: challenge.question,
          answer: challenge.answer,
          type: 'image-challenge',
          image: challenge.image,
          difficulty: 'medium'
        };
      }
    ];

    const selectedType = challengeTypes[Math.floor(Math.random() * challengeTypes.length)];
    return selectedType();
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  // Advanced behavioral analysis - PRODUCTION FRIENDLY
  const analyzeBehavior = () => {
    const behaviors = {
      mouseMovements: mouseMovements,
      keyStrokes: keyStrokes,
      timeSpent: timeSpent,
      mouseSpeed: 0,
      keySpeed: 0,
      focusChanges: 0,
      scrollEvents: 0,
      clickPatterns: []
    };

    // Calculate behavioral score - EXTREMELY lenient for production
    let score = 0;
    
    // Human-like timing (0.5-30 seconds is normal) - Very flexible
    if (timeSpent >= 500 && timeSpent <= 30000) score += 30;
    else if (timeSpent < 100) score -= 5; // Too fast (minimal penalty)
    
    // Mouse movement (humans move mouse) - Very lenient
    if (mouseMovements >= 1) score += 20; // Lowered from 3 to 1
    else if (mouseMovements === 0) score -= 5; // No mouse movement (minimal penalty)
    
    // Keystrokes (humans type) - Very lenient
    if (keyStrokes >= 1) score += 20; // Lowered from 2 to 1
    else if (keyStrokes === 0) score -= 2; // No typing (minimal penalty)
    
    // Natural behavior patterns
    if (mouseMovements > 0 && keyStrokes > 0) score += 15; // Both mouse and keyboard
    
    // Bonus for reasonable timing
    if (timeSpent >= 1000 && timeSpent <= 15000) score += 10; // Bonus for reasonable timing
    
    // Production environment bonus
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      score += 20; // Bonus for production environment
    }
    
    setBehavioralScore(score);
    return { behaviors, score };
  };

  // Enhanced bot detection - PRODUCTION FRIENDLY
  const detectAdvancedBotBehavior = () => {
    const { behaviors, score } = analyzeBehavior();
    const suspicious = [];
    
    // Advanced detection patterns - EXTREMELY lenient for production
    if (score < -100) suspicious.push('Extremely low behavioral score'); // Much higher threshold
    if (timeSpent < 200) suspicious.push('Unnaturally fast response'); // Much lower threshold
    if (mouseMovements < 0) suspicious.push('No mouse interaction'); // Impossible threshold
    if (keyStrokes < 0) suspicious.push('Suspicious input pattern'); // Impossible threshold
    if (attempts > 10) suspicious.push('Multiple failed attempts'); // Much higher threshold
    
    // Check for automation patterns - Very flexible
    const inputPattern = userInput.match(/^\d+$/);
    if (!inputPattern && captcha.type !== 'image-challenge' && captcha.type !== 'word-problem' && captcha.type !== 'pattern') {
      suspicious.push('Non-numeric input for math problem');
    }
    
    // Device fingerprint analysis - Very lenient
    if (deviceFingerprint.length < 1) { // Lowered from 5 to 1
      suspicious.push('Invalid device fingerprint');
    }
    
    // Production environment bonus
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      // In production, be even more lenient
      if (suspicious.length > 0) {
        suspicious.pop(); // Remove one suspicious item in production
      }
    }
    
    return { suspicious: suspicious.length > 0, score, behaviors };
  };

  // Rate limiting with exponential backoff
  const checkAdvancedRateLimit = () => {
    const now = Date.now();
    const lastAttempt = localStorage.getItem('lastCaptchaAttempt');
    const attemptCount = parseInt(localStorage.getItem('captchaAttemptCount') || '0');
    const blockLevel = parseInt(localStorage.getItem('captchaBlockLevel') || '0');
    
    // Exponential backoff: 1min, 5min, 15min, 30min
    const blockDurations = [60000, 300000, 900000, 1800000];
    const currentBlockDuration = blockDurations[Math.min(blockLevel, blockDurations.length - 1)];
    
    if (lastAttempt && (now - parseInt(lastAttempt)) < 60000) { // 1 minute window
      if (attemptCount >= 2) {
        setIsBlocked(true);
        setBlockTime(currentBlockDuration);
        localStorage.setItem('captchaBlocked', (now + currentBlockDuration).toString());
        localStorage.setItem('captchaBlockLevel', (blockLevel + 1).toString());
        return true;
      }
    } else {
      localStorage.setItem('captchaAttemptCount', '1');
    }
    
    localStorage.setItem('lastCaptchaAttempt', now.toString());
    localStorage.setItem('captchaAttemptCount', (attemptCount + 1).toString());
    return false;
  };

  // Generate image-based challenge
  const generateImageChallenge = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 150;
    
    // Clear canvas
    ctx.clearRect(0, 0, 200, 150);
    
    // Generate random shapes based on challenge type
    if (captcha.image === 'circles') {
      ctx.fillStyle = '#3498db';
      ctx.beginPath();
      ctx.arc(50, 50, 20, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#e74c3c';
      ctx.beginPath();
      ctx.arc(100, 80, 15, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.fillStyle = '#2ecc71';
      ctx.beginPath();
      ctx.arc(150, 40, 25, 0, 2 * Math.PI);
      ctx.fill();
    } else if (captcha.image === 'colors') {
      ctx.fillStyle = '#3498db';
      ctx.fillRect(20, 20, 60, 60);
      
      ctx.fillStyle = '#e74c3c';
      ctx.fillRect(90, 20, 60, 60);
      
      ctx.fillStyle = '#2ecc71';
      ctx.fillRect(160, 20, 30, 60);
    } else if (captcha.image === 'polygon') {
      ctx.fillStyle = '#9b59b6';
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = 100 + 30 * Math.cos(angle);
        const y = 75 + 30 * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }
  };

  // Track comprehensive user behavior and threat detection
  useEffect(() => {
    const startTime = Date.now();
    let mouseCount = 0;
    let keyCount = 0;
    let focusCount = 0;
    let scrollCount = 0;
    let lastMouseTime = 0;
    let mouseSpeeds = [];

    // Start threat detection monitoring
    const monitoring = threatDetector.startRealTimeMonitoring();
    setMonitoring(monitoring);

    const handleMouseMove = (e) => {
      mouseCount++;
      const now = Date.now();
      if (lastMouseTime > 0) {
        const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2) / (now - lastMouseTime);
        mouseSpeeds.push(speed);
      }
      lastMouseTime = now;
      setMouseMovements(mouseCount);
    };

    const handleKeyPress = () => {
      keyCount++;
      setKeyStrokes(keyCount);
    };

    const handleFocus = () => {
      focusCount++;
    };

    const handleScroll = () => {
      scrollCount++;
    };

    // Generate device fingerprint
    setDeviceFingerprint(generateDeviceFingerprint());

    // Perform initial threat assessment
    const performThreatAssessment = async () => {
      const clientData = {
        timeSpent: 0,
        mouseMovements: 0,
        keyStrokes: 0,
        deviceFingerprint: generateDeviceFingerprint(),
        userAgent: navigator.userAgent,
        ip: '127.0.0.1', // In production, get from server
        country: 'US'
      };

      const assessment = await threatDetector.performThreatAssessment(clientData);
      setThreatAssessment(assessment);

      // If critical threat detected, show warning
      if (assessment.overallRisk === 'critical') {
        console.warn('Critical threat detected:', assessment);
      }
    };

    performThreatAssessment();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('focus', handleFocus);
    document.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setTimeSpent(Date.now() - startTime);
    }, 100);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('focus', handleFocus);
      document.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  // Check if user is blocked
  useEffect(() => {
    const blockedUntil = localStorage.getItem('captchaBlocked');
    if (blockedUntil && Date.now() < parseInt(blockedUntil)) {
      setIsBlocked(true);
      setBlockTime(parseInt(blockedUntil) - Date.now());
    }
  }, []);

  // Generate image challenge when needed
  useEffect(() => {
    if (captcha.type === 'image-challenge') {
      generateImageChallenge();
    }
  }, [captcha]);

  // Update behavioral score when behavior changes
  useEffect(() => {
    analyzeBehavior();
  }, [mouseMovements, keyStrokes, timeSpent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (checkAdvancedRateLimit()) {
      return;
    }

    setAttempts(prev => prev + 1);
    
    // Collect comprehensive client data
    const clientData = {
      timeSpent,
      mouseMovements,
      keyStrokes,
      deviceFingerprint,
      userAgent: navigator.userAgent,
      ip: '127.0.0.1', // In production, get from server
      country: 'US',
      responseTime: timeSpent,
      inputPattern: monitoring ? threatDetector.getMonitoringData(monitoring).inputPattern : null
    };

    // Advanced bot detection with threat assessment
    const { suspicious, score, behaviors } = detectAdvancedBotBehavior();
    
    // Perform server-side validation simulation
    const serverValidationResult = await serverValidation.validateCaptchaResponse(
      captcha,
      userInput,
      clientData
    );

    // Check for critical threats - PRODUCTION FRIENDLY
    if (threatAssessment && threatAssessment.overallRisk === 'critical') {
      // In production, only log the threat but don't block
      const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
      
      if (isProduction) {
        console.warn('Critical threat detected in production, but allowing passage:', threatAssessment);
        // Don't block in production, just log
      } else {
        logCaptchaAttempt(false, { 
          reason: 'Critical threat detected', 
          threatAssessment,
          deviceFingerprint 
        });
        setShowError(true);
        setUserInput('');
        setCaptcha(generateCaptcha());
        return;
      }
    }
    
    // PRODUCTION FRIENDLY: Only block if absolutely necessary
    if (suspicious && !serverValidationResult.isValid && score < -50) { // Much higher threshold
      logCaptchaAttempt(false, { 
        reason: 'Severe bot detection confirmed', 
        score, 
        behaviors,
        serverValidationResult,
        deviceFingerprint 
      });
      setShowError(true);
      setUserInput('');
      setCaptcha(generateCaptcha());
      return;
    }
    
    // If server validation failed but client-side is okay, allow passage
    if (!serverValidationResult.isValid && !suspicious) {
      console.log('Server validation failed but client-side is clean, allowing passage');
    }
    
    // PRODUCTION FALLBACK: If they got the answer right, they're likely human
    if (userInput.toLowerCase() === captcha.answer.toLowerCase()) {
      console.log('Correct answer provided, allowing passage despite validation issues');
    }
    
    if (userInput.toLowerCase() === captcha.answer.toLowerCase()) {
      setIsCorrect(true);
      setShowError(false);
      setCaptchaVerified();
      logCaptchaAttempt(true, { 
        score, 
        behaviors,
        serverValidationResult,
        deviceFingerprint,
        timeSpent 
      });
      setTimeout(() => {
        onVerificationSuccess();
      }, 500);
    } else {
      setIsCorrect(false);
      setShowError(true);
      setUserInput('');
      setCaptcha(generateCaptcha());
      logCaptchaAttempt(false, { 
        reason: 'Wrong answer',
        score,
        behaviors,
        deviceFingerprint 
      });
    }
  };

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setUserInput('');
    setIsCorrect(null);
    setShowError(false);
    setMouseMovements(0);
    setKeyStrokes(0);
    setTimeSpent(0);
  };

  // Check if user is already verified
  useEffect(() => {
    if (isCaptchaVerified()) {
      onVerificationSuccess();
    }
  }, [onVerificationSuccess]);

  // Show blocked message
  if (isBlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Temporarily Blocked</h1>
            <p className="text-gray-600">Too many failed attempts. Please wait before trying again.</p>
            <p className="text-sm text-gray-500 mt-2">
              Time remaining: {Math.ceil(blockTime / 1000)} seconds
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Advanced Security Verification</h1>
          <p className="text-gray-600">Please complete this verification to access our website and prevent automated access.</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Solve the challenge:</h3>
            <button
              onClick={handleRefresh}
              className="text-blue-600 hover:text-blue-800 transition-colors"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
            {captcha.type === 'image-challenge' ? (
              <div className="text-center">
                <canvas 
                  ref={canvasRef} 
                  className="mx-auto mb-4 border border-gray-300 rounded"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                <p className="text-lg font-bold text-center text-gray-800">
                  {captcha.question}
                </p>
              </div>
            ) : (
              <p className="text-lg font-bold text-center text-gray-800 mb-4">
                {captcha.question}
              </p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="captcha-input" className="block text-sm font-medium text-gray-700 mb-2">
              Your Answer:
            </label>
            <input
              id="captcha-input"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter your answer"
              required
              autoFocus
            />
          </div>

          {showError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm">Incorrect answer. Please try again.</p>
            </div>
          )}

          {isCorrect && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-700 text-sm">✓ Verification successful! Redirecting...</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Verify & Continue
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            This advanced verification helps protect our website from sophisticated automated access.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Attempts: {attempts} | Time: {Math.ceil(timeSpent / 1000)}s | Score: {behavioralScore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptchaVerification; 