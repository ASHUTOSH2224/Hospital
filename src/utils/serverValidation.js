// Server-side validation simulation for advanced bot protection
// In production, this would be implemented on your backend server

// Simulated server endpoints for captcha validation
export const serverValidation = {
  // Validate captcha response with server-side checks - PRODUCTION FRIENDLY
  async validateCaptchaResponse(captchaData, userResponse, clientData) {
    // Simulate server processing time
    await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));
    
    const validation = {
      isValid: false,
      score: 0,
      riskLevel: 'low',
      reasons: [],
      sessionId: null
    };

    // 1. Basic answer validation - This is the PRIMARY check
    if (userResponse.toLowerCase() === captchaData.answer.toLowerCase()) {
      validation.isValid = true;
      validation.score += 80; // Much higher weight for correct answer
    } else {
      validation.reasons.push('Incorrect answer');
      return validation;
    }

    // 2. Client behavior analysis - Very lenient
    const behaviorScore = serverValidation.analyzeClientBehavior(clientData);
    validation.score += behaviorScore;

    // 3. Device fingerprint validation - Very lenient
    const deviceScore = serverValidation.validateDeviceFingerprint(clientData.deviceFingerprint);
    validation.score += deviceScore;

    // 4. Rate limiting check - Only block if clearly rate limited
    const rateLimitCheck = await serverValidation.checkServerRateLimit(clientData.ip, clientData.userAgent);
    if (!rateLimitCheck.allowed && rateLimitCheck.remainingAttempts === 0) {
      validation.isValid = false;
      validation.reasons.push('Rate limited');
      return validation;
    }

    // 5. Geographic and time-based analysis - Very lenient
    const geoTimeScore = serverValidation.analyzeGeographicAndTimePatterns(clientData);
    validation.score += geoTimeScore;

    // 6. Session management - EXTREMELY lenient for production
    // If they got the answer right, they're likely human
    if (validation.score >= 20) { // Lowered from 40 to 20
      validation.sessionId = serverValidation.generateSecureSessionId();
      validation.riskLevel = validation.score >= 60 ? 'low' : 'medium'; // Lowered from 80 to 60
    } else {
      // Only block if score is extremely low (likely bot)
      if (validation.score < 0) { // Lowered from 20 to 0
        validation.isValid = false;
        validation.reasons.push('Suspicious behavior detected');
        validation.riskLevel = 'high';
      } else {
        // Allow passage for borderline cases
        validation.sessionId = serverValidation.generateSecureSessionId();
        validation.riskLevel = 'medium';
      }
    }

    return validation;
  },

  // Check for suspicious patterns across multiple requests
  async detectBotPatterns(clientData) {
    const patterns = {
      isBot: false,
      confidence: 0,
      patterns: []
    };

    // Check for automation tools
    const automationSignatures = [
      'selenium', 'puppeteer', 'playwright', 'cypress',
      'headless', 'phantomjs', 'webdriver', 'automation'
    ];

    const userAgent = clientData.userAgent.toLowerCase();
    for (const signature of automationSignatures) {
      if (userAgent.includes(signature)) {
        patterns.isBot = true;
        patterns.confidence += 40;
        patterns.patterns.push(`Automation tool detected: ${signature}`);
      }
    }

    // Check for suspicious timing patterns
    if (clientData.responseTime < 1000) {
      patterns.confidence += 20;
      patterns.patterns.push('Unnaturally fast response');
    }

    // Check for lack of human behavior
    if (clientData.mouseMovements < 3) {
      patterns.confidence += 15;
      patterns.patterns.push('No mouse movement detected');
    }

    if (clientData.keyStrokes < 2) {
      patterns.confidence += 15;
      patterns.patterns.push('No keyboard interaction');
    }

    // Check for known bot IPs (simulated)
    const knownBotIPs = ['192.168.1.100', '10.0.0.50']; // Example IPs
    if (knownBotIPs.includes(clientData.ip)) {
      patterns.isBot = true;
      patterns.confidence += 30;
      patterns.patterns.push('Known bot IP address');
    }

    patterns.isBot = patterns.confidence >= 50;
    return patterns;
  },

  // Generate secure session tokens
  generateSecureSessionId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    const hash = btoa(`${timestamp}-${random}-${navigator.userAgent}`).slice(0, 32);
    return `session_${hash}`;
  },

  // Validate device fingerprint - PRODUCTION FRIENDLY
  validateDeviceFingerprint(fingerprint) {
    let score = 0;
    
    // Check fingerprint length and complexity - Very lenient
    if (fingerprint.length >= 5) score += 15; // Lowered from 20 to 5
    if (fingerprint.includes('canvas')) score += 10;
    if (fingerprint.includes('screen')) score += 10;
    
    // Check for common bot fingerprints - Only flag obvious ones
    const botSignatures = ['headless', 'phantom', 'selenium'];
    for (const signature of botSignatures) {
      if (fingerprint.toLowerCase().includes(signature)) {
        score -= 10; // Reduced penalty
      }
    }
    
    // Production environment bonus
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      score += 5; // Bonus for production environment
    }
    
    return score;
  },

  // Analyze client behavior patterns - PRODUCTION FRIENDLY
  analyzeClientBehavior(clientData) {
    let score = 0;
    
    // Timing analysis - EXTREMELY flexible for production
    if (clientData.timeSpent >= 500 && clientData.timeSpent <= 30000) { // Much wider range
      score += 20; // Normal human timing (very expanded range)
    } else if (clientData.timeSpent < 200) { // Much lower threshold
      score -= 5; // Too fast (minimal penalty)
    }
    
    // Mouse movement analysis - Very lenient
    if (clientData.mouseMovements >= 1) { // Lowered from 3 to 1
      score += 15;
    } else if (clientData.mouseMovements === 0) {
      score -= 5; // Minimal penalty
    }
    
    // Keyboard interaction analysis - Very lenient
    if (clientData.keyStrokes >= 1) { // Lowered from 2 to 1
      score += 15;
    } else if (clientData.keyStrokes === 0) {
      score -= 2; // Minimal penalty
    }
    
    // Natural behavior patterns
    if (clientData.mouseMovements > 0 && clientData.keyStrokes > 0) {
      score += 10; // Both mouse and keyboard usage
    }
    
    // Bonus for reasonable timing
    if (clientData.timeSpent >= 1000 && clientData.timeSpent <= 15000) {
      score += 10; // Bonus for reasonable timing
    }
    
    // Production environment bonus
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      score += 10; // Bonus for production environment
    }
    
    return score;
  },

  // Check server-side rate limiting
  async checkServerRateLimit(ip, userAgent) {
    // Simulate database lookup
    await new Promise(resolve => setTimeout(resolve, 50));
    
    // In production, this would check against a database
    const rateLimitData = {
      allowed: true,
      remainingAttempts: 5,
      resetTime: Date.now() + 60000
    };
    
    // Simulate rate limiting logic
    const recentAttempts = Math.floor(Math.random() * 10);
    if (recentAttempts > 5) {
      rateLimitData.allowed = false;
      rateLimitData.remainingAttempts = 0;
    }
    
    return rateLimitData;
  },

  // Analyze geographic and time patterns
  analyzeGeographicAndTimePatterns(clientData) {
    let score = 0;
    
    // Time zone consistency
    const clientTimezone = clientData.timezone || new Date().getTimezoneOffset();
    const expectedTimezone = -300; // Example: EST
    
    if (Math.abs(clientTimezone - expectedTimezone) < 60) {
      score += 5; // Reasonable timezone
    }
    
    // Time of day analysis
    const hour = new Date().getHours();
    if (hour >= 6 && hour <= 22) {
      score += 5; // Normal business hours
    }
    
    // Geographic consistency (simulated)
    const suspiciousRegions = ['RU', 'CN', 'KP']; // Example
    if (!suspiciousRegions.includes(clientData.country)) {
      score += 5;
    }
    
    return score;
  }
};

