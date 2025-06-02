'use client';

import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio';
import { fadeIn, staggerContainer } from '@/lib/animations';

interface ExperienceItemProps {
  experience: {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    technologies: string[];
  };
  index: number;
  isLast: boolean;
}

const ExperienceItem = ({ experience, index, isLast }: ExperienceItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex items-start">
      {!isLast && (
        <div className="absolute top-6 left-5 w-0.5 h-full bg-gray-300 dark:bg-gray-700" />
      )}
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg"
      >
        {experience.id}
      </motion.div>
      
      <motion.div
        variants={fadeIn(isEven ? 'right' : 'left', index * 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="ml-6 space-y-2 flex-1"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.title}
          </h3>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {experience.period}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm">
          <span className="font-medium">{experience.company}</span>
          <span className="hidden sm:block mx-2">•</span>
          <span>{experience.location}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300">
          {experience.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = portfolioConfig.experiences;
  
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mon Parcours Professionnel
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez mon expérience professionnelle et les projets sur lesquels j&apos;ai travaillé
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Intéressé par mon parcours professionnel ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Discutons de votre projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;