// Define animation when component unMounts
// Fade out on exit
const exit = {
  opacity: 0,
  y: 300, // slide down
  transition: {
    duration: 0.75, // seconds
  },
};

export const slideInFromLeft = {
  hidden: {
    opacity: 0,
    y: -2000,
  },
  // Define animation when component mounts
  // Fade in when loading page
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75, // seconds
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit,
};

export const shapeAnimation = ({ rotation }) => {
  return {
    hidden: {
      opacity: 0,
      y: 2000,
      rotate: '15%',
    },
    // Define animation when component mounts
    // Fade in when loading page
    show: {
      opacity: 1,
      y: 0,
      rotate: rotation,
      transition: {
        duration: 0.75, // seconds
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    },
    exit,
  };
};
