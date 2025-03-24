
export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerChildrenVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1.0],
};
