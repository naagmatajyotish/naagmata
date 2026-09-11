import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Quote, Sparkles, ChevronLeft, ChevronRight, Calendar, MapPin, HeartHandshake, MessageCircle } from 'lucide-react';
import { TESTIMONIALS, CONTACT_INFO } from '../data/jyotishData';

type CategoryFilter = 'all' | 'love' | 'marriage' | 'abroad' | 'protection';

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredTestimonials = activeCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  // Auto slide rotation
  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, filteredTestimonials.length]);

  // Reset index when category changes
  const handleCategoryChange = (cat: CategoryFilter) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const activeItem = filteredTestimonials[currentIndex] || filteredTestimonials[0] || TESTIMONIALS[0];

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Real Devotee Experiences & Miracles</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
          True Stories of Reunited Lovers & Restored Families
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Over 14,800+ international and Indian clients have found permanent peace, broken free from heartbreak, and reunited with their soulmates through Baba Ji's sacred Vedic blessings.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {[
            { id: 'all', label: '🌟 All Stories (सभी अनुभव)' },
            { id: 'love', label: '💔 Ex-Love Back (खोया प्यार)' },
            { id: 'marriage', label: '💍 Love Marriage & Family (प्रेम विवाह)' },
            { id: 'abroad', label: '🌍 Abroad / NRI Clients (USA, UK, Canada)' },
            { id: 'protection', label: '🛡️ Protection & Buri Nazar (सुरक्षा)' },
          ].map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id as CategoryFilter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-105'
                    : 'bg-stone-100 hover:bg-amber-100/70 text-stone-700 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Animated Testimonial Showcase */}
      <div 
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="max-w-4xl mx-auto bg-gradient-to-br from-white via-[#fffdf9] to-[#fefbf2] border-2 border-amber-200/90 rounded-3xl p-6 sm:p-10 relative shadow-xl shadow-amber-500/10 mb-12 transition-all"
      >
        <Quote className="w-20 h-20 text-amber-200/40 absolute top-6 right-6 pointer-events-none" />

        {/* Top Badges & Ratings */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(activeItem.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-black text-stone-900 bg-amber-100/80 px-2 py-0.5 rounded-full border border-amber-300">
              5.0 Verified Vedic Review
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 bg-stone-100 border border-stone-200 text-stone-700 rounded-full flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>{activeItem.date}</span>
            </span>
            <span className="text-xs font-bold px-3 py-1 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-full flex items-center gap-1.5 shadow-2xs">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>{activeItem.solutionTime}</span>
            </span>
          </div>
        </div>

        {/* Problem Title Badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 px-3 py-1 rounded-xl text-xs font-bold text-rose-900">
          <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
          <span>Case: {activeItem.problem}</span>
        </div>

        {/* Testimonial Quote Text with Fade Transition */}
        <div className="min-h-[110px] sm:min-h-[90px] flex items-center">
          <p className="text-stone-800 text-base sm:text-lg md:text-xl leading-relaxed italic font-normal relative z-10 transition-opacity duration-300">
            "{activeItem.review}"
          </p>
        </div>

        {/* Client Details Footer */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-amber-100 flex-wrap gap-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 to-orange-500 text-white font-extrabold flex items-center justify-center text-sm shadow-md border-2 border-white">
              {activeItem.clientName.split(' ')[0][0]}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="heading-mystic text-base sm:text-lg font-bold text-stone-900">
                  {activeItem.clientName}
                </h4>
                {activeItem.flag && <span className="text-base">{activeItem.flag}</span>}
              </div>
              <span className="text-xs text-stone-500 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600" />
                <span>{activeItem.location}</span>
              </span>
            </div>
          </div>

          {/* Navigation Controls & Auto-play indicator */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all cursor-pointer active:scale-95 shadow-2xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-extrabold text-stone-500 px-1">
              {currentIndex + 1} / {filteredTestimonials.length}
            </span>
            <button
              type="button"
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all cursor-pointer active:scale-95 shadow-2xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Other Devotee Stories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTestimonials.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-3xl border border-amber-200/80 flex flex-col justify-between shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-emerald-700 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                    <span>{item.solutionTime}</span>
                  </span>
                </div>
              </div>

              <div className="text-[11px] font-bold text-amber-800 mb-2 truncate">
                {item.problem}
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 italic line-clamp-4">
                "{item.review}"
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-stone-900 text-sm flex items-center gap-1">
                  <span>{item.clientName}</span>
                  {item.flag && <span>{item.flag}</span>}
                </span>
                <span className="text-[11px] text-stone-500">
                  {item.location}
                </span>
              </div>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on WhatsApp"
                className="text-emerald-600 hover:text-emerald-700 p-1.5 bg-emerald-50 rounded-full border border-emerald-200 hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
