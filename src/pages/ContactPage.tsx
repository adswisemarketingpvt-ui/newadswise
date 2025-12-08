import React, { useState, useEffect } from "react";
import { Mail, Phone, Facebook,  Instagram, Linkedin } from "lucide-react";
import SEO from "../components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      console.error("Validation failed: name, email and message are required.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const payload = {
        service_id: "service_t4agn8t",
        template_id: "template_mzyt4bl",
        user_id: "8Z9vTXA5d-P-_FP4i",

        template_params: {
          name: formData.name, // maps to {{name}}
          email: formData.email, // maps to {{email}}
          number: formData.number, // maps to {{number}}
          message: formData.message, // maps to {{message}}
        },
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const text = await response.text();
      console.log("EmailJS response:", response.status, text);

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Decorative blocks */}
      <SEO
  title="Contact Us | AdsWise Marketing"
  description="Contact AdsWise Marketing for advertising, branding and digital marketing solutions."
  url="https://www.adswisemarketing.com/contact"
/>

      <div className="absolute top-32 right-0 w-48 h-32 bg-orange-500 opacity-80 animate-pulse"></div>
      {/* <div
        className="absolute bottom-0 left-0 w-64 h-48 bg-yellow-400 opacity-80 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div> */}
      <div className="absolute top-0 left-0 w-48 h-12 bg-orange-600 opacity-60"></div>
      {/* <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 opacity-60 hidden lg:block"></div> */}

      <div
        className={`container mx-auto px-4 py-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto my-8 md:my-16">
          <div className="bg-neutral-950 text-white shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-12 py-12 md:py-20 relative">
              {/* Left Content */}
              <div className="relative z-10 space-y-10">
                <div
                  className={`transition-all duration-700 delay-300 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                    Contact Us<span className="text-orange-500">.</span>
                  </h1>
                </div>

                <div
                  className={`border-l-4 border-orange-500 pl-6 space-y-6 transition-all duration-700 delay-500 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <div>
                    <h3 className="text-sm text-gray-400 mb-3">Address</h3>
                    <div className="space-y-1 text-base md:text-lg">
                      <p className="font-semibold">Thergaon</p>
                      <p>Pune, Maharashtra</p>
                      <p>411033</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400 mb-3">Contacts</h3>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                        <Mail size={16} /> office@adswisemarketing.com
                      </p>
                      <p className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                        <Phone size={16} /> +91 9730266648
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div
                  className={`flex gap-4 transition-all duration-700 delay-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {[
                    {
                      icon: Facebook,
                      url: "https://www.facebook.com/61578110506688",
                    },
                    { icon: Linkedin, url: "https://in.linkedin.com/company/adswise-marketing" },
                    {
                      icon: Instagram,
                      url: "https://www.instagram.com/reel/DQZNxBniIGH/",
                    },
                  ].map(({ icon: Icon, url }, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div
                className={`relative z-10 transition-all duration-700 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <div className="relative border-2 border-orange-500 p-1">
                  {/* Corners */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-orange-500"></div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-orange-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-orange-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-orange-500"></div>

                  <div className="bg-neutral-900 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                      Contact form
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs text-gray-400 mb-2 uppercase">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-neutral-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                          placeholder="your name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-gray-400 mb-2 uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-neutral-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                          placeholder="abc@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-gray-400 mb-2 uppercase">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          name="number"
                          value={formData.number}
                          onChange={handleChange}
                          className="w-full bg-neutral-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
                          placeholder="+91 12345 67890"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-gray-400 mb-2 uppercase">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full bg-neutral-800 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider disabled:opacity-50"
                      >
                        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                      </button>

                      {submitStatus === "success" && (
                        <div className="bg-yellow-500 text-black font-semibold px-4 py-3 text-center">
                          Message sent successfully!
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="bg-red-500 text-white font-semibold px-4 py-3 text-center">
                          Failed to send message. Try again.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <section className="w-full border-t border-orange-500 mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto overflow-hidden rounded-md shadow-lg">
            <div className="w-full h-80 md:h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30248.59689364553!2d73.75014732464078!3d18.615713550497816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b909d331ee29%3A0x14a8ae0caf64c564!2sThergaon%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033!5e0!3m2!1sen!2sin!4v1763208883662!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
