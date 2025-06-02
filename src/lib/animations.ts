import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

export const cardHoverAnimation: Variants = {
  rest: { scale: 1, transition: { duration: 0.2, ease: 'easeInOut' } },
  hover: { scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } }
};

export const skillBarAnimation = (delay: number = 0): Variants => {
  return {
    hidden: { width: '0%' },
    show: {
      width: '100%',
      transition: {
        duration: 1.5,
        delay,
        ease: 'easeInOut'
      }
    }
  };
};

export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay
      }
    }
  };
};

export const scrollAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
};

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};