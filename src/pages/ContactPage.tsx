// import React, { useState } from 'react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
//       {/* Decorative plus signs */}
//       <div className="absolute top-12 right-12 text-yellow-400 text-6xl font-light opacity-80">+</div>
//       <div className="absolute top-1/2 right-12 text-yellow-400 text-6xl font-light opacity-80 hidden md:block">+</div>
//       <div className="absolute bottom-1/4 right-1/3 text-yellow-400 text-6xl font-light opacity-80 hidden lg:block">+</div>

//       {/* World map background */}
//       <div className="absolute inset-0 opacity-10">
//         <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
//           <path d="M100,150 L120,140 L140,145 L160,135 L180,140 L200,130 L220,135 L240,125 M300,180 L320,170 L340,175 L360,165 M400,200 L420,190 L440,195 L460,185 L480,190 M500,160 L520,150 L540,155 L560,145 L580,150 M600,220 L620,210 L640,215 L660,205 M700,180 L720,170 L740,175 L760,165 L780,170 M150,250 L170,240 L190,245 L210,235 M350,280 L370,270 L390,275 L410,265 M550,300 L570,290 L590,295 L610,285" 
//                 stroke="currentColor" 
//                 fill="none" 
//                 strokeWidth="1"
//                 className="text-gray-700"
//           />
//           <circle cx="200" cy="140" r="2" fill="currentColor" className="text-gray-600" />
//           <circle cx="450" cy="195" r="2" fill="currentColor" className="text-gray-600" />
//           <circle cx="650" cy="215" r="2" fill="currentColor" className="text-gray-600" />
//           <circle cx="750" cy="175" r="2" fill="currentColor" className="text-gray-600" />
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* Left sidebar navigation */}
//           <div className="lg:col-span-1 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
//             <button className="w-10 h-10 flex-shrink-0 bg-yellow-400 text-neutral-900 flex items-center justify-center text-sm font-bold hover:bg-yellow-300 transition-colors">
//               01
//             </button>
//             {[2, 3, 4, 5, 6].map((num) => (
//               <button
//                 key={num}
//                 className="w-10 h-10 flex-shrink-0 border border-gray-700 text-gray-500 flex items-center justify-center text-sm hover:border-yellow-400 hover:text-yellow-400 transition-colors"
//               >
//                 0{num}
//               </button>
//             ))}
//           </div>

//           {/* Main content */}
//           <div className="lg:col-span-6">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
//               Contact <span className="text-yellow-400">us</span>
//             </h1>
//             <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-12">
//               Ask for a quotation from us!
//             </p>

//             <div className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border-b border-gray-700 py-2 px-0 text-white focus:border-yellow-400 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border-b border-gray-700 py-2 px-0 text-white focus:border-yellow-400 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full bg-transparent border-b border-gray-700 py-2 px-0 text-white focus:border-yellow-400 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
//                   Your message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full bg-transparent border-b border-gray-700 py-2 px-0 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
//                 />
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="bg-yellow-400 text-neutral-900 px-8 py-3 font-bold text-sm md:text-base hover:bg-yellow-300 transition-colors mt-4"
//               >
//                 SEND
//               </button>
//             </div>
//           </div>

//           {/* Right sidebar - Contact info */}
//           <div className="lg:col-span-5 space-y-8 md:space-y-12">
//             <div className="bg-neutral-800 bg-opacity-50 p-6 md:p-8 backdrop-blur-sm">
//               <h3 className="text-yellow-400 text-sm font-semibold mb-4 md:mb-6">
//                 Contact Information
//               </h3>
              
//               <div className="space-y-4 md:space-y-6">
//                 <div>
//                   <p className="text-gray-400 text-xs md:text-sm mb-1">Company name</p>
//                   <p className="text-white text-sm md:text-base">InnovaTech Solutions Ltd.</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-400 text-xs md:text-sm mb-1">Address</p>
//                   <p className="text-white text-sm md:text-base">
//                     123 Tech Avenue, Silicon Valley<br />
//                     CA 94025, United States
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-gray-400 text-xs md:text-sm mb-1">Phone number</p>
//                   <p className="text-white text-sm md:text-base">+1 (555) 123-4567</p>
//                 </div>

//                 <div>
//                   <p className="text-gray-400 text-xs md:text-sm mb-1">Email</p>
//                   <p className="text-white text-sm md:text-base">contact@innovatech.com</p>
//                 </div>

