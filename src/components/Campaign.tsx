// import React from "react";

// const Campaign = () => {
//   return (
//     <div id="campaign" className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob top-0 -left-20"></div>
//         <div className="absolute w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-0 right-20"></div>
//         <div className="absolute w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-40"></div>
//       </div>

//       <style>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>

//       {/* Content Container */}
//       <div className="relative z-10">
//         {/* Header */}
//         <header className="container mx-auto px-4 py-6">
//           <div className="flex justify-between items-center">
//             <div className="text-2xl font-bold">
//               <span className="text-yellow-400">PIT</span> Digital Marketing
//             </div>
//             <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
//               संपर्क साधा
//             </button>
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section className="container mx-auto px-4 py-16 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
//             <span className="text-yellow-400">LeadMagnet</span> – छोट्या व्यवसायांसाठी खास
//             <br />
//             Facebook Ads System – जे leads आणतात,
//             <br />
//             <span className="text-yellow-400">नाहीतर पैसे परत!</span>
//           </h1>
//         </section>

//         {/* Problem Section */}
//         <section className="container mx-auto px-4 py-12">
//           <div className="bg-gray-900 bg-opacity-80 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-800">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
//               तुमचा व्यवसाय नुकताच सुरू झाला आहे आणि ग्राहक मिळत नाहीत?
//             </h2>

//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl border border-red-800">
//                 <p className="text-lg text-red-300">❌ मार्केटिंगवर खर्च होतोय, पण रिस्पॉन्स नाही?</p>
//               </div>
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl border border-red-800">
//                 <p className="text-lg text-red-300">❌ पोस्ट करताय, पण त्यातून Leads येत नाहीत?</p>
//               </div>
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl border border-red-800">
//                 <p className="text-lg text-red-300">❌ पैसे घालवून Facebook वर Ad चालवताय?</p>
//               </div>
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl border border-red-800">
//                 <p className="text-lg text-red-300">❌ पण ग्राहक येत नाहीत?</p>
//               </div>
//             </div>

//             <div className="text-center">
//               <h3 className="text-2xl font-bold mb-6">
//                 तुम्ही जर Facebook वर ॲड चालवूनही खालील समस्यांना सामोरे जात असाल,
//                 <br />
//                 तर ही सिस्टिम तुमच्यासाठीच आहे
//               </h3>
//             </div>
//           </div>
//         </section>

//         {/* Pain Points */}
//         <section className="container mx-auto px-4 py-12">
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
//               <div className="text-4xl mb-4">💸</div>
//               <h3 className="text-xl font-bold mb-3 text-yellow-400">पैसे वाया</h3>
//               <p className="text-gray-300">₹5000 ॲड्सवर खर्च केले, पण फोन काही येत नाहीये.</p>
//             </div>

//             <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
//               <div className="text-4xl mb-4">💬</div>
//               <h3 className="text-xl font-bold mb-3 text-yellow-400">फक्त कमेंट्स</h3>
//               <p className="text-gray-300">फक्त 'Price?' अशा कमेंट्स येतात, खरे ग्राहक मिळत नाहीत.</p>
//             </div>

//             <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
//               <div className="text-4xl mb-4">📞</div>
//               <h3 className="text-xl font-bold mb-3 text-yellow-400">बनावट लीड्स</h3>
//               <p className="text-gray-300">20 लीड्स आल्या, पण 10 नंबर बंद, 5 Out of City आणि फक्त 5 Valid Calls.</p>
//             </div>

//             <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
//               <div className="text-4xl mb-4">📊</div>
//               <h3 className="text-xl font-bold mb-3 text-yellow-400">डेटा गोंधळ</h3>
//               <p className="text-gray-300">Facebook Ads चा स्कोर, CTR, CPM, Conversion याचा अर्थच कळत नाही.</p>
//             </div>
//           </div>
//         </section>

