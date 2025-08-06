import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Scale, FileText, AlertTriangle, Users, Shield, Globe, Gavel, BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const TermsOfService = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const termsSections = [
    {
      id: 'acceptance-terms',
      title: 'Acceptance of Terms',
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            By accessing and using Health Linee's website, mobile applications, and related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
          </p>
          <p className="text-gray-600">
            These Terms constitute a legally binding agreement between you and Health Linee. Your use of our Services indicates your acceptance of these Terms and our Privacy Policy.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-medium">Important Notice</p>
                <p className="text-amber-700 text-sm mt-1">
                  These Terms may be updated from time to time. Continued use of our Services after changes constitutes acceptance of the updated Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'description-services',
      title: 'Description of Services',
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Health Linee is a health and wellness content curation platform that provides:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Curated health trends and expert advice</li>
            <li>Weekly newsletters with health insights</li>
            <li>Educational content on various health topics</li>
            <li>Wellness tips and lifestyle recommendations</li>
            <li>Access to health-related articles and resources</li>
            <li>Community features for health discussions</li>
          </ul>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Service Availability</h4>
            <p className="text-blue-800 text-sm">
              We strive to maintain continuous service availability but cannot guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or technical issues.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'user-accounts',
      title: 'User Accounts and Registration',
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Account Creation</h4>
            <p className="text-gray-600 mb-2">To access certain features, you may need to create an account. You agree to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Account Termination</h4>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in harmful activities. You may delete your account at any time through your account settings.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use Policy',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">You agree to use our Services responsibly and in accordance with these guidelines:</p>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-green-700">✓ Permitted Uses</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Access and use content for personal, non-commercial purposes</li>
              <li>Share content with proper attribution to Health Linee</li>
              <li>Engage respectfully in community discussions</li>
              <li>Provide feedback and suggestions for improvement</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2 text-red-700">✗ Prohibited Uses</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Reproduce, distribute, or sell our content without permission</li>
              <li>Use automated tools to scrape or extract content</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Impersonate others or provide false information</li>
              <li>Engage in harassment, spam, or abusive behavior</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Interfere with the proper functioning of our Services</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'content-intellectual-property',
      title: 'Content and Intellectual Property',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Our Content</h4>
            <p className="text-gray-600 mb-2">
              All content on Health Linee, including text, graphics, logos, images, and software, is owned by Health Linee or licensed to us. This content is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600">
              We grant you a limited, non-exclusive, non-transferable license to access and use our content for personal, non-commercial purposes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">User-Generated Content</h4>
            <p className="text-gray-600 mb-2">
              If you submit content to our Services (comments, reviews, feedback), you grant us a worldwide, royalty-free license to use, modify, and distribute such content.
            </p>
            <p className="text-gray-600">
              You represent that you own or have the right to submit any content you provide and that it does not violate any third-party rights.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'health-disclaimer',
      title: 'Health Information Disclaimer',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-800 font-medium">Important Medical Disclaimer</p>
                <p className="text-red-700 text-sm mt-1">
                  The information provided on Health Linee is for educational and informational purposes only and should not be considered as medical advice.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-gray-600">
              <strong>Not Medical Advice:</strong> Our content is not intended to diagnose, treat, cure, or prevent any disease or health condition. Always consult with qualified healthcare professionals before making health decisions.
            </p>
            <p className="text-gray-600">
              <strong>Individual Results May Vary:</strong> Health information may not be applicable to your specific situation. What works for one person may not work for another.
            </p>
            <p className="text-gray-600">
              <strong>Emergency Situations:</strong> If you have a medical emergency, call emergency services immediately. Do not rely on online information for urgent medical care.
            </p>
            <p className="text-gray-600">
              <strong>Professional Consultation:</strong> Before starting any new health regimen, diet, or exercise program, consult with your healthcare provider.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'privacy-data',
      title: 'Privacy and Data Protection',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Data Collection</h4>
              <p className="text-gray-600">
                We collect information you provide directly and information collected automatically through your use of our Services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Data Use</h4>
              <p className="text-gray-600">
                We use your information to provide, improve, and personalize our Services, and to communicate with you about health trends and updates.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Your Rights</h4>
              <p className="text-gray-600">
                You have rights regarding your personal information, including access, correction, deletion, and portability, subject to applicable laws.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'disclaimers-limitations',
      title: 'Disclaimers and Limitations of Liability',
      icon: <Gavel className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Service Disclaimers</h4>
            <p className="text-gray-600 mb-2">
              Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Accuracy, completeness, or reliability of content</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Security or freedom from viruses or harmful components</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Limitation of Liability</h4>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Health Linee shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Maximum Liability</h4>
            <p className="text-gray-600">
              Our total liability to you for all claims arising from or related to these Terms or our Services shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'third-party-services',
      title: 'Third-Party Services and Links',
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">
            Our Services may contain links to third-party websites, applications, or services that are not owned or controlled by Health Linee.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Third-Party Links</h4>
              <p className="text-gray-600">
                We are not responsible for the content, privacy policies, or practices of third-party sites. We recommend reviewing their terms and privacy policies before using their services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Integration Services</h4>
              <p className="text-gray-600">
                We may integrate with third-party services for analytics, social media, or other functionality. Your use of these features is subject to their respective terms and policies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">No Endorsement</h4>
              <p className="text-gray-600">
                The inclusion of third-party links or services does not constitute an endorsement by Health Linee of such third parties or their content.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Termination by You</h4>
            <p className="text-gray-600">
              You may terminate your account and stop using our Services at any time by contacting us or using the account deletion feature in your settings.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Termination by Us</h4>
            <p className="text-gray-600 mb-2">
              We may terminate or suspend your access to our Services immediately, without prior notice, if you:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Violate these Terms of Service</li>
              <li>Engage in fraudulent or harmful activities</li>
              <li>Violate applicable laws or regulations</li>
              <li>Fail to pay fees (if applicable)</li>
              <li>Remain inactive for an extended period</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Effect of Termination</h4>
            <p className="text-gray-600">
              Upon termination, your right to use our Services will cease immediately. We may delete your account and data, though certain information may be retained as required by law or for legitimate business purposes.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Dispute Resolution',
      icon: <Gavel className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Governing Law</h4>
            <p className="text-gray-600">
              These Terms are governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of laws principles.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Dispute Resolution</h4>
            <p className="text-gray-600">
              Any disputes arising from these Terms or our Services will be resolved through binding arbitration in New York, NY, except for claims that may be brought in small claims court.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Class Action Waiver</h4>
            <p className="text-gray-600">
              You agree that any disputes will be resolved individually and not as part of a class action or collective proceeding.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Jurisdiction</h4>
            <p className="text-gray-600">
              You consent to the exclusive jurisdiction of the courts in New York, NY for any disputes that cannot be resolved through arbitration.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'general-provisions',
      title: 'General Provisions',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Entire Agreement</h4>
            <p className="text-gray-600">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Health Linee regarding our Services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Severability</h4>
            <p className="text-gray-600">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to be valid and enforceable.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Waiver</h4>
            <p className="text-gray-600">
              Our failure to enforce any right or provision of these Terms does not constitute a waiver of such right or provision.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Assignment</h4>
            <p className="text-gray-600">
              We may assign these Terms without restriction. You may not assign your rights or obligations under these Terms without our prior written consent.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Survival</h4>
            <p className="text-gray-600">
              Provisions that by their nature should survive termination will remain in effect after termination of these Terms.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-36">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            These terms govern your use of Health Linee's health content curation services. Please read them carefully before using our platform.
          </p>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-gray-200 inline-block">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> July 7, 2025
            </p>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Overview</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Health Linee! These Terms of Service ("Terms") govern your access to and use of our health content curation platform, website, mobile applications, and related services. By using our Services, you enter into a binding legal agreement with Health Linee.
            </p>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-200">
              <p className="text-purple-800 font-medium mb-2">Key Points:</p>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• You must be 18 or older to use our Services</li>
                <li>• Our content is for educational purposes only, not medical advice</li>
                <li>• You're responsible for maintaining account security</li>
                <li>• We may update these Terms with notice to users</li>
              </ul>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {termsSections.map((section, index) => (
              <motion.div 
                key={section.id}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedSection === section.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === section.id ? 'auto' : 0,
                    opacity: expandedSection === section.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    {section.content}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mt-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Mail className="w-6 h-6 mr-3 text-purple-500" />
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service or need assistance with our Services, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Email Support</p>
                    <p className="text-gray-600">legal@articlearn.com</p>
                    <p className="text-gray-600">support@articlearn.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9AM-5PM EST</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Legal Address</p>
                    <p className="text-gray-600">
                      Health Linee Legal Department<br />
                      123 Health Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Notice */}
          <motion.div variants={fadeInUp} className="text-center mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-200">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Effective Date:</strong> July 7, 2025
            </p>
            <p className="text-sm text-gray-600">
              These Terms of Service are effective as of the date listed above. We reserve the right to update these Terms at any time. 
              Material changes will be communicated to users via email or prominent notice on our platform.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TermsOfService;