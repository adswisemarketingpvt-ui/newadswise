// import React, { useState, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Send, MapPin, Mail, Phone, Clock, DollarSign, Briefcase } from 'lucide-react';

// // Color Constants based on the original component's palette
// const ACCENT_COLOR = '#8A2BE2'; // Algorithm Violet
// const SECONDARY_COLOR = '#FFD700'; // Gold

// // Type Definitions
// interface ContactFormData {
//     name: string;
//     email: string;
//     phone: string;
//     message: string;
//     budget: string;
// }

// // ============================================================================
// // ANIMATION UTILITIES (Framer Motion)
// // ============================================================================

// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1,
//         },
//     },
// };

// const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//         },
//     },
// };

// // ============================================================================
// // MAIN COMPONENT
// // ============================================================================

// const ContactForm: React.FC = () => {
//     const [formData, setFormData] = useState<ContactFormData>({
//         name: '', email: '', phone: '', message: '', budget: ''
//     });

//     const formRef = useRef(null);
//     // Trigger animations when the form comes into view
//     const isInView = useInView(formRef, { once: true, margin: "-100px" });

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
        
//         console.log('Form Submitted:', formData);
        
//         // Simple success display logic for this single-file component
//         const messageBox = document.getElementById('messageBox');
//         if (messageBox) {
//             messageBox.style.display = 'block';
//             setTimeout(() => { messageBox.style.display = 'none'; }, 3000);
//         }

//         // Reset form
//         setFormData({ name: '', email: '', phone: '', message: '', budget: '' });
//     };

//     // Helper component for staggered input animation
//     const AnimatedInput = ({ children }: { children: React.ReactNode }) => (
//         <motion.div variants={itemVariants}>{children}</motion.div>
//     );

//     // ============================================================================
//     // SUB-COMPONENTS
//     // ============================================================================

//     const ContactDetails = () => (
//         <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="p-8 rounded-2xl bg-slate-900 border border-slate-800 h-full shadow-lg"
//         >
//             <h3 className="text-3xl font-extrabold text-white mb-6">Let's Connect</h3>
//             <p className="text-slate-400 mb-8">
//                 Ready to stop scattered spending? Reach out to our strategy team to discuss your next high-ROI campaign.
//             </p>

//             <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                     <Mail size={24} style={{ color: SECONDARY_COLOR }} className="flex-shrink-0 mt-1" />
//                     <div>
//                         <h4 className="font-bold text-white">Email Us</h4>
//                         <p className="text-slate-400 hover:text-white transition cursor-pointer">strategy@adswisestrategy.com</p>
//                     </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                     <Phone size={24} style={{ color: SECONDARY_COLOR }} className="flex-shrink-0 mt-1" />
//                     <div>
//                         <h4 className="font-bold text-white">Call Us</h4>
//                         <p className="text-slate-400 hover:text-white transition cursor-pointer">+91 98765 43210</p>
//                     </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                     <Clock size={24} style={{ color: SECONDARY_COLOR }} className="flex-shrink-0 mt-1" />
//                     <div>
//                         <h4 className="font-bold text-white">Business Hours</h4>
//                         <p className="text-slate-400">Mon-Fri, 10am - 6pm IST</p>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );

//     const MapSection = () => ( // Renamed from MapPlaceholder
//         <section className="py-20 bg-black border-t border-slate-800">
//             <motion.div 
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6 }}
//                 className="container mx-auto px-4 sm:px-6 lg:px-8"
//             >
//                 <h2 className="text-3xl font-bold text-center mb-6 text-white">Our Strategic Base</h2>
//                 <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
//                     Global media strategy managed from our central hub, leveraging real-time data across all major markets.
//                 </p>
                
//                 <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
//                     {/* Stylized Dark Map Grid Background (Data Flow Visualization) */}
//                     <div className="absolute inset-0 bg-slate-900 opacity-70">
//                         {/* Abstract animated lines simulating data flow */}
//                         <motion.div 
//                             animate={{ opacity: [0.3, 0.7, 0.3] }} 
//                             transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                             className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-black/20"
//                         />
//                         <div className="absolute inset-0 bg-[length:20px_20px] opacity-10" style={{ backgroundImage: "linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)" }} />
//                     </div>
                    
//                     {/* Map Pin with Animation */}
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
//                         <motion.div
//                             animate={{ y: [0, -20, 0] }}
//                             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                             className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
//                             style={{ backgroundColor: ACCENT_COLOR, boxShadow: `0 0 15px 5px ${ACCENT_COLOR}66` }}
//                         >
//                             <MapPin size={28} className="text-white" />
//                         </motion.div>
//                         <h4 className="mt-6 text-xl font-bold text-white bg-black/70 backdrop-blur-sm p-3 rounded-xl border border-slate-700 shadow-lg flex items-center gap-2">
//                             <Briefcase size={20} className="text-yellow-400"/> Pune, India (Global Hub)
//                         </h4>
//                     </div>
//                 </div>
//             </motion.div>
//         </section>
//     );

//     const Footer = () => (
//         <footer className="bg-slate-950 text-slate-500 py-6 border-t border-slate-900">
//             <div className="container mx-auto px-4 text-center text-sm">
//                 © {new Date().getFullYear()} Adswise Strategy. All rights reserved. | <span className="text-indigo-400">Media Planning Specialists</span>
//             </div>
//         </footer>
//     );

