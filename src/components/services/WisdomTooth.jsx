import React, { useState } from 'react';
import {
    ShieldCheck,
    Building2,
    Stethoscope,
    ChevronDown,
    ChevronUp,
    Clock,
    CheckCircle2,
    Activity,
    Zap,
    HeartPulse
} from 'lucide-react';
import AppointmentBooking from '../Booking';
import docAnkita from '../../assets/images/1.jpg';
import docAnuj from '../../assets/images/2.JPG';
import serviceExtraction from '../../assets/images/service-extraction.png';
import serviceSurgical from '../../assets/images/service-surgical.png';
import serviceImpacted from '../../assets/images/service-impacted.png';

const WisdomTooth = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const services = [
        {
            title: "Painless Extraction",
            description: "Simple, non-surgical removal of fully erupted wisdom teeth under local anesthesia. A quick and virtually painless procedure for teeth that have grown in straight but need removal.",
            icon: <HeartPulse className="w-8 h-8 text-secondary-teal" />,
            image: serviceExtraction
        },
        {
            title: "Surgical Extraction",
            description: "Specialized removal of broken, decayed, or complex wisdom teeth. Our expert surgeons ensure minimal discomfort and rapid healing through precise surgical techniques.",
            icon: <Activity className="w-8 h-8 text-secondary-teal" />,
            image: serviceSurgical
        },
        {
            title: "Impacted Wisdom Tooth Removal",
            description: "Expert surgical removal of impacted teeth trapped beneath the gum or bone. We use advanced imaging to plan safe extraction, preventing future pain, infection, and crowding.",
            icon: <Zap className="w-8 h-8 text-secondary-teal" />,
            image: serviceImpacted
        }
    ];

    const faqs = [
        {
            question: "Is wisdom tooth removal painful?",
            answer: "No, wisdom tooth removal is performed under effective local anesthesia, so you won't feel pain during the procedure. Post-operative discomfort is managed with prescribed medication and typically subsides within a few days."
        },
        {
            question: "Do I really need to remove my wisdom teeth?",
            answer: "Not always. Removal is recommended if they are impacted, causing pain, damaging neighboring teeth, or are decayed. A consultation with our experts using digital X-rays will determine if removal is necessary for you."
        },
        {
            question: "How long does the recovery take?",
            answer: "Most patients recover fully within 3-4 days. You can usually return to normal activities the next day, though you should avoid strenuous exercise and hard foods for a few days to ensure proper healing."
        },
        {
            question: "What is an impacted wisdom tooth?",
            answer: "An impacted wisdom tooth is one that hasn't fully erupted through the gum line because it's blocked by other teeth or bone. This can cause pain, infection, and damage to adjacent teeth if left untreated."
        },
        {
            question: "Are there any side effects of the surgery?",
            answer: "Common temporary side effects include swelling and mild discomfort. Serious complications are rare when performed by experienced oral surgeons like ours. We provide detailed aftercare instructions to minimize any risks."
        },
        {
            question: "Can I eat normally after the surgery?",
            answer: "You should stick to a soft diet (soups, yogurt, smoothies) for the first 24-48 hours. You can gradually reintroduce solid foods as healing progresses, usually within a few days."
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
                            Wisdom Tooth Surgery in Rohini, Delhi
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-text-charcoal mb-6 leading-tight">
                            Safe, Comfortable, <span className="text-secondary-teal">Expert Care</span>
                        </h1>
                        <p className="text-lg text-text-light mb-8 max-w-xl">
                            Experience painless, and stress-free wisdom tooth removal by expert surgeons designed for fast recovery and maximum comfort.
                        </p>
                        <button className="bg-secondary-teal text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all transform hover:-translate-y-1">
                            Book an Appointment
                        </button>
                    </div>
                    <div className="relative">
                        {/* Placeholder for Hero Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Comfortable Dental Care"
                                className="w-full h-auto object-cover"
                            />
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

            {/* Services Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-bg">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">Specialized Procedures</h2>
                        <p className="text-text-light max-w-3xl mx-auto">
                            Expert surgical solutions for wisdom teeth, ensuring safety, comfort, and optimal oral health.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-secondary-teal/20 overflow-hidden">
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="mb-6 bg-neutral-bg w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-charcoal mb-3">{service.title}</h3>
                                    <p className="text-text-light text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
                                PATIENT EXPERIENCES<br />
                                <span className="text-secondary-teal">Pain-Free & Stress-Free</span>
                            </h2>
                            <p className="text-text-light mb-8 text-lg">
                                At 32 Dental Avenue, we understand the anxiety surrounding wisdom tooth removal. That's why we prioritize patient comfort above all else. Our patients consistently report surprisingly painless procedures and smooth recoveries, thanks to our gentle approach and expert care.
                            </p>
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center text-text-charcoal">
                                    <CheckCircle2 className="w-6 h-6 text-secondary-teal mr-3" />
                                    <span className="font-semibold">Minimally Invasive Techniques</span>
                                </div>
                                <div className="flex items-center text-text-charcoal">
                                    <CheckCircle2 className="w-6 h-6 text-secondary-teal mr-3" />
                                    <span className="font-semibold">Sedation Options Available</span>
                                </div>
                                <div className="flex items-center text-text-charcoal">
                                    <CheckCircle2 className="w-6 h-6 text-secondary-teal mr-3" />
                                    <span className="font-semibold">Comprehensive Aftercare Support</span>
                                </div>
                            </div>
                            <button className="mt-8 bg-secondary-teal text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all">
                                Schedule Your Consultation
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Placeholders for Success Stories */}
                            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Happy Patient 1" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
                            <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Happy Patient 2" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
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
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Sterilization & Safety Protocols</h4>
                                        <p className="text-text-light text-sm">Strict international sterilization standards using Class-B autoclaves and advanced infection control.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-secondary-teal">
                                        <HeartPulse className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-text-charcoal mb-1">Patient Comfort Focus</h4>
                                        <p className="text-text-light text-sm">Ergonomic chairs, calming ambiance, and gentle care techniques to ensure a relaxed experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section */}
            <AppointmentBooking />

            {/* Bottom Info Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#afabfd]/20 via-[#88d4cb]/20 to-[#76c4bb]/8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-6">
                        Expert Wisdom Tooth Removal in Rohini
                    </h2>
                    <p className="text-text-light text-lg mb-8 leading-relaxed">
                        Don't let wisdom tooth pain disrupt your life. At 32 Dental Avenue, our specialized oral surgeons provide safe, quick, and comfortable wisdom tooth removal services. Whether it's a simple extraction or complex impaction surgery, we have the expertise and technology to handle it with care.
                    </p>
                    <p className="text-text-light text-lg mb-8 leading-relaxed">
                        We believe in keeping you informed and comfortable every step of the way. From digital diagnostics to detailed aftercare, we ensure your journey to a pain-free smile is smooth and worry-free. Trust us for the best wisdom tooth care in Delhi.
                    </p>
                    <button className="bg-secondary-teal text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-[#76c4bb] transition-all">
                        Book Your Relief Today
                    </button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-charcoal mb-4">FAQ</h2>
                        <p className="text-text-light">Common Questions About Wisdom Tooth Surgery</p>
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

export default WisdomTooth;