//         {/* Story Section */}
//         <section className="container mx-auto px-4 py-16">
//           <div className="bg-gradient-to-r from-red-900 to-red-700 p-8 md:p-12 rounded-2xl text-center">
//             <div className="text-6xl mb-6">😤</div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               "आपण Facebook वर ₹10K खर्च केला… Google वर ₹15K…"
//             </h2>
//             <p className="text-xl md:text-2xl mb-4">40 Leads आल्या – त्यातल्या 27 Fake… 8 Out of City…</p>
//             <p className="text-2xl md:text-3xl font-bold text-yellow-300">आणि शेवटी 5 Valid Calls.</p>
//             <p className="text-xl mt-6">म्हणजे ₹5000 खरं result… बाकी सगळं वाया!</p>
//           </div>
//         </section>

//         {/* Solution Statement */}
//         <section className="container mx-auto px-4 py-12">
//           <div className="text-center max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-400">
//               तुम्ही ॲड एजन्सी नाही, तर एक सिस्टिम शोधत आहात जी तुम्हाला खऱ्या अर्थाने मदत करेल.
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-300 mb-8">
//               ॲड बजेट वाढवून फायदा होत नाही… डेटा समजून घ्या, मगच तुमचं स्केलिंग सुरू होईल!
//             </p>
//             <p className="text-xl text-gray-200">
//               आमची सिस्टिम केवळ जाहिरात चालवत नाही, तर ती योग्य लोकांपर्यंत पोहोचवते – कमीतकमी पैशांत जास्त लीड्स मिळवून देते.
//             </p>
//           </div>
//         </section>

//         {/* Comparison Table */}
//         <section className="container mx-auto px-4 py-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
//             आमच्यात काय खास आहे?
//           </h2>

//           <div className="overflow-x-auto">
//             <table className="w-full bg-gray-900 bg-opacity-80 rounded-xl overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-800">
//                   <th className="px-6 py-4 text-left text-lg font-bold">वैशिष्ट्य</th>
//                   <th className="px-6 py-4 text-center text-lg font-bold">सामान्य एजन्सी</th>
//                   <th className="px-6 py-4 text-center text-lg font-bold text-yellow-400">LeadMagnet</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t border-gray-700">
//                   <td className="px-6 py-4">Facebook Ads</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                 </tr>
//                 <tr className="border-t border-gray-700 bg-gray-800 bg-opacity-50">
//                   <td className="px-6 py-4">Google Ads</td>
//                   <td className="px-6 py-4 text-center text-2xl">❌</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                 </tr>
//                 <tr className="border-t border-gray-700">
//                   <td className="px-6 py-4">लाईव्ह परफॉर्मन्स डॅशबोर्ड</td>
//                   <td className="px-6 py-4 text-center text-2xl">❌</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                 </tr>
//                 <tr className="border-t border-gray-700 bg-gray-800 bg-opacity-50">
//                   <td className="px-6 py-4">CPL ऑप्टिमायझेशन</td>
//                   <td className="px-6 py-4 text-center text-2xl">❌</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                 </tr>
//                 <tr className="border-t border-gray-700">
//                   <td className="px-6 py-4">फेक लीड रिमूव्हल</td>
//                   <td className="px-6 py-4 text-center text-2xl">❌</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                 </tr>
//                 <tr className="border-t border-gray-700 bg-gray-800 bg-opacity-50">
//                   <td className="px-6 py-4">डीप ऑडियन्स टार्गेटिंग</td>
//                   <td className="px-6 py-4 text-center text-2xl">❌</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                 </tr>
//                 <tr className="border-t border-gray-700">
//                   <td className="px-6 py-4">रियल-टाइम Power BI रिपोर्ट्स</td>
//                   <td className="px-6 py-4 text-center text-2xl">❌</td>
//                   <td className="px-6 py-4 text-center text-2xl">✅</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Value Proposition */}
//         <section className="container mx-auto px-4 py-12">
//           <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-8 md:p-12 rounded-2xl text-center text-black">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">आम्ही तुम्हाला फक्त लाईक्स मिळवून देत नाही</h2>
//             <p className="text-xl md:text-2xl font-semibold">
//               तर तुमच्या व्यवसायासाठी दर दिवसला <span className="text-3xl">20+</span> खरे ग्राहक मिळवून देतो.
//             </p>
//             <p className="text-lg mt-4">आमची ही सिस्टिम तुमच्या व्यवसायाला अचूक डेटाच्या मदतीने ऑनलाइन वाढवते.</p>
//           </div>
//         </section>

//         {/* How It Works */}
//         <section className="container mx-auto px-4 py-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">
//             आमची सिस्टिम कशी काम करते?
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl border border-gray-700">
//               <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
//               <h3 className="text-2xl font-bold mb-4">लँडिंग पेज तयार</h3>
//               <p className="text-gray-300 mb-4">
//                 आम्ही तुमच्यासाठी एक प्रभावी लँडिंग पेज आणि आकर्षक लीड मॅग्नेट (उदा. फ्री गाईड) तयार करतो.
//               </p>
//               <p className="text-yellow-400 font-semibold">➡️ यामुळे तुमचा ऑनलाइन प्रेझेन्स प्रोफेशनल दिसतो.</p>
//             </div>

//             <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl border border-gray-700">
//               <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
//               <h3 className="text-2xl font-bold mb-4">अचूक लक्ष्य</h3>
//               <p className="text-gray-300 mb-4">तुमच्या ग्राहकांचे व्यवहार आणि आवडीनिवडी यांचा अभ्यास करून अचूक लक्ष्य निश्चित करतो.</p>
//               <p className="text-yellow-400 font-semibold">➡️ तुमचा जाहिरात खर्च योग्य ग्राहकांपर्यंत पोहोचतो.</p>
//             </div>

//             <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl border border-gray-700">
//               <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
//               <h3 className="text-2xl font-bold mb-4">जाहिरात तयार</h3>
//               <p className="text-gray-300 mb-4">लक्ष वेधून घेणारे व्हिज्युअल आणि प्रभावी मजकूर तयार करतो.</p>
//               <p className="text-yellow-400 font-semibold">➡️ तुमच्या जाहिराती लोकांचे लक्ष वेधून घेतात आणि क्लिक्स वाढवतात.</p>
//             </div>

//             <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl border border-gray-700">
//               <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">4</div>
//               <h3 className="text-2xl font-bold mb-4">WhatsApp Integration</h3>
//               <p className="text-gray-300 mb-4">दररोज मिळालेल्या लीड्सची माहिती थेट तुमच्या WhatsApp आणि Google Sheet वर येते.</p>
//               <p className="text-yellow-400 font-semibold">➡️ तुम्ही प्रत्येक लीडचा मागोवा घेऊ शकता आणि फॉलो-अप सोपा होतो.</p>
//             </div>

//             <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl border border-gray-700">
//               <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6">5</div>
//               <h3 className="text-2xl font-bold mb-4">रिअल-टाइम डॅशबोर्ड</h3>
//               <p className="text-gray-300 mb-4">तुम्हाला फक्त PDF रिपोर्ट नाही, तर रिअल-टाइम डेटा दाखवणारा डॅशबोर्ड मिळतो.</p>
//               <p className="text-yellow-400 font-semibold">➡️ पैसा कुठे खर्च झाला आणि त्याचे काय परिणाम झाले, हे तुम्हाला स्पष्ट दिसते.</p>
//             </div>
//           </div>
//         </section>

//         {/* Success Story */}
//         <section className="container mx-auto px-4 py-16">
//           <div className="bg-gradient-to-br from-green-900 to-green-700 p-8 md:p-12 rounded-2xl">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//               आमचा Ads System घेतल्यापासून क्लायंटला<br />रोज खरेदीस तयार लीड्स मिळतात
//             </h2>

//             <div className="grid md:grid-cols-3 gap-6 text-center">
//               <div className="bg-black bg-opacity-40 p-6 rounded-xl">
//                 <div className="text-4xl mb-2">✅</div>
//                 <p className="text-2xl font-bold">दररोज 20+ क्वालिटी लीड्स</p>
//               </div>
//               <div className="bg-black bg-opacity-40 p-6 rounded-xl">
//                 <div className="text-4xl mb-2">✅</div>
//                 <p className="text-2xl font-bold">ग्राहक स्वतःहून WhatsApp करतायत</p>
//               </div>
//               <div className="bg-black bg-opacity-40 p-6 rounded-xl">
//                 <div className="text-4xl mb-2">✅</div>
//                 <p className="text-2xl font-bold">खर्चाचं 10X रिटर्न मिळतंय!</p>
//               </div>
//             </div>

