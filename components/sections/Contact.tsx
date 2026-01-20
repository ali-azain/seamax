import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Printer } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-[#FDFCF8] pt-24 pb-0 relative">

            {/* 1. Header Section */}
            <div className="container mx-auto px-6 mb-16">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4 uppercase tracking-tight">
                            Contact Us
                        </h2>
                        <p className="text-[#64748B] text-lg font-light">
                            We are waiting for you to get in touch with us
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 2. Map Section - Full Width */}
            <div className="w-full h-[400px] md:h-[500px] bg-[#E2E0D9] relative grayscale-[80%] invert-[0] contrast-125 border-y border-[#0A2540]/10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.686522784568!2d66.97453477604928!3d24.84033324605929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ddc07251757%3A0xe507c577035f2129!2sAl%20Rehman%20Trade%20Center!5e0!3m2!1sen!2s!4v1705600000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                ></iframe>
            </div>

            {/* 3. Content Section (Office Info + Form) */}
            <div className="container mx-auto px-6 -mt-24 relative z-10 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left: Office Card */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 shadow-2xl shadow-[#0A2540]/5 rounded-none border-l-4 border-[#0A2540]"
                        >
                            <h3 className="text-2xl font-bold text-[#0A2540] mb-8">Our Office</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#0A2540] mb-2">SEAMAX MARINE GROUP.</h4>
                                    <div className="flex items-start gap-4 text-[#64748B] text-sm leading-relaxed">
                                        <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                                        <p>
                                            Suite # 4, Al Rehman Trade Avenue<br />
                                            15 Timber Pond, Keamari<br />
                                            Karachi, Pakistan
                                        </p>
                                    </div>
                                </div>

                                <div className="h-px bg-[#F1F5F9] my-6" />

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-[#64748B] text-sm">
                                        <Phone className="w-5 h-5 shrink-0" />
                                        <span>Tel : +9221 32850170 – 71</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-[#64748B] text-sm">
                                        <Printer className="w-5 h-5 shrink-0" />
                                        <span>Fax : +9221 32850172</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-[#64748B] text-sm">
                                        <Mail className="w-5 h-5 shrink-0" />
                                        <a href="mailto:info@seamax.com.pk" className="hover:text-[#0A2540] transition-colors">info@seamax.com.pk</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="lg:col-span-8 lg:pl-8 pt-12 lg:pt-32">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-[#0A2540] uppercase tracking-tight mb-8">Send Us An Email</h3>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="bg-[#F8FAFC] border-none p-4 text-sm text-[#0A2540] placeholder:text-[#94A3B8] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="bg-[#F8FAFC] border-none p-4 text-sm text-[#0A2540] placeholder:text-[#94A3B8] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail address"
                                    className="bg-[#F8FAFC] border-none p-4 text-sm text-[#0A2540] placeholder:text-[#94A3B8] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="bg-[#F8FAFC] border-none p-4 text-sm text-[#0A2540] placeholder:text-[#94A3B8] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="col-span-1 md:col-span-2 bg-[#F8FAFC] border-none p-4 text-sm text-[#0A2540] placeholder:text-[#94A3B8] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none"
                                />
                                <textarea
                                    rows={6}
                                    placeholder="Message"
                                    className="col-span-1 md:col-span-2 bg-[#F8FAFC] border-none p-4 text-sm text-[#0A2540] placeholder:text-[#94A3B8] focus:ring-1 focus:ring-[#0A2540] transition-all outline-none resize-none"
                                />

                                <div className="col-span-1 md:col-span-2">
                                    <button className="bg-[#5AB1BB] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#4A9199] transition-colors shadow-lg shadow-[#5AB1BB]/30">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
};
