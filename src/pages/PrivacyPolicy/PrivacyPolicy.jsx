import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Shield, Lock, Eye, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
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

  const privacySections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
            <p className="text-gray-600 mb-2">We collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials and profile information</li>
              <li>Health preferences and interests</li>
              <li>Communication preferences and subscription settings</li>
              <li>Feedback, reviews, and survey responses</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Automatically Collected Information</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, click patterns)</li>
              <li>Location data (approximate location based on IP address)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Provide, maintain, and improve our health content curation services</li>
            <li>Personalize your experience and recommend relevant health topics</li>
            <li>Send you our weekly health trends newsletter and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Analyze usage patterns to enhance our platform functionality</li>
            <li>Ensure the security and integrity of our services</li>
            <li>Comply with legal obligations and protect our rights</li>
            <li>Conduct research and analysis for health trend insights</li>
          </ul>
        </div>
      )
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We may share your information in the following circumstances:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Service Providers</h4>
              <p className="text-gray-600">We work with trusted third-party service providers who assist us in operating our platform, conducting business, or serving our users.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Legal Requirements</h4>
              <p className="text-gray-600">We may disclose information if required by law, legal process, or government request.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Business Transfers</h4>
              <p className="text-gray-600">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Consent</h4>
              <p className="text-gray-600">We may share information with your explicit consent or at your direction.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We implement appropriate technical and organizational security measures to protect your personal information:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and monitoring</li>
            <li>Access controls and authentication measures</li>
            <li>Employee training on data protection practices</li>
            <li>Incident response procedures</li>
          </ul>
          <p className="text-gray-600">However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information.</p>
        </div>
      )
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking Technologies',
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We use cookies and similar tracking technologies to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Remember your preferences and settings</li>
            <li>Analyze site usage and performance</li>
            <li>Provide personalized content recommendations</li>
            <li>Enable social media features</li>
            <li>Deliver targeted advertisements</li>
          </ul>
          <p className="text-gray-600 mt-4">You can control cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our services.</p>
        </div>
      )
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">You have the following rights regarding your personal information:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
            <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
          </ul>
          <p className="text-gray-600 mt-4">To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>
        </div>
      )
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We retain your personal information for as long as necessary to:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Provide our services and maintain your account</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
            <li>Conduct legitimate business operations</li>
          </ul>
          <p className="text-gray-600 mt-4">When personal information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.</p>
        </div>
      )
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links and Services',
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Our platform may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices of these external sites.</p>
          <p className="text-gray-600">We encourage you to review the privacy policies of any third-party services you access through our platform.</p>
          <p className="text-gray-600">This Privacy Policy applies only to information collected by Health Linee and does not cover information collected by third parties.</p>
        </div>
      )
    },
    {
      id: 'policy-changes',
      title: 'Changes to This Privacy Policy',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.</p>
          <p className="text-gray-600">When we make material changes, we will:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Post the updated policy on our website</li>
            <li>Update the "Last Updated" date</li>
            <li>Notify you via email or through our platform</li>
            <li>Provide prominent notice of significant changes</li>
          </ul>
          <p className="text-gray-600 mt-4">Your continued use of our services after policy changes indicates acceptance of the updated terms.</p>
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Health Linee.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Health Linee ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our health content curation services.
            </p>
            <p className="text-gray-600">
              By using our services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {privacySections.map((section, index) => (
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
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">privacy@articlearn.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
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
            <p className="text-sm text-gray-600">
              This Privacy Policy is effective as of July 7, 2025. We reserve the right to update or modify this policy at any time. 
              Changes will be posted on this page with an updated revision date.
            </p>
          </motion.div>
        </div>
      </motion.section>


    </div>
  );
};

export default PrivacyPolicy;