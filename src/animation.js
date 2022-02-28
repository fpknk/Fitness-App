//Framer Motion Variants
//#1
export const titleAnimation = {
  hidden: { opacity: 0, x: -1000 },
  show: { opacity: 1, x: 0, transition: { duration: 2 } },
};
//#2
export const containerAnim = {
  hidden: { x: 1000, opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
      staggerChildren: 1,
    },
  },
};
