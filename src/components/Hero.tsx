import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchFilterBar from './Filter';

const imageUrls = [
  "https://cdn.emaar.com/wp-content/uploads/2025/07/BAYSTAR-BY-VIDA_RYM_DHE_BANNER_WEB_1920X1080.jpg",
  "https://cdn.emaar.com/wp-content/uploads/2025/07/ROSEHILL_DHE_HOMEPAGE_BANNER_1920x1080.jpg",
  "https://cdn.emaar.com/wp-content/uploads/2025/06/SELVARA_GP_HOMEPAGE_BANNER_1920x1080.jpg",
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3',
  'https://cdn.emaar.com/wp-content/uploads/2025/04/GP_BANNER_WEB_1920X1080.jpg',
  'https://cdn.emaar.com/wp-content/uploads/2025/06/VIDA_RH_DHE_HOMEPAGE_BANNER_1920x1080.jpg',
  'https://cdn.emaar.com/wp-content/uploads/2025/06/SILVA_DCH_HOMEPAGE_BANNER_1920x1080.jpg',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    }, 5000); // 5s looks more refined than 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background crossfade layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={imageUrls[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.3)), url('${imageUrls[currentImageIndex]}')`,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Optional extra overlay for depth */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-20">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Crafting <span className="text-yellow-100">Legacy</span>, Shaping Skylines
          </motion.h1>

          <motion.p
            className="text-xl text-white mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover extraordinary living in the world&apos;s most prestigious addresses. Where luxury meets legacy.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* You can add CTA buttons here */}
          </motion.div>
        </motion.div>
        <SearchFilterBar></SearchFilterBar>
      </div>
    </section>
  );
};

export default HeroSection;
