import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { media, color } from "../../Constants";

const SectionViewMore = ({ text, image }) => {
  return (
    <Section>
      <BackgroundImage
        fluid={image.src.childImageSharp.fluid}
        alt={image.alt}
      />
      <Text href="https://www.etsy.com/shop/WassupParisStore?ref=website">{text}</Text>
    </Section>
  );
};

export default SectionViewMore;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  ${media.greaterThan("tablet")`
    padding: 50px;
  `}
`;

const BackgroundImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Text = styled.a`
  background: none;
  z-index: 1;
  
  max-width: 600px;
  text-align: center;

  border: 4px solid ${color('white')};
  font-size: 11px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 3.8px;
  color: ${color("white")};
  text-transform: uppercase;
  padding: 15px;

  ${media.greaterThan("desktop")`
    border: 4px solid ${color('white')};
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 8px;
    padding: 30px 50px;
  `}
`;
