import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { media } from "../../Constants";

const SectionIntro = ({ image }) => {
  return (
    <Section>
      <BackgroundImage
        fluid={image.src.childImageSharp.fluid}
        alt={image.alt}
      />
    </Section>
  );
};

export default SectionIntro;

const Section = styled.section`
  position: relative;
`;

const BackgroundImage = styled(Img)`
  height: 420px;
  ${media.greaterThan("tablet")`
    height: 610px;
  `}
`;
