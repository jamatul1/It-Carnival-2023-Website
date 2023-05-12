export const textRevealVariant = {
  initial: {
    backgroundPosition: "100%",
  },
  animate: {
    backgroundPosition: "0%",
  },
};

export const textRevealStyles = `
background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 0) 50%
  );
  background-size: 300%;
  background-position: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`;
