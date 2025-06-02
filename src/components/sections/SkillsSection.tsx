'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { portfolioConfig } from '@/config/portfolio';
import { fadeIn, staggerContainer, skillBarAnimation } from '@/lib/animations';

interface SkillItemProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  index: number;
}

const SkillItem = ({ skill, index }: SkillItemProps) => {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 flex-shrink-0">
          <Image
            src={skill.icon}
            alt={`${skill.name} logo`}
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">Niveau de maitrise</span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {skill.level}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            variants={skillBarAnimation(index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Array<{
    name: string;
    level: number;
    icon: string;
  }>;
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  return (
    <motion.div
      variants={fadeIn('up', delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
        {title}
      </h3>
      
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Voici un aperçu de mes compétences techniques et des technologies que je maîtrise
          </p>
        </motion.div>

        <div className="space-y-16">
          <SkillCategory
            title="Software Development"
            skills={portfolioConfig.skills["Software"]}
            delay={0.2}
          />

          <SkillCategory
            title="Front-end Development"
            skills={portfolioConfig.skills["Front-end"]}
            delay={0.3}
          />

          <SkillCategory
            title="Back-end Development"
            skills={portfolioConfig.skills["Back-end"]}
            delay={0.4}
          />

          <SkillCategory
            title="Database"
            skills={portfolioConfig.skills["Database"]}
            delay={0.5}
          />

          <SkillCategory
            title="Design & UI/UX"
            skills={portfolioConfig.skills["Design"]}
            delay={0.7}
          />
        </div>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Toujours en apprentissage
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Je suis passionné par les nouvelles technologies et j'apprends constamment 
            de nouveaux outils et frameworks pour rester à la pointe du développement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="opacity-80">Technologies maîtrisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="opacity-80">Catégories de compétences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="opacity-80">Envie d'apprendre</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;