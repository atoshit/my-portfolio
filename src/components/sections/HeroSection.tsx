'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';
import { fadeIn, textVariant, staggerContainer } from '@/lib/animations';

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.p
            variants={fadeIn('down', 0.1)}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium"
          >
            Bonjour, je suis
          </motion.p>

          <motion.h1
            variants={textVariant(0.2)}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {portfolioConfig.personal.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={textVariant(0.3)}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
          >
            {portfolioConfig.personal.title}
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            {portfolioConfig.personal.description}
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.5)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} />
              <span>Me contacter</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.6)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{portfolioConfig.projects.length}+</div>
              <div className="text-gray-600 dark:text-gray-400">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Clients satisfaits</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium">Découvrir</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;