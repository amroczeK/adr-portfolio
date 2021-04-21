// Define animation when component unMounts
// Fade out on exit
const exit = {
  opacity: 0,
  y: 300, // slide down
  transition: {
    duration: 1, // seconds
  },
};

export const slideInFromTop = {
  hidden: {
    opacity: 0,
    y: -4000,
  },
  // Define animation when component mounts
  // Fade in when loading page
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // seconds
      when: 'beforeChildren',
      staggerChildren: 1,
    },
  },
  exit,
};

export const shapeAnimation = ({ rotation }) => {
  return {
    hidden: {
      opacity: 0,
      y: 4000,
      rotate: rotation,
    },
    // Define animation when component mounts
    // Fade in when loading page
    show: {
      opacity: 1,
      y: 0,
      rotate: rotation,
      transition: {
        duration: 1, // seconds
        when: 'beforeChildren',
        staggerChildren: 1,
      },
    },
    exit,
  };
};
