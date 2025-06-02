'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';
import { fadeIn, staggerContainer, cardHoverAnimation } from '@/lib/animations';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    featured: boolean;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          variants={cardHoverAnimation}
          initial="rest"
          whileHover="hover"
          className="w-full h-full"
        >
          <div 
            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            style={{ 
              backgroundImage: `url(${project.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
        </motion.div>
        
        {project.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center pt-2">
          <div className="flex space-x-3">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <Github size={18} />
            </motion.a>
          </div>
          
          <motion.button
            whileHover={{ x: 5 }}
            className="text-blue-600 dark:text-blue-400 font-medium flex items-center space-x-1 group"
          >
            <span>Détails</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const projects = portfolioConfig.projects;
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez une sélection de mes projets récents et des technologies utilisées
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Tous
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === 'featured'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Favoris
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Intéressé par d&apos;autres projets ?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Github size={20} />
            <span>Voir plus sur GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;