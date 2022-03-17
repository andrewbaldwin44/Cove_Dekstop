export const breakpointsConfig = {
  small: 499,
  mid: 768,
  large: 1200,
  xlarge: 1600,
};

export default function breakpoints(key: keyof typeof breakpointsConfig) {
  return (style: TemplateStringsArray | string) =>
    `@media (min-width: ${breakpointsConfig[key]}px) { ${style} }`;
}
