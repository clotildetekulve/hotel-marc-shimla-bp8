import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Hero, SectionHeader } from '../components';
import { IMAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const galleryCategories = [
  { id: 'all', name: 'All' },
  { id: 'rooms', name: 'Rooms & Suites' },
  { id: 'views', name: 'Views & Surroundings' },
  { id: 'dining', name: 'Dining' },
  { id: 'hotel', name: 'Hotel' },
];

const galleryImages = [
  {
    id: 1,
    src: '/room1.jpg',
    alt: 'Comfortable hotel room',
    category: 'rooms',
    caption: 'Well-appointed room with modern amenities',
  },
  {
    id: 2,
    src: '/view1.jpg',
    alt: 'Valley view from hotel',
    category: 'views',
    caption: 'Breathtaking views of the Shimla valley',
  },
  {
    id: 3,
    src: '/facade1.jpg',
    alt: 'Hotel Marc exterior',
    category: 'hotel',
    caption: 'Hotel Marc - Your home in the hills',
  },
  {
    id: 4,
    src: '/rest1.jpg',
    alt: 'Marc Kitchen restaurant',
    category: 'dining',
    caption: 'Marc Kitchen - Multi-cuisine restaurant',
  },
  {
    id: 5,
    src: '/viceregal-lodge.jpg',
    alt: 'Viceregal Lodge nearby attraction',
    category: 'views',
    caption: 'Viceregal Lodge - Just 1.8 km away',
  },
  {
    id: 6,
    src: '/mall-road-shimla.jpg',
    alt: 'Mall Road Shimla',
    category: 'views',
    caption: 'Mall Road - 3 km from hotel',
  },
  {
    id: 7,
    src: '/himachal-state-museum-and-library-himachal-pradesh-1-attr-hero.jpeg',
    alt: 'Himachal State Museum',
    category: 'views',
    caption: 'State Museum - Walking distance',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    alt: 'Semi Deluxe Room',
    category: 'rooms',
    caption: 'Semi Deluxe Room - Cozy Comfort',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    alt: 'Deluxe Room',
    category: 'rooms',
    caption: 'Deluxe Room - Comfortable Stay',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    alt: 'Super Deluxe Room',
    category: 'rooms',
    caption: 'Super Deluxe Room - Valley View',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    alt: 'Family Suite',
    category: 'rooms',
    caption: 'Family Suite - Spacious Comfort',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    alt: 'Restaurant interior',
    category: 'dining',
    caption: 'Cozy dining atmosphere',
  },
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    alt: 'North Indian cuisine',
    category: 'dining',
    caption: 'Authentic North Indian dishes',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    alt: 'Mountain views',
    category: 'views',
    caption: 'Stunning Himalayan panorama',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    alt: 'Hotel facilities',
    category: 'hotel',
    caption: 'Modern facilities for your comfort',
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useScrollAnimation<HTMLDivElement>();

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Hero
        image={IMAGES.shimlaValley}
        title="Photo Gallery"
        subtitle="Explore Hotel Marc through our lens - rooms, views, and memorable moments"
        height="large"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Gallery"
            subtitle="A visual journey through Hotel Marc and its beautiful surroundings"
          />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-700 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-700 shadow'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div
            ref={galleryRef.ref}
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 ${
              galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer shadow-lg"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Experience It Yourself
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Pictures can only tell part of the story. Visit Hotel Marc and create your own memories in beautiful Shimla.
          </p>
          <a
            href="https://wa.me/918091280700?text=Hello!%20I%20would%20like%20to%20inquire%20about%20room%20availability%20at%20Hotel%20Marc%2C%20Shimla."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors z-10 p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition-colors z-10 p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-4">
            <img
              src={filteredImages[currentImageIndex]?.src}
              alt={filteredImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[75vh] object-contain mx-auto"
            />
            <p className="text-white text-center mt-4 text-lg">
              {filteredImages[currentImageIndex]?.caption}
            </p>
            <p className="text-white/60 text-center mt-2 text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
