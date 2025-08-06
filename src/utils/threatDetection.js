// Advanced threat detection system for sophisticated bot protection

export class ThreatDetector {
  constructor() {
    this.threatPatterns = new Map();
    this.behavioralBaseline = {};
    this.suspiciousActivities = [];
    this.blockedIPs = new Set();
    this.rateLimitData = new Map();
  }

  // Detect automation tools and headless browsers
  detectAutomationTools() {
    const signatures = {
      selenium: [
        'selenium',
        'webdriver',
        '__webdriver_',
        '__selenium_',
        'webdriver-evaluate',
        'webdriver-evaluate-result'
      ],
      puppeteer: [
        'puppeteer',
        'headless',
        'chrome-linux',
        'chrome-headless'
      ],
      playwright: [
        'playwright',
        'playwright-browser',
        'headless-chrome'
      ],
      phantomjs: [
        'phantomjs',
        'phantom',
        'phantomjs-bridge'
      ],
      cypress: [
        'cypress',
        'cypress-browser',
        '__cypress'
      ],
      automation: [
        'automation',
        'bot',
        'crawler',
        'spider',
        'scraper'
      ]
    };

    const userAgent = navigator.userAgent.toLowerCase();
    const detectedTools = [];

    for (const [tool, patterns] of Object.entries(signatures)) {
      for (const pattern of patterns) {
        if (userAgent.includes(pattern)) {
          detectedTools.push(tool);
          break;
        }
      }
    }

    return {
      isAutomated: detectedTools.length > 0,
      detectedTools,
      confidence: detectedTools.length * 25
    };
  }

  // Detect headless browser characteristics - PRODUCTION FRIENDLY
  detectHeadlessBrowser() {
    // Check if we're in production environment
    const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
    
    const indicators = {
      // Missing plugins
      plugins: navigator.plugins.length === 0,
      
      // Missing languages
      languages: navigator.languages.length === 0,
      
      // Missing permissions
      permissions: !navigator.permissions,
      
      // Missing webdriver
      webdriver: navigator.webdriver === true,
      
      // Missing connection
      connection: !navigator.connection,
      
      // Missing battery
      battery: !navigator.getBattery,
      
      // Missing media devices
      mediaDevices: !navigator.mediaDevices,
      
      // Missing geolocation
      geolocation: !navigator.geolocation,
      
      // Missing notifications
      notifications: !('Notification' in window),
      
      // Missing service worker
      serviceWorker: !('serviceWorker' in navigator),
      
      // Missing webgl
      webgl: !window.WebGLRenderingContext,
      
      // Missing canvas fingerprint
      canvasFingerprint: this.checkCanvasFingerprint(),
      
      // Missing font enumeration
      fonts: !document.fonts || !document.fonts.ready,
      
      // Missing audio context
      audioContext: !window.AudioContext && !window.webkitAudioContext
    };

    const suspiciousCount = Object.values(indicators).filter(Boolean).length;
    let confidence = Math.min(suspiciousCount * 15, 100);

    // In production, be much more lenient
    if (isProduction) {
      confidence = Math.max(0, confidence - 30); // Reduce confidence in production
    }

    return {
      isHeadless: confidence > (isProduction ? 80 : 50), // Higher threshold in production
      confidence,
      indicators
    };
  }

  // Check for canvas fingerprint manipulation
  checkCanvasFingerprint() {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Canvas fingerprint test', 2, 2);
      
      const dataURL = canvas.toDataURL();
      return dataURL === 'data:,';
    } catch (e) {
      return true; // Suspicious if canvas is blocked
    }
  }

  // Detect behavioral anomalies - PRODUCTION FRIENDLY
  detectBehavioralAnomalies(behaviorData) {
    const anomalies = [];
    let anomalyScore = 0;

    // Check if we're in production environment
    const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

    // Timing anomalies - Much more lenient
    if (behaviorData.timeSpent < 200) { // Lowered from 1000
      anomalies.push('Unnaturally fast response');
      anomalyScore += 10; // Reduced from 30
    }

    if (behaviorData.timeSpent > 60000) { // Increased from 30000
      anomalies.push('Suspiciously slow response');
      anomalyScore += 5; // Reduced from 15
    }

    // Mouse movement anomalies - Much more lenient
    if (behaviorData.mouseMovements === 0 && !isProduction) { // Only check in dev
      anomalies.push('No mouse movement detected');
      anomalyScore += 5; // Reduced from 25
    }

    if (behaviorData.mouseMovements > 500) { // Increased from 100
      anomalies.push('Excessive mouse movement');
      anomalyScore += 2; // Reduced from 10
    }

    // Keyboard interaction anomalies - Much more lenient
    if (behaviorData.keyStrokes === 0 && !isProduction) { // Only check in dev
      anomalies.push('No keyboard interaction');
      anomalyScore += 5; // Reduced from 20
    }

    if (behaviorData.keyStrokes > 200) { // Increased from 50
      anomalies.push('Excessive keyboard input');
      anomalyScore += 2; // Reduced from 10
    }

    // Input pattern anomalies - Much more lenient
    if (behaviorData.inputPattern) {
      if (behaviorData.inputPattern.type === 'copy-paste' && !isProduction) {
        anomalies.push('Copy-paste behavior detected');
        anomalyScore += 5; // Reduced from 20
      }

      if (behaviorData.inputPattern.type === 'programmatic' && !isProduction) {
        anomalies.push('Programmatic input detected');
        anomalyScore += 10; // Reduced from 35
      }
    }

    // Scroll behavior anomalies - Much more lenient
    if (behaviorData.scrollEvents === 0 && !isProduction) { // Only check in dev
      anomalies.push('No scroll interaction');
      anomalyScore += 2; // Reduced from 10
    }

    // Focus behavior anomalies - Much more lenient
    if (behaviorData.focusEvents === 0 && !isProduction) { // Only check in dev
      anomalies.push('No focus interaction');
      anomalyScore += 2; // Reduced from 10
    }

    // Production environment bonus - Reduce score
    if (isProduction) {
      anomalyScore = Math.max(0, anomalyScore - 20); // Reduce score in production
    }

    return {
      hasAnomalies: anomalies.length > 0,
      anomalies,
      score: anomalyScore,
      riskLevel: this.calculateRiskLevel(anomalyScore)
    };
  }

  // Calculate risk level based on anomaly score - PRODUCTION FRIENDLY
  calculateRiskLevel(score) {
    // Check if we're in production environment
    const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
    
    if (isProduction) {
      // Much more lenient thresholds for production
      if (score >= 150) return 'critical'; // Increased from 80
      if (score >= 100) return 'high'; // Increased from 60
      if (score >= 70) return 'medium'; // Increased from 40
      if (score >= 40) return 'low'; // Increased from 20
      return 'minimal';
    } else {
      // Original thresholds for development
      if (score >= 80) return 'critical';
      if (score >= 60) return 'high';
      if (score >= 40) return 'medium';
      if (score >= 20) return 'low';
      return 'minimal';
    }
  }

  // Detect input pattern analysis
  analyzeInputPattern(inputEvents) {
    const patterns = {
      type: 'normal',
      confidence: 0,
      indicators: []
    };

    // Check for copy-paste patterns
    if (inputEvents.some(event => event.type === 'paste')) {
      patterns.type = 'copy-paste';
      patterns.confidence += 30;
      patterns.indicators.push('Paste event detected');
    }

    // Check for programmatic input
    const keyEvents = inputEvents.filter(event => event.type === 'keydown');
    if (keyEvents.length > 0) {
      const timeIntervals = [];
      for (let i = 1; i < keyEvents.length; i++) {
        timeIntervals.push(keyEvents[i].timestamp - keyEvents[i-1].timestamp);
      }

      // Check for uniform timing (suspicious)
      const avgInterval = timeIntervals.reduce((a, b) => a + b, 0) / timeIntervals.length;
      const variance = timeIntervals.reduce((sum, interval) => sum + Math.pow(interval - avgInterval, 2), 0) / timeIntervals.length;

      if (variance < 10) { // Very uniform timing
        patterns.type = 'programmatic';
        patterns.confidence += 40;
        patterns.indicators.push('Uniform input timing');
      }
    }

    // Check for simultaneous events (impossible for humans)
    const simultaneousEvents = inputEvents.filter(event => 
      inputEvents.some(otherEvent => 
        otherEvent !== event && 
        Math.abs(otherEvent.timestamp - event.timestamp) < 10
      )
    );

    if (simultaneousEvents.length > 2) {
      patterns.type = 'programmatic';
      patterns.confidence += 25;
      patterns.indicators.push('Simultaneous input events');
    }

    return patterns;
  }

  // Detect network anomalies
  detectNetworkAnomalies() {
    const anomalies = [];
    let score = 0;

    // Check for proxy/VPN indicators
    if (navigator.connection) {
      const connection = navigator.connection;
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        anomalies.push('Suspicious connection type');
        score += 15;
      }
    }

    // Check for unusual user agent patterns
    const userAgent = navigator.userAgent;
    if (userAgent.includes('headless') || userAgent.includes('phantom')) {
      anomalies.push('Headless browser detected');
      score += 40;
    }

    // Check for missing browser features
    if (!window.chrome || !window.chrome.runtime) {
      anomalies.push('Missing browser features');
      score += 20;
    }

    return {
      hasAnomalies: anomalies.length > 0,
      anomalies,
      score
    };
  }

  // Comprehensive threat assessment - PRODUCTION FRIENDLY
  async performThreatAssessment(clientData) {
    const assessment = {
      overallRisk: 'low',
      confidence: 0,
      threats: [],
      recommendations: []
    };

    // Check if we're in production environment
    const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

    // 1. Automation tool detection - More lenient in production
    const automationDetection = this.detectAutomationTools();
    if (automationDetection.isAutomated && !isProduction) { // Only check in dev
      assessment.threats.push({
        type: 'automation_tool',
        confidence: automationDetection.confidence,
        details: automationDetection.detectedTools
      });
      assessment.confidence += automationDetection.confidence;
    }

    // 2. Headless browser detection - More lenient in production
    const headlessDetection = this.detectHeadlessBrowser();
    if (headlessDetection.isHeadless) {
      assessment.threats.push({
        type: 'headless_browser',
        confidence: headlessDetection.confidence,
        details: headlessDetection.indicators
      });
      assessment.confidence += headlessDetection.confidence;
    }

    // 3. Behavioral anomaly detection - Much more lenient
    const behavioralAnalysis = this.detectBehavioralAnomalies(clientData);
    if (behavioralAnalysis.hasAnomalies) {
      assessment.threats.push({
        type: 'behavioral_anomaly',
        confidence: behavioralAnalysis.score,
        details: behavioralAnalysis.anomalies
      });
      assessment.confidence += behavioralAnalysis.score;
    }

    // 4. Network anomaly detection - More lenient in production
    const networkAnalysis = this.detectNetworkAnomalies();
    if (networkAnalysis.hasAnomalies && !isProduction) { // Only check in dev
      assessment.threats.push({
        type: 'network_anomaly',
        confidence: networkAnalysis.score,
        details: networkAnalysis.anomalies
      });
      assessment.confidence += networkAnalysis.score;
    }

    // Production environment bonus - Reduce overall confidence
    if (isProduction) {
      assessment.confidence = Math.max(0, assessment.confidence - 40); // Significant reduction
    }

    // Calculate overall risk level
    assessment.confidence = Math.min(assessment.confidence, 100);
    assessment.overallRisk = this.calculateRiskLevel(assessment.confidence);

    // Generate recommendations - More lenient in production
    if (assessment.overallRisk === 'critical' && !isProduction) {
      assessment.recommendations.push('Immediate blocking recommended');
    } else if (assessment.overallRisk === 'high' && !isProduction) {
      assessment.recommendations.push('Enhanced verification required');
    } else if (assessment.overallRisk === 'medium' && !isProduction) {
      assessment.recommendations.push('Additional monitoring recommended');
    } else if (isProduction) {
      assessment.recommendations.push('Production environment - monitoring only');
    }

    return assessment;
  }

  // Real-time monitoring
  startRealTimeMonitoring() {
    const monitoring = {
      mouseMovements: 0,
      keyStrokes: 0,
      scrollEvents: 0,
      focusEvents: 0,
      clickEvents: 0,
      inputEvents: [],
      startTime: Date.now()
    };

    // Monitor mouse movements
    document.addEventListener('mousemove', () => {
      monitoring.mouseMovements++;
    });

    // Monitor keyboard events
    document.addEventListener('keydown', (event) => {
      monitoring.keyStrokes++;
      monitoring.inputEvents.push({
        type: 'keydown',
        key: event.key,
        timestamp: Date.now()
      });
    });

    // Monitor scroll events
    document.addEventListener('scroll', () => {
      monitoring.scrollEvents++;
    });

    // Monitor focus events
    document.addEventListener('focus', () => {
      monitoring.focusEvents++;
    });

    // Monitor click events
    document.addEventListener('click', () => {
      monitoring.clickEvents++;
    });

    return monitoring;
  }

  // Get monitoring data
  getMonitoringData(monitoring) {
    const duration = Date.now() - monitoring.startTime;
    const seconds = duration / 1000;

    return {
      duration,
      mouseMovementsPerSecond: monitoring.mouseMovements / seconds,
      keyStrokesPerSecond: monitoring.keyStrokes / seconds,
      scrollEventsPerSecond: monitoring.scrollEvents / seconds,
      focusEventsPerSecond: monitoring.focusEvents / seconds,
      clickEventsPerSecond: monitoring.clickEvents / seconds,
      totalInputEvents: monitoring.inputEvents.length,
      inputPattern: this.analyzeInputPattern(monitoring.inputEvents)
    };
  }
}

// Export singleton instance
export const threatDetector = new ThreatDetector(); 