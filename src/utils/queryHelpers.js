export function at(maxWidth, styles) {
  return `@media (max-width: ${maxWidth + "px"}) {
        ${styles}
    }`;
}

export function fCenter() {
  return `display:flex;justify-content:center;align-items:center;`;
}