//                 <div className="pt-4 md:pt-6">
//                   <div className="flex gap-4">
//                     {['FB', 'TW', 'IG', 'LI'].map((social) => (
//                       <button
//                         key={social}
//                         className="w-8 h-8 md:w-10 md:h-10 border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition-colors flex items-center justify-center text-xs md:text-sm"
//                       >
//                         {social}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom navigation dots */}
//             <div className="flex gap-2 justify-center lg:justify-start">
//               <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
//               <div className="w-2 h-2 rounded-full bg-gray-700"></div>
//               <div className="w-2 h-2 rounded-full bg-gray-700"></div>
//               <div className="w-2 h-2 rounded-full bg-gray-700"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS integration
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          template_id: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          user_id: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'MountainPoint',
          }
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Decorative green blocks */}
      <div className="absolute top-32 right-0 w-48 h-32 bg-green-400 opacity-80 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-48 bg-green-400 opacity-80 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-0 left-0 w-48 h-12 bg-gray-400 opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-200 opacity-60 hidden lg:block"></div>

      {/* Main Container */}
      <div className={`container mx-auto px-4 py-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto my-8 md:my-16">
          <div className="bg-neutral-900 text-white shadow-2xl overflow-hidden">
            {/* Header */}
            <header className="px-6 md:px-12 py-6 flex flex-wrap items-center justify-between border-b border-gray-800">
              <div className="text-2xl md:text-3xl font-bold">
                Mountain<span className="text-green-400">Point</span>.
              </div>
              <nav className="flex gap-6 md:gap-8 mt-4 md:mt-0 text-sm">
                <a href="#" className="hover:text-green-400 transition-colors">about us</a>
                <a href="#" className="hover:text-green-400 transition-colors">products</a>
                <a href="#" className="underline hover:text-green-400 transition-colors">contact us</a>
              </nav>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-12 py-12 md:py-20 relative">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg viewBox="0 0 800 600" className="w-full h-full">
                  <text x="100" y="100" className="text-xs fill-current">Brooklyn</text>
                  <text x="200" y="150" className="text-xs fill-current">Manhattan</text>
                  <text x="150" y="200" className="text-xs fill-current">Queens</text>
                  <text x="300" y="250" className="text-xs fill-current">Empire Blvd</text>
                  <text x="250" y="300" className="text-xs fill-current">Prospect Park</text>
                  <circle cx="300" cy="200" r="3" className="fill-current opacity-50" />
                  <circle cx="400" cy="250" r="3" className="fill-current opacity-50" />
                  <line x1="100" y1="150" x2="500" y2="300" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                  <line x1="200" y1="100" x2="400" y2="350" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </div>

              {/* Left Side - Contact Info */}
              <div className="relative z-10 space-y-8 md:space-y-12">
                <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    Contact Us<span className="text-green-400">.</span>
                  </h1>
                </div>

                <div className={`border-l-4 border-green-400 pl-6 space-y-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-3">Store hours</h3>
                    <div className="space-y-1 text-base md:text-lg">
                      <p className="font-semibold">507-495 Flatbush Ave</p>
                      <p>New York, Brooklyn</p>
                      <p>NY 11225</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400 mb-3">Contacts</h3>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 hover:text-green-400 transition-colors">
                        <Mail size={16} />
                        mountain@point.com
                      </p>
                      <p className="flex items-center gap-2 hover:text-green-400 transition-colors">
                        <Phone size={16} />
                        415 500 7665
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className={`flex gap-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <a href="#" className="w-10 h-10 border border-gray-700 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all flex items-center justify-center group">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-700 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all flex items-center justify-center group">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 border border-gray-700 hover:border-green-400 hover:bg-green-400 hover:text-black transition-all flex items-center justify-center group">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className={`relative z-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative border-2 border-green-400 p-1">
                  {/* Corner decorations */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-green-400"></div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-green-400"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-green-400"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-green-400"></div>

                  <div className="bg-neutral-800 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact form</h2>

                    <div className="space-y-6">
                      <div className="group">
                        <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-neutral-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                          placeholder="John"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-neutral-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full bg-neutral-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-4 px-8 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                      >
                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                      </button>

                      {submitStatus === 'success' && (
                        <div className="bg-green-500 text-white px-4 py-3 text-center animate-pulse">
                          Message sent successfully!
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="bg-red-500 text-white px-4 py-3 text-center animate-pulse">
                          Failed to send message. Please try again.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="px-6 md:px-12 py-6 border-t border-gray-800 text-center text-sm text-gray-500">
              © 2020 MountainPoint.
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;