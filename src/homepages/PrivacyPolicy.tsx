import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ShieldCheck, FileText, 
  UserCheck, Cookie, Share2, Mail, 
  Phone, Globe, AlertCircle, Briefcase, 
  ExternalLink, Trash2, Clock
} from 'lucide-react';

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, className = '', delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const PrivacyPolicy: React.FC = () => {

  const lastUpdated = "18 December 2025";

  return (
    <div className="font-sans bg-white text-[#363636] min-h-screen selection:bg-[#536186]/20">
      
      {/* SIMPLE HERO HEADER */}
      <header className="relative py-20 px-6 border-b border-[#C0C0C0] overflow-hidden bg-[#D3D3D3]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#536186]/10 blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C0C0C0] text-[#536186] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={14} /> Official Policy
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[#363636]">
            Privacy <span className="text-[#536186]">Policy</span>
          </h1>
          <p className="text-[#363636]/60 font-mono text-sm">Last Updated: {lastUpdated}</p>
        </div>
      </header>

      {/* CONTENT BODY */}
      <main className="container mx-auto max-w-4xl py-16 px-6 leading-relaxed">
        
        {/* Intro */}
        <AnimatedSection className="mb-16">
          <p className="text-lg text-[#363636]/80 mb-6 font-medium">
            <span className="text-[#363636] font-bold">Adswise Marketing</span> (“we,” “our,” “us”) values your trust and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.adswisemarketing.com" className="text-[#536186] font-bold hover:underline">www.adswisemarketing.com</a>, use our services, or interact with us through digital platforms, advertisements, forms, emails, or communication channels.
          </p>
          <div className="flex gap-4 p-5 bg-[#D3D3D3]/50 border-l-4 border-[#536186] rounded-r-xl">
            <AlertCircle className="text-[#536186] shrink-0 mt-1" size={20} />
            <p className="text-sm text-[#363636]/80 italic">
              By accessing or using our website and services, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue using our website and services.
            </p>
          </div>
        </AnimatedSection>

        {/* 1. Information Collection */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <UserCheck className="text-[#536186]" size={28} />
            <h2 className="text-2xl font-bold text-[#363636]">1. Information We Collect</h2>
          </div>
          <p className="mb-6 text-[#363636]/80 font-medium">We may collect personal and non-personal information in various ways, including when you visit our website, fill out a form, request a service, or communicate with us.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#D3D3D3]/30 p-6 rounded-2xl border border-[#C0C0C0]">
              <h3 className="text-[#536186] font-bold mb-3">a) Personal Information</h3>
              <ul className="text-sm space-y-2 text-[#363636]/80 font-medium">
                <li>• Full name & Company name</li>
                <li>• Email & Phone number</li>
                <li>• Business address & Website URL</li>
                <li>• Marketing budget or requirements</li>
                <li>• Data submitted via WhatsApp or Email</li>
              </ul>
            </div>
            <div className="bg-[#D3D3D3]/30 p-6 rounded-2xl border border-[#C0C0C0]">
              <h3 className="text-[#536186] font-bold mb-3">b) Non-Personal Information</h3>
              <ul className="text-sm space-y-2 text-[#363636]/80 font-medium">
                <li>• IP address & Browser version</li>
                <li>• Device type & Pages visited</li>
                <li>• Time spent on pages</li>
                <li>• Geographic location (approximate)</li>
                <li>• Referring URLs</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 2. How we use data */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-[#536186]" size={28} />
            <h2 className="text-2xl font-bold text-[#363636]">2. How We Use Your Information</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-[#363636]/80 font-medium">
            {[
              "Respond to inquiries and service requests",
              "Provide digital marketing services (SEO, Ads, Branding)",
              "Generate leads and manage client communication",
              "Improve website and user experience",
              "Send marketing proposals (only if you opt-in)",
              "Analyze traffic and ad performance",
              "Comply with legal requirements"
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#536186] mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[#363636] font-bold px-4 py-2 bg-[#D3D3D3]/50 border border-[#C0C0C0] rounded-lg inline-block">
            We do not sell, rent, or trade personal information to third parties.
          </p>
        </AnimatedSection>

        {/* 3 & 4. Tools and Cookies */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection className="bg-[#D3D3D3]/30 p-8 rounded-3xl border border-[#C0C0C0]">
            <Cookie className="text-[#536186] mb-4" size={32} />
            <h2 className="text-xl font-bold text-[#363636] mb-4">3. Cookies & Tracking</h2>
            <p className="text-sm text-[#363636]/80 font-medium">
              We use cookies to understand behavior, measure traffic, and improve content. You can disable cookies in your browser, though it may affect functionality.
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-[#D3D3D3]/30 p-8 rounded-3xl border border-[#C0C0C0]">
            <Share2 className="text-[#536186] mb-4" size={32} />
            <h2 className="text-xl font-bold text-[#363636] mb-4">4. Advertising & Analytics</h2>
            <p className="text-sm text-[#363636]/80 font-medium">
              We use tools like Google Analytics, Google Ads, Meta Ads, and LinkedIn Ads. These platforms collect data per their own privacy policies.
            </p>
          </AnimatedSection>
        </div>

        {/* 5, 6, 7 Security and Business */}
        <div className="space-y-6 mb-12">
          <AnimatedSection className="bg-white p-6 rounded-xl border border-[#C0C0C0] shadow-sm">
            <h2 className="text-lg font-bold text-[#363636] mb-2">5. Data Sharing and Disclosure</h2>
            <p className="text-sm text-[#363636]/80 font-medium">Information is shared only with trusted service providers, when required by law, or with client consent. All third parties must maintain confidentiality.</p>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-6 rounded-xl border border-[#C0C0C0] shadow-sm">
            <h2 className="text-lg font-bold text-[#363636] mb-2">6. Data Security</h2>
            <p className="text-sm text-[#363636]/80 font-medium">We take administrative and technical measures to prevent unauthorized access. Note that no internet transmission is 100% secure.</p>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-6 rounded-xl border border-[#C0C0C0] shadow-sm">
            <h2 className="text-lg font-bold text-[#363636] mb-2">7. Client and Business Information</h2>
            <p className="text-sm text-[#363636]/80 font-medium">All confidential business data shared during strategy discussions is treated as strictly confidential. NDAs may be executed where required.</p>
          </AnimatedSection>
        </div>

        {/* 8 - 13 Misc Sections */}
        <AnimatedSection className="grid md:grid-cols-2 gap-12 mb-16 border-t border-[#C0C0C0] pt-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-[#363636] flex items-center gap-2 mb-2"><ExternalLink size={18} className="text-[#536186]"/> 8. Third-Party Links</h3>
              <p className="text-sm text-[#363636]/80 font-medium">We are not responsible for the privacy practices of external sites linked on our website.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#363636] flex items-center gap-2 mb-2"><Mail size={18} className="text-[#536186]"/> 9. Marketing Communication</h3>
              <p className="text-sm text-[#363636]/80 font-medium">You may opt out of marketing emails or offers at any time by following unsubscribe instructions.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#363636] flex items-center gap-2 mb-2"><UserCheck size={18} className="text-[#536186]"/> 10. Children’s Privacy</h3>
              <p className="text-sm text-[#363636]/80 font-medium">We do not knowingly collect information from individuals under the age of 18.</p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-[#363636] flex items-center gap-2 mb-2"><Trash2 size={18} className="text-[#536186]"/> 11. Your Rights</h3>
              <p className="text-sm text-[#363636]/80 font-medium">You have the right to request access, correction, or deletion of your data, or withdraw consent.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#363636] flex items-center gap-2 mb-2"><Clock size={18} className="text-[#536186]"/> 12. Data Retention</h3>
              <p className="text-sm text-[#363636]/80 font-medium">Data is retained only as long as necessary for business purposes or legal obligations.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#363636] flex items-center gap-2 mb-2"><FileText size={18} className="text-[#536186]"/> 13. Policy Changes</h3>
              <p className="text-sm text-[#363636]/80 font-medium">We reserve the right to update this policy at any time. Updates will be posted on this page.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* 14. Contact Section */}
        <AnimatedSection>
          <div className="bg-[#363636] border border-[#536186]/50 p-10 rounded-[2.5rem] text-center text-white">
            <h2 className="text-2xl font-bold text-white mb-6">14. Contact Information</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-2">
                <Mail className="text-[#B0C4DE]" size={18} />
                <span className="text-sm font-medium">office@adswisemarketing.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-[#B0C4DE]" size={18} />
                <span className="text-sm font-medium">+91 97302 66648</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-[#B0C4DE]" size={18} />
                <span className="text-sm font-medium">www.adswisemarketing.com</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 pb-12 border-b border-[#C0C0C0]">
             <p className="text-[#363636]/60 italic text-sm font-medium">
                By using our website and services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
             </p>
          </div>
          
        </AnimatedSection>

      </main>
    </div>
  );
};

export default PrivacyPolicy;