import React, { useState } from 'react';
import Booking from '../Booking';
import docAnkita from '../../assets/images/1.jpg';
import docAnuj from '../../assets/images/2.jpg';
import {
    Smile,
    Sparkles,
    Gem,
    Crown,
    ShieldCheck,
    Users,
    Building2,
    Stethoscope,
    ChevronDown,
    ChevronUp,
    Clock,
    Calendar
} from 'lucide-react';

const Cosmetic = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const treatments = [
        {
            title: "Smile Makeover",
            description: "Transform your smile with a customized Hollywood Smile Makeover using veneers, whitening, and contouring techniques designed to enhance aesthetics, symmetry, and overall facial harmony.",
            icon: <Sparkles className="w-8 h-8 text-secondary-teal" />
        },
        {
            title: "Composite Fillings",
            description: "Composite fillings repair decayed or chipped teeth using tooth-colored resin that blends naturally, restores function, and enhances smile aesthetics with a minimally invasive, affordable cosmetic solution.",
            icon: <Gem className="w-8 h-8 text-secondary-teal" />
        },
        {
            title: "Tooth-Colored Crowns & Bridges",
            description: "Tooth-colored crowns and bridges restore damaged or missing teeth using durable, natural-looking materials that improve bite strength, aesthetics, and long-term oral health seamlessly.",
            icon: <Crown className="w-8 h-8 text-secondary-teal" />
        },
        {
            title: "Partial Crowns / Inlays & Onlays",
            description: "Inlays and onlays restore moderately damaged teeth using strong, custom restorations that preserve natural structure while delivering long-lasting strength, stability, and improved tooth aesthetics.",
            icon: <ShieldCheck className="w-8 h-8 text-secondary-teal" />
        },
        {
            title: "Veneers",
            description: "Dental veneers are ultra-thin porcelain or composite shells that correct gaps, stains, chips, and misalignment, providing a flawless, long-lasting smile enhancement with minimal tooth preparation.",
            icon: <Smile className="w-8 h-8 text-secondary-teal" />
        },
        {
            title: "Clear Braces",
            description: "Clear braces straighten misaligned teeth using discreet, tooth-colored brackets that provide reliable orthodontic correction while maintaining a more aesthetic, less noticeable appearance during treatment.",
            icon: <div className="w-8 h-8 rounded-full border-2 border-secondary-teal flex items-center justify-center text-secondary-teal font-bold text-xs">CB</div>
        },
        {
            title: "Clear Aligners",
            description: "Clear aligners use transparent, removable trays to gradually straighten teeth with comfort and precision, offering a highly aesthetic, convenient alternative to traditional braces for all ages.",
            icon: <div className="w-8 h-8 rounded-full border-2 border-secondary-teal flex items-center justify-center text-secondary-teal font-bold text-xs">CA</div>
        },
        {
            title: "Teeth Whitening / Bleaching",
            description: "Professional teeth whitening lifts deep stains and brightens your smile instantly using safe, high-quality bleaching agents for dramatic, long-lasting whitening results in a single session.",
            icon: <Sparkles className="w-8 h-8 text-secondary-teal" />
        }
    ];

    const faqs = [
        {
            question: "Which is the best cosmetic dentistry clinic near me in India?",
            answer: "The best cosmetic dentistry clinic is one that offers advanced technology, experienced dentists, personalized treatment plans, and proven results. At 32 Dental Avenue, we provide modern smile makeover solutions trusted by patients across India."
        },
        {
            question: "Are teeth whitening services in India affordable and safe?",
            answer: "Yes, professional teeth whitening in India is both affordable and safe when performed by trained cosmetic dentists. We use clinically tested whitening systems that deliver brighter results without harming enamel."
        },
        {
            question: "How do I choose the right cosmetic dentist in India?",
            answer: "Look for qualifications, experience, before-after results, patient reviews, and the use of digital dentistry. A consultation at 32 Dental Avenue helps you understand the best treatment for your smile goals."
        },
        {
            question: "What treatments do top cosmetic dentistry clinics in India offer?",
            answer: "Leading clinics provide veneers, teeth whitening, crowns, clear aligners, bonding, smile makeovers, and digital smile design, covering both aesthetic improvements and functional corrections."
        },
        {
            question: "Is cosmetic dentistry expensive in India?",
            answer: "Cosmetic dentistry in India is more affordable compared to many countries. Costs depend on treatment type, materials, and complexity, but clinics like ours offer budget-friendly and premium options."
        },
        {
            question: "How long do cosmetic dental treatments like veneers, whitening, or aligners last?",
            answer: "With proper care, cosmetic treatments can last many years. Veneers typically last 10–15 years, whitening results 6–12 months, and aligner results are long-term with retainers."
        }
    ];

    return (
        <div className="bg-neutral-bg min-h-screen pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#f0f4f8] to-[#e0e7ff] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary-teal/10 text-secondary-teal text-sm font-semibold mb-4">
                            Cosmetic Dental Treatment in Rohini, Delhi
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight">
                            Crafting Confident, <span className="text-secondary-teal">Beautiful Smiles</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl">
                            Advanced smile makeover treatments tailored for natural aesthetics, long-lasting results, and complete confidence.
                        </p>
                        <button className="bg-secondary-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all transform hover:-translate-y-1">
                            Book an Appointment
                        </button>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Hero Image - Replace with generated image later */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Beautiful Smile"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatments Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">Dental Treatments</h2>
                        <p className="text-text-light max-w-4xl mx-auto">
                            Transform your confidence with personalized cosmetic dentistry solutions for stunning smile aesthetics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {treatments.map((treatment, index) => (
                            <div key={index} className="bg-neutral-bg p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-secondary-teal/20">
                                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {treatment.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-charcoal mb-3">{treatment.title}</h3>
                                <p className="text-text-light text-sm leading-relaxed">
                                    {treatment.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
                                OUR SUCCESS STORIES<br />
                                <span className="text-secondary-teal">Smiles That Inspire Confidence</span>
                            </h2>
                            <p className="text-text-light mb-8 text-lg">
                                At 32 Dental Avenue, we’ve transformed hundreds of smiles with advanced cosmetic dentistry and personalized care. Explore real patient journeys and see how expert treatments, precision, and compassion helped them achieve the confident, radiant smiles they always Wanted.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="text-3xl font-bold text-secondary-teal mb-1">500+</h4>
                                    <p className="text-text-light text-sm">Smile Makeovers</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="text-3xl font-bold text-secondary-teal mb-1">100%</h4>
                                    <p className="text-text-light text-sm">Patient Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Placeholders for Success Stories - Replace with generated images later */}
                            <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Success Story 1" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                            <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Success Story 2" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Expert Dentists */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">Meet Our Expert Dentists</h2>
                        <p className="text-text-light max-w-2xl mx-auto">
                            Great results come from a team that listens, understands, and delivers with excellence. Our experienced dentists and caring clinical staff ensure you feel supported throughout every treatment.
                        </p>
                        <button className="mt-6 bg-primary-periwinkle text-white px-6 py-2 rounded-full font-semibold hover:bg-[#9a96f0] transition-colors">
                            Book A Consultation
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Dr. Ankita Sharma Gambhir */}
                        <div className="bg-neutral-bg rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src={docAnkita}
                                    alt="Dr. Ankita Sharma Gambhir"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-text-charcoal mb-2">Dr. Ankita Sharma Gambhir</h3>
                                <p className="text-secondary-teal font-semibold mb-4">Pediatric Dentist</p>
                                <div className="space-y-2 text-text-light text-sm">
                                    <p className="flex items-center"><Stethoscope className="w-4 h-4 mr-2" /> MDS – Pedodontics & Preventive Dentistry</p>
                                    <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 10+ Years of Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Dr. Anuj Gambhir */}
                        <div className="bg-neutral-bg rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src={docAnuj}
                                    alt="Dr. Anuj Gambhir"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-text-charcoal mb-2">Dr. Anuj Gambhir</h3>
                                <p className="text-secondary-teal font-semibold mb-4">Prosthodontist & Oral Implantologist</p>
                                <div className="space-y-2 text-text-light text-sm">
                                    <p className="flex items-center"><Stethoscope className="w-4 h-4 mr-2" /> MDS – Prosthodontics, Crown & Bridge</p>
                                    <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 10+ Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Facility */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 1" className="rounded-2xl shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
                                    <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 2" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="pt-8 space-y-4">
                                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 3" className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500" />
                                    <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Facility 4" className="rounded-2xl shadow-lg w-full h-40 object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-secondary-teal font-bold tracking-wider text-sm uppercase mb-2 block">Our Facility</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
                                State-of-the-Art Dental Care at 32 Dental Avenue
                            </h2>
                            <p className="text-text-light mb-8">
                                Behind every beautiful, healthy smile is a clinic built with advanced technology, modern equipment, and a patient-first approach. Our facility ensures precision, comfort, and consistently high-quality dental outcomes.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Advanced Dental Technology</h4>
                                        <p className="text-text-light text-sm">Digital scanners, high-resolution X-rays, and CAD/CAM systems for accurate diagnoses.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <Smile className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Digital Smile Design (DSD)</h4>
                                        <p className="text-text-light text-sm">Map and preview your smile digitally for predictable results and customized planning.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Sterilization & Safety Protocols</h4>
                                        <p className="text-text-light text-sm">Strict international sterilization standards using Class-B autoclaves and advanced infection control.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Info Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#afabfd]/20 via-[#88d4cb]/20 to-[#76c4bb]/8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
                        Advanced Cosmetic Dentistry in Rohini for Complete Smile Transformation
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed">
                        At 32 Dental Avenue, we make cosmetic dentistry simple, comfortable, and truly transformative. If you’re dealing with stained, chipped, crooked, or missing teeth, our expert dentists in Rohini, Delhi are here to help you smile confidently again. With modern technology, digital dentistry, and fully customized treatment plans, we create natural-looking results that feel just right.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed">
                        Whether you want veneers, teeth whitening, clear aligners, crowns, or a complete smile makeover, every treatment is designed around your goals. With precise diagnostics and strict safety protocols, we ensure predictable, long-lasting results. Experience why patients trust us for advanced aesthetic dentistry and life-changing smile transformations.
                    </p>
                    <button className="bg-secondary-teal text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all">
                        Book Your Transformation
                    </button>
                </div>
            </section>

            <Booking />

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">FAQ</h2>
                        <p className="text-text-light">Expert Answers to Help You Choose the Right Smile Solutions</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                                <button
                                    className="w-full px-6 py-4 text-left bg-neutral-bg hover:bg-gray-50 flex items-center justify-between transition-colors"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold text-text-charcoal pr-8">{faq.question}</span>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 text-secondary-teal flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 py-4 text-text-light bg-white border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cosmetic;