//             <div className="text-center mt-8">
//               <p className="text-2xl font-bold">तुमचाही नंबर लावा – आजपासूनच! 🚀</p>
//             </div>
//           </div>
//         </section>

//         {/* Case Studies */}
//         <section className="container mx-auto px-4 py-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">यशोगाथा - खरे परिणाम</h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-8 rounded-xl">
//               <div className="text-5xl mb-4">📚</div>
//               <h3 className="text-2xl font-bold mb-4">कोचिंग क्लास</h3>
//               <p className="text-lg mb-4">पिंपरीमधील एका कोचिंग क्लासला 10 दिवसांत 70 पेक्षा जास्त लीड्स मिळाल्या</p>
//               <div className="bg-black bg-opacity-40 p-4 rounded-lg">
//                 <p className="text-2xl font-bold text-yellow-400">₹8 प्रति लीड</p>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-purple-900 to-purple-700 p-8 rounded-xl">
//               <div className="text-5xl mb-4">🏢</div>
//               <h3 className="text-2xl font-bold mb-4">रिअल इस्टेट</h3>
//               <p className="text-lg mb-4">एका रिअल इस्टेट क्लायंटला 15 दिवसांत 100 पेक्षा जास्त उच्च-गुणवत्तेच्या लीड्स मिळाल्या</p>
//               <div className="bg-black bg-opacity-40 p-4 rounded-lg">
//                 <p className="text-2xl font-bold text-yellow-400">100+ लीड्स</p>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-pink-900 to-pink-700 p-8 rounded-xl">
//               <div className="text-5xl mb-4">🦷</div>
//               <h3 className="text-2xl font-bold mb-4">डेंटिस्ट</h3>
//               <p className="text-lg mb-4">एका डेंटिस्टला त्यांच्या ₹199 च्या ऑफरमुळे 80 पेक्षा जास्त नवीन पेशंट्स मिळाले</p>
//               <div className="bg-black bg-opacity-40 p-4 rounded-lg">
//                 <p className="text-2xl font-bold text-yellow-400">80+ पेशंट्स</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Power BI Dashboard */}
//         <section className="container mx-auto px-4 py-16">
//           <div className="bg-gray-900 bg-opacity-80 p-8 md:p-12 rounded-2xl border border-yellow-400">
//             <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-400">Power BI डॅशबोर्ड - डेटा तुमच्या हातात</h2>

//             <p className="text-xl text-center mb-8 text-gray-300">
//               LeadMagnet मध्ये, आम्ही केवळ लीड्स देण्यावर थांबत नाही.
//               <br />
//               आम्ही तुमच्या व्यवसायासाठी असा Power BI डॅशबोर्ड तयार करतो जिथे तुम्ही सहजपणे पाहू शकता:
//             </p>

//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl">
//                 <h4 className="text-xl font-bold mb-3 text-yellow-400">✅ लीड सोर्स ट्रॅकिंग</h4>
//                 <p className="text-gray-300">कोठून अधिक लीड्स येतात हे स्पष्ट करतो</p>
//               </div>
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl">
//                 <h4 className="text-xl font-bold mb-3 text-yellow-400">✅ Ad परफॉर्मन्स</h4>
//                 <p className="text-gray-300">कोणत्या जाहिरातीवर सर्वाधिक क्लिक्स येतात</p>
//               </div>
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl">
//                 <h4 className="text-xl font-bold mb-3 text-yellow-400">✅ CPL आणि CPM विश्लेषण</h4>
//                 <p className="text-gray-300">खर्च प्रति लीड आणि इंप्रेशन ट्रॅक करा</p>
//               </div>
//               <div className="bg-black bg-opacity-60 p-6 rounded-xl">
//                 <h4 className="text-xl font-bold mb-3 text-yellow-400">✅ फेक लीड डिटेक्शन</h4>
//                 <p className="text-gray-300">बनावट लीड्स किती आहेत हे ओळखा</p>
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-xl text-black text-center">
//               <p className="text-xl font-bold">➡️ "Low Budget – High Quality Leads Funnel"</p>
//               <p className="mt-2">कमी बजेटमध्येही उच्च-गुणवत्तेच्या लीड्स मिळवा</p>
//             </div>
//           </div>
//         </section>

//         {/* Why LeadMagnet (completed) */}
//         <section className="container mx-auto px-4 py-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             <span className="text-yellow-400">LeadMagnet</span> का निवडावे?
//           </h2>

//           <div className="max-w-4xl mx-auto space-y-8">
//             <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl border border-gray-700">
//               <h3 className="text-2xl font-bold mb-4 text-yellow-400">फेसबुकवर चूक कुठे होते?</h3>
//               <div className="space-y-3 text-gray-300">
//                 <p>❌ जाहिरात कोण पाहतोय याची त्यांना माहिती नसते.</p>
//                 <p>❌ लक्ष वेधणारा क्रिएटिव्ह नसल्यामुळे क्लिक होते पण कन्व्हर्जन होत नाही.</p>
//                 <p>❌ लीड क्वालिटीची चाचणी न करता पूर्ण बजेट एका ऑडियन्सवर खर्च होते.</p>
//                 <p>❌ डेटा न बघता scaling केले तर फेक लीड्स आणि उंच CPL मिळतो.</p>
//               </div>
//             </div>

//             <div className="bg-gray-900 bg-opacity-80 p-8 rounded-xl border border-gray-700">
//               <h3 className="text-2xl font-bold mb-4 text-yellow-400">LeadMagnet मध्ये काय वेगळं आहे?</h3>
//               <ul className="list-disc list-inside text-gray-300 space-y-2">
//                 <li>डेटा-ड्रिव्हन ऑडियन्स बिल्डिंग – फेक लीड कमी, क्वालिटी जास्त.</li>
//                 <li>रिअल-टाइम डॅशबोर्ड आणि WhatsApp नोटिफिकेशन्स.</li>
//                 <li>CPL ऑप्टिमायझेशन आणि फेक-लीड फिल्टरिंग.</li>
//                 <li>इंटिग्रेशनसह सहज फॉलो-अप व रिपोर्टिंग (Google Sheets / Power BI).</li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-8 rounded-xl text-black text-center">
//               <h3 className="text-2xl font-bold mb-2">तुम्हाला लगेच परिणाम पाहायचे आहेत?</h3>
//               <p className="mb-4">आम्ही सुरुवातीच्या 14 दिवसांत टेस्ट बजेटवर स्पष्ट ROI दाखवतो — नाहीतर रक्कम परत.</p>
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <a
//                   href="#contact"
//                   className="bg-black text-yellow-400 px-8 py-3 rounded-full font-bold hover:opacity-90 transition"
//                 >
//                   मोफत ऑडिट करा
//                 </a>
//                 <a
//                   href="#pricing"
//                   className="bg-black/60 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
//                 >
//                   पॅकेज बघा
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <section id="contact" className="container mx-auto px-4 py-16">
//           <div className="bg-gradient-to-r from-purple-900 to-pink-700 p-10 rounded-2xl text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">तयार आहात का वाढवायला?</h2>
//             <p className="text-lg text-gray-200 mb-6">आमचा तज्ञ संघ तुमचे मार्केटिंग पायलट चालू करण्यासाठी तयार आहे.</p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <a href="https://wa.me/919999999999" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold">
//                 WhatsApp वर संपर्क करा
//               </a>
//               <a href="tel:+919999999999" className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold">
//                 कॉल करा
//               </a>
//             </div>
//             <p className="mt-6 text-sm text-gray-300">किंवा खाली आपला नंबर सोडा आणि आम्ही संपर्क करू.</p>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-gray-900 bg-opacity-90 border-t border-gray-800">
//           <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
//             <div>
//               <div className="text-xl font-bold"><span className="text-yellow-400">PIT</span> Digital Marketing</div>
//               <div className="text-sm text-gray-400">पत्ता: पुणे, महाराष्ट्र</div>
//               <div className="text-sm text-gray-400">ईमेल: hello@pitdm.com | फोन: +91 99999 99999</div>
//             </div>
//             <div className="text-sm text-gray-400">© {new Date().getFullYear()} PIT Digital Marketing. सर्व हक्क राखीव.</div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Campaign;