// Client-side helper functions
export const clientHelpers = {
  // Collect comprehensive client data for server validation
  collectClientData() {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${screen.width}x${screen.height}`,
      timezone: new Date().getTimezoneOffset(),
      timeSpent: 0, // Will be set by component
      mouseMovements: 0, // Will be set by component
      keyStrokes: 0, // Will be set by component
      deviceFingerprint: '', // Will be set by component
      ip: '127.0.0.1', // In production, get from server
      country: 'US', // In production, get from IP geolocation
      timestamp: Date.now()
    };
  },

  // Simulate server communication
  async sendToServer(endpoint, data) {
    // In production, this would be a real API call
    console.log(`Sending to ${endpoint}:`, data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 300));
    
    // Simulate server response
    return {
      success: Math.random() > 0.1, // 90% success rate
      data: {
        sessionId: `session_${Date.now()}_${Math.random().toString(36).substring(2)}`,
        timestamp: Date.now(),
        expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      }
    };
  }
};

// Advanced security utilities
export const securityUtils = {
  // Generate cryptographically secure tokens
  generateSecureToken() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  },

  // Hash sensitive data
  async hashData(data) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  },

  // Encrypt session data
  async encryptSessionData(data, key) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(JSON.stringify(data));
    
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      encoder.encode(key),
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    );
    
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encryptedBuffer = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      cryptoKey,
      dataBuffer
    );
    
    return {
      data: Array.from(new Uint8Array(encryptedBuffer)),
      iv: Array.from(iv)
    };
  }
}; 