import { transition } from "./transitions";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition,
  },
};

export const imageReveal = {
  hidden: {
    scale: 1.08,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transition,
      duration: 1.4,
    },
  },
};