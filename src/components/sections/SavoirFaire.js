import React from "react";
import styled from "styled-components";

import { media } from "../../Constants";
import Container from "../elements/Container";
import ParallaxBlock from "../elements/ParallaxBlock";

import titleSvg from "../../img/texts/savoir-faire-fr.svg";

const SectionSavoirFaire = ({ blocks }) => {
  return (
    <Section>
      <Container>
        <Title src={titleSvg} />
        {(blocks || []).map((block, i) => (
          <ParallaxBlock
            key={i}
            title={block.title}
            text={block.text}
            image={block.image}
            inverse={i % 2 === 0}
          />
        ))}
      </Container>
    </Section>
  );
};

export default SectionSavoirFaire;

const Section = styled.section`
  position: relative;
`;

const Title = styled.img`
  width: 130px;
  margin: 50px 0;
  ${media.greaterThan("desktop")`
    width: 210px;
    margin: 100px 0;
  `}
`;