//     // ============================================================================
//     // MAIN RENDER
//     // ============================================================================

//     return (
//         <div className="font-sans bg-slate-950 text-slate-100 min-h-screen">
            
//             {/* Success Message Box */}
//             <div id="messageBox" className="fixed top-4 right-4 z-50 p-4 rounded-lg bg-green-600 text-white font-semibold shadow-xl hidden transition-opacity duration-300">
//                 🚀 Request Sent! We'll be in touch soon.
//             </div>

//             {/* Contact Section */}
//             <section className="py-20 bg-slate-950 relative overflow-hidden">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
//                     <motion.div
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         className="text-center mb-16"
//                     >
//                         <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//                             Strategize Your Growth
//                         </h1>
//                         <p className="text-xl text-slate-400">
//                             Fill out the form below to receive a custom media strategy blueprint.
//                         </p>
//                     </motion.div>

//                     <div ref={formRef} className="grid lg:grid-cols-3 gap-10 items-stretch">
                        
//                         {/* Contact Details Column */}
//                         <div className="lg:col-span-1">
//                             <ContactDetails />
//                         </div>

//                         {/* Form Column */}
//                         <div className="lg:col-span-2">
//                             <motion.form 
//                                 onSubmit={handleSubmit} 
//                                 variants={containerVariants}
//                                 initial="hidden"
//                                 animate={isInView ? "visible" : "hidden"}
//                                 className="bg-black shadow-2xl rounded-2xl p-8 md:p-12 border border-slate-800"
//                             >
//                                 <h3 className="text-2xl font-bold mb-8 text-white border-b border-slate-800 pb-4">
//                                     Project Details
//                                 </h3>
                                
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                                     <AnimatedInput>
//                                         <label className="block text-sm font-medium text-slate-400 mb-1">Your Name *</label>
//                                         <input 
//                                             required 
//                                             name="name" 
//                                             value={formData.name}
//                                             onChange={handleInputChange} 
//                                             className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
//                                             placeholder="John Doe" 
//                                         />
//                                     </AnimatedInput>
                                    
//                                     <AnimatedInput>
//                                         <label className="block text-sm font-medium text-slate-400 mb-1">Business Email *</label>
//                                         <input 
//                                             required 
//                                             name="email" 
//                                             type="email" 
//                                             value={formData.email}
//                                             onChange={handleInputChange} 
//                                             className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
//                                             placeholder="contact@brand.com" 
//                                         />
//                                     </AnimatedInput>

//                                     <AnimatedInput>
//                                         <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
//                                         <input 
//                                             name="phone" 
//                                             type="tel" 
//                                             value={formData.phone}
//                                             onChange={handleInputChange} 
//                                             className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
//                                             placeholder="+91 12345 67890" 
//                                         />
//                                     </AnimatedInput>

//                                     <AnimatedInput>
//                                         <label className="block text-sm font-medium text-slate-400 mb-1 flex items-center gap-2">
//                                             <DollarSign size={16} className="text-yellow-400" /> Target Monthly Ad Budget *
//                                         </label>
//                                         <select 
//                                             required 
//                                             name="budget" 
//                                             value={formData.budget}
//                                             onChange={handleInputChange} 
//                                             className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition appearance-none"
//                                         >
//                                             <option value="">Select Range</option>
//                                             <option value="<1L">Under ₹1 Lakh</option>
//                                             <option value="1L-5L">₹1 Lakh - ₹5 Lakh</option>
//                                             <option value="5L-15L">₹5 Lakh - ₹15 Lakh</option>
//                                             <option value="15L+">₹15 Lakh+</option>
//                                         </select>
//                                     </AnimatedInput>
//                                 </div>

//                                 <AnimatedInput>
//                                     <div className="mb-8">
//                                         <label className="block text-sm font-medium text-slate-400 mb-1">Tell us about your project or goals *</label>
//                                         <textarea 
//                                             required 
//                                             name="message" 
//                                             rows={4}
//                                             value={formData.message}
//                                             onChange={handleInputChange} 
//                                             className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
//                                             placeholder="What products or services do you offer, and what results are you hoping to achieve with media buying?" 
//                                         />
//                                     </div>
//                                 </AnimatedInput>

//                                 <AnimatedInput>
//                                     <motion.button 
//                                         type="submit" 
//                                         whileHover={{ scale: 1.02, boxShadow: `0 10px 20px rgba(138, 43, 226, 0.4)` }}
//                                         whileTap={{ scale: 0.98 }}
//                                         className="w-full py-4 rounded-lg text-white font-bold text-lg transition duration-200 flex items-center justify-center gap-3" 
//                                         style={{ backgroundColor: ACCENT_COLOR }}
//                                     >
//                                         <Send size={20} />
//                                         <span>Submit Strategy Request</span>
//                                     </motion.button>
//                                 </AnimatedInput>
//                             </motion.form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
            
//             {/* Map Section (Bottom of Page) */}
//             <MapSection />

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// // Ensure the main component is exported for rendering
// export default ContactForm;