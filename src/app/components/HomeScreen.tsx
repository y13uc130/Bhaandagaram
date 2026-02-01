import { Music, Music2, Music3, Music4 } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import guruImage from '@/assets/791efa49b172f8cdbf7a65ddd2c77196b37546a9.png';
import lotusIcon from '@/assets/e3860779a8732b8d9c3977dec7d1fd8e6b26984d.png';
import sacredSymbols from '@/assets/10606e48cd70f1e7d3451e196879a13e981dfee5.png';

interface HomeScreenProps {
  onEnter: () => void;
}

export function HomeScreen({ onEnter }: HomeScreenProps) {
  // Create multiple falling music notes
  const musicIcons = [
    { Icon: Music, delay: 0, x: -40 },
    { Icon: Music2, delay: 0.5, x: 20 },
    { Icon: Music3, delay: 1, x: -20 },
    { Icon: Music4, delay: 1.5, x: 30 },
    { Icon: Music, delay: 2, x: -30 },
    { Icon: Music2, delay: 2.5, x: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50 relative overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center px-6 py-8 pb-32">
        {/* Sacred Symbols at Top */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <img
            src={sacredSymbols}
            alt="Sacred Symbols"
            className="h-12 object-contain"
          />
        </motion.div>

        {/* Sacred Headers */}
        <div className="w-full max-w-md space-y-3 text-center">
          {/* First Mantra */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <img src={lotusIcon} alt="lotus" className="w-5 h-5 opacity-70" />
            <h3 className="text-base text-gray-800 font-semibold tracking-wide bg-gradient-to-r from-amber-700 via-rose-700 to-amber-700 bg-clip-text text-transparent">
              ఓం అస్మద్ గురుభ్యో నమః
            </h3>
            <img src={lotusIcon} alt="lotus" className="w-5 h-5 opacity-70" />
          </motion.div>

          {/* Second Mantra */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <img src={lotusIcon} alt="lotus" className="w-5 h-5 opacity-70" />
            <h3 className="text-base text-gray-800 font-semibold tracking-wide bg-gradient-to-r from-rose-700 via-amber-700 to-rose-700 bg-clip-text text-transparent">
              శ్రీమతే రామానుజాయ నమః
            </h3>
            <img src={lotusIcon} alt="lotus" className="w-5 h-5 opacity-70" />
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-2 py-2"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-600 to-rose-600"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-600 to-transparent"></div>
          </motion.div>

          {/* Mokshadhikaari with images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-3 pt-2"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-rose-600 p-1 shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1707832902491-42b6d033075b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0dWUlMjBvZiUyMGVxdWFsaXR5JTIwcmFtYW51amF8ZW58MXx8fHwxNzY5MjUwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Statue of Equality"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <img src={lotusIcon} alt="lotus" className="w-4 h-4 opacity-60" />
              <h2 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-amber-800 via-rose-800 to-amber-800 bg-clip-text text-transparent">
                మోక్షాధికారి
              </h2>
              <img src={lotusIcon} alt="lotus" className="w-4 h-4 opacity-60" />
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-rose-600 p-1 shadow-lg">
              <img
                src={guruImage}
                alt="Sri Sri Sri Tridandi Chinna Jeeyar Swamy"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Main Title */}
        <div className="w-full max-w-2xl text-center mt-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-rose-700 mb-6 leading-tight"
          >
            Bhagavadh Ramanuja
            <br />
            Sankeerthaana Bhandaagaaram
          </motion.h1>

          {/* Animation Container - Akshayapaathra */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative h-56 flex items-end justify-center mb-4"
          >
            {/* Falling Music Notes */}
            <div className="absolute inset-0 overflow-hidden">
              {musicIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -100, x: item.x, opacity: 0 }}
                  animate={{
                    y: 140,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: item.delay,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'easeIn',
                  }}
                  className="absolute left-1/2 top-0"
                >
                  <item.Icon className="w-5 h-5 text-amber-600" />
                </motion.div>
              ))}
            </div>

            {/* Golden Akshayapaathra (Divine Vessel) */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
              className="relative z-10"
            >
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full blur-xl opacity-50"></div>

              {/* Main vessel */}
              <div className="relative">
                {/* Vessel top rim */}
                <div className="w-44 h-3.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 rounded-t-full shadow-lg"></div>

                {/* Vessel body */}
                <div className="w-40 mx-auto bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-b-full h-24 shadow-2xl relative overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute top-2 left-5 w-12 h-16 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm"></div>

                  {/* Decorative patterns */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-amber-800 to-transparent"></div>
                </div>

                {/* Vessel base */}
                <div className="w-20 h-2.5 mx-auto bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-600 rounded-full shadow-md"></div>

                {/* Sacred mark (bindhi) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-rose-600 rounded-full shadow-lg"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Action Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50 pointer-events-none">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-sm text-gray-600 text-center mb-3"
        >
          భండాగారం - The Sacred Treasury of Divine Songs
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="w-full max-w-sm mx-auto block bg-gradient-to-r from-amber-600 to-rose-600 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-xl transition-all pointer-events-auto"
        >
          Enter Bhandaagaaram
        </motion.button>
      </div>
    </div>
  );
}
