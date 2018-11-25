import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";

import { media } from "../../Constants";
import Container from "../elements/Container";
import InstagramTile from "../elements/InstagramTile";
import ProductTile from "../elements/ProductTile";

import titleSvg from "../../img/texts/product-fr.svg";

const SectionProducts = ({ data }) => (
  <Section>
    <Container>
      <Title src={titleSvg} />
      <Row>
        {data.allEtsyListing.edges.map(({ node }) => (
          <Col key={node.id}>
            <ProductTile
              title={node.title.split(" - ")[0]}
              url={node.url}
              price={node.price.split(".")[0]}
              image={node.localImage}
            />
          </Col>
        ))}
        <Col hideOnMobile>
          <InstagramTile />
        </Col>
      </Row>
    </Container>
  </Section>
);

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allEtsyListing(limit: 8, sort: { fields: [creation_tsz] }) {
            totalCount
            edges {
              node {
                listing_id
                id
                title
                url
                price
                localImage {
                  childImageSharp {
                    fluid(maxWidth: 512) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <SectionProducts {...props} data={data} />}
    />
  );
};

const Section = styled.section``;

const Row = styled.div`
  margin: -7px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  ${media.greaterThan("desktop")`
    margin: -25px;
  `};
`;

const Col = styled.div`
  padding: 7px;
  width: 50%;
  ${media.greaterThan("tablet")`
    width: 33.33%;
  `};
  ${media.greaterThan("desktop")`
    padding: 25px;
  `};

  ${props =>
    props.hideOnMobile &&
    css`
      ${media.lessThan("tablet")`
      display: none;
    `}
    `}
`;

const Title = styled.img`
  width: 110px;
  margin: 50px 0;
  ${media.greaterThan("desktop")`
    width: 180px;
    margin: 100px 0;
  `}
`;
