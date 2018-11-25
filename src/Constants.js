import { generateMedia } from 'styled-media-query';

const colors = {
  black: "#000000",
  white: "#ffffff",
  orange: "#f56400"
};

const breakpoints = {
  xs: 0,
  sm: 48,
  md: 62,
  lg: 80
}

export const color = (name) => colors[name];

export const media = generateMedia({
  wide: `${breakpoints.lg}rem`,
  desktop: `${breakpoints.md}rem`,
  tablet: `${breakpoints.sm}rem`,
});