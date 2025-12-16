import React from 'react';
import { ArrowRight } from 'lucide-react';

const Banner = 'https://i.ibb.co/0Vh1mYVt/IMG-0428.jpg';

export default function DentalCTA() {
  return (
    <section className="py-20 bg-[#8FC6B7] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#f7f4f1] rounded-[2.5rem] overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20 order-2 lg:order-1">
              <div className="max-w-xl">
                {/* <span className="inline-block py-1 px-3 rounded-full bg-white text-[#88d4cb] text-sm font-semibold tracking-wide mb-6 shadow-sm">
                  Book Your Visit
                </span> */}

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#424040] mb-6 leading-[1.15]">
                  Start Your Journey to a <span className="text-[#88d4cb]">Confident Smile</span>
                </h2>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Experience world-class dental care with our expert team. We combine advanced technology with a gentle touch to give you the smile you deserve.
                </p>

                <button className="group inline-flex items-center gap-2 bg-[#424040] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#88d4cb] hover:shadow-lg hover:-translate-y-1">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#88d4cb]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
            </div>

            {/* Image Side */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-auto order-1 lg:order-2">
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={Banner}
                  alt="Modern Dental Care"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Overlay Gradient */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
