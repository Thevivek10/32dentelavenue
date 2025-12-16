import React from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Pitampura, Delhi",
    review: "The team at 32 Dental Avenue is exceptional! Dr. Jaiswal's attention to detail during my smile makeover was impressive. The results exceeded my expectations.",
    rating: 5
  },
  {
    name: "Rajesh Kumar",
    location: "Rohini Sector 7, Delhi",
    review: "Best dental clinic in Delhi! The staff is incredibly professional, and the clinic uses state-of-the-art technology. My dental implant procedure was completely painless.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    location: "Paschim Vihar, Delhi",
    review: "I've been visiting 32 Dental Avenue for the past year, and the experience has always been wonderful. The clinic is immaculate, and the staff is very caring.",
    rating: 5
  },
  {
    name: "Amit Verma",
    location: "Model Town, Delhi",
    review: "Found my forever dental clinic! The doctors explain everything in detail and make you feel comfortable. Their preventive care advice has been invaluable.",
    rating: 5
  },
  {
    name: "Meera Patel",
    location: "Punjabi Bagh, Delhi",
    review: "My kids love coming here! The pediatric dentistry team is amazing at making children comfortable. The clinic ambiance is so welcoming and modern.",
    rating: 5
  },
  {
    name: "Rahul Malhotra",
    location: "Dwarka, Delhi",
    review: "Outstanding dental care! The invisible braces treatment has transformed my smile. The entire team is professional and uses the latest dental technologies.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    location: "London, UK",
    review: "Traveled from the UK for dental implants. The cost savings were huge, but the quality of care was even better than what I'd get back home. Highly recommended!",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    review: "World-class facilities and expertise. The entire process from consultation to treatment was seamless. 32 Dental Avenue is truly a gem for dental tourism.",
    rating: 5
  },
  {
    name: "Emily Davis",
    location: "Sydney, Australia",
    review: "I was nervous about getting veneers abroad, but Dr. Jaiswal put me at ease. My smile looks natural and perfect. Thank you for the amazing hospitality!",
    rating: 5
  },
  {
    name: "David Wilson",
    location: "New York, USA",
    review: "Professional, hygienic, and efficient. I got a full mouth rehabilitation done in just 10 days. The results are fantastic and the price was unbeatable.",
    rating: 5
  }
];

const videoTestimonials = [
  "https://youtube.com/shorts/jbH0bwVN3Q0",
  "https://youtube.com/shorts/UpJ5DokV-4g",
  "https://youtube.com/shorts/uadT2bjEJxs",
  "https://youtube.com/shorts/hrGgAIg-3JA",
  "https://youtube.com/shorts/TVZ5IL52T_g",
  "https://youtube.com/shorts/VCJBYD7NJLI"
];

const VideoTestimonial = ({ videoUrl }) => {
  const videoId = videoUrl.split('/').pop();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="min-w-[280px] md:min-w-[320px] h-[500px] rounded-2xl overflow-hidden shadow-xl mr-6 bg-black">
      <iframe
        src={embedUrl}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

const TestimonialCard = ({ name, location, review, rating }) => (
  <div className="min-w-[300px] md:min-w-[400px] bg-white p-6 md:p-8 rounded-2xl shadow-lg mr-6 border border-gray-100">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#88d4cb]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-[#424040]/80 leading-relaxed mb-6 text-sm md:text-base">{review}</p>
    <div>
      <h4 className="font-semibold text-[#424040]">{name}</h4>
      <p className="text-sm text-[#424040]/60">{location}</p>
    </div>
  </div>
);

const SuccessStories = ({ 
  mainTitle = "OUR SUCCESS STORIES",
  subtitle = "Smiles That Inspire Confidence",
  description = "At 32 Dental Avenue, we've transformed hundreds of smiles with advanced cosmetic dentistry and personalized care. Explore real patient journeys and see how expert treatments, precision, and compassion helped them achieve the confident, radiant smiles they always Wanted."
}) => {
  return (
    <section className="py-16 md:py-20 bg-[#f7f4f1] overflow-hidden w-full">
      <div className="w-full">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#424040] mb-4">
              {mainTitle}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#88d4cb] mb-6">
              {subtitle}
            </h3>
            <p className="text-[#424040]/70 text-lg max-w-4xl mx-auto">
              {description}
            </p>
          </div>
        </div>

        {/* Video Testimonials Section */}
        <div className="relative mb-16 w-full">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>

          {/* Auto-scrolling videos */}
          <div className="flex overflow-hidden w-full">
            <div className="animate-scroll-right flex">
              {[...videoTestimonials, ...videoTestimonials].map((videoUrl, index) => (
                <VideoTestimonial key={index} videoUrl={videoUrl} />
              ))}
            </div>
          </div>
        </div>

        {/* Text Testimonials Section */}
        <div className="relative w-full">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#f7f4f1] to-transparent z-10 pointer-events-none"></div>

          {/* Auto-scrolling testimonials */}
          <div className="flex overflow-hidden w-full">
            <div className="animate-scroll-left flex">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// Demo showing how to use the component with different headers
const Demo = () => {
  return (
    <div>
      {/* Default usage */}
      <SuccessStories />
      
      {/* Custom headers example */}
      <SuccessStories 
        mainTitle="PATIENT TESTIMONIALS"
        subtitle="Real Stories, Real Results"
        description="Discover how our patients experienced life-changing dental transformations. Their stories showcase our commitment to excellence and personalized care."
      />
    </div>
  );
};

export default SuccessStories;
export { Demo };