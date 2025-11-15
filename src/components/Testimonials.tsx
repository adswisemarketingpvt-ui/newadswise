// import { motion } from 'framer-motion';
// import { Star, Quote } from 'lucide-react';

// function Testimonials() {
//   const testimonials = [
//     {
//       name: 'Sarah Johnson',
//       role: 'CEO, TechStart Inc',
//       image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
//       content: 'MageMarketer transformed our digital presence completely. Our leads increased by 300% in just three months!',
//       rating: 5
//     },
//     {
//       name: 'Michael Chen',
//       role: 'Marketing Director, GrowthCo',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
//       content: 'The ROI we\'ve seen from their campaigns is incredible. They truly understand how to drive results.',
//       rating: 5
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Founder, Boutique Fashion',
//       image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
//       content: 'Professional, data-driven, and creative. The perfect partner for scaling our e-commerce business.',
//       rating: 5
//     }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
//             What Our Clients Say
//           </h2>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Don't just take our word for it. Here's what our clients have to say about working with us.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300"
//             >
//               <Quote className="w-10 h-10 text-blue-600 mb-4" />
//               <div className="flex mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
//               <div className="flex items-center">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   loading="lazy"
//                   className="w-14 h-14 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <div className="font-bold text-gray-900">{testimonial.name}</div>
//                   <div className="text-gray-600 text-sm">{testimonial.role}</div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;
