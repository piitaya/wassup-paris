import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";

import { media } from "../../Constants";
import InstagramTile from "../elements/InstagramTile";
import ProductTile from "../elements/ProductTile";

import titleSvg from "../../img/texts/product-fr.svg";

const SectionProducts = ({ data, titleImage }) => (
  <Section>
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
      <Col>
        <InstagramTile />
      </Col>
    </Row>
  </Section>
);

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allEtsyListing(limit: 9, sort: { fields: [creation_tsz] }) {
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

const Section = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
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
`;

const Title = styled.img`
  width: 110px;
  margin: 50px 0;
  ${media.greaterThan("desktop")`
    width: 180px;
    margin: 100px 0;
  `}
`;
