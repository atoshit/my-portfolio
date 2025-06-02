'use client';

import { motion } from 'framer-motion';
import { Github, Network, Youtube, Globe, Heart } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';
import { fadeIn } from '@/lib/animations';

const Footer = () => {
  const socialIcons = {
    github: Github,
    discord: Network,
    youtube: Youtube,
    website: Globe,
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {portfolioConfig.personal.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {portfolioConfig.personal.title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {portfolioConfig.personal.location}
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {portfolioConfig.navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Suivez-moi
            </h3>
            <div className="flex space-x-4">
              {Object.entries(portfolioConfig.social).map(([platform, url]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                if (!IconComponent) return null;

                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <a 
                  href={`mailto:${portfolioConfig.personal.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {portfolioConfig.personal.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${portfolioConfig.personal.discord}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {portfolioConfig.personal.discord}
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} {portfolioConfig.personal.name}. Made with </span>
            <Heart size={16} className="text-red-500 fill-current" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;