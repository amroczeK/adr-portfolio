// Define animation when component unMounts
// Fade out on exit
const exit = {
  opacity: 0,
  //y: 300, // slide down
  transition: {
    duration: 0.5, // seconds
  },
};

export const slideInFromLeft = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  // Define animation when component mounts
  // Fade in when loading page
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5, // seconds
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
      x: 2000,
      rotate: 'rotation',
    },
    // Define animation when component mounts
    // Fade in when loading page
    show: {
      opacity: 1,
      x: 0,
      rotate: rotation,
      transition: {
        duration: 0.5, // seconds
        when: 'beforeChildren',
        staggerChildren: 0.25,
      },
    },
    exit,
  };
};
