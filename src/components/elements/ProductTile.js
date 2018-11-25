import styled from "styled-components";
import Img from "gatsby-image";
import Button from "./Button";
import { color, media } from "../../Constants";
import React from "react";

const ProductTile = ({ title, image, price, url }) => {
  return (
    <ProductWrapper>
      <ImgLink href={url}>
        <ProductImg fluid={image.childImageSharp.fluid} />
      </ImgLink>
      <Title>
        <p>{title}</p>
      </Title>
      <Price>
        <p>{price}€</p>
      </Price>
      <Button as="a" orange href={url}>
        Shop on Esty
      </Button>
    </ProductWrapper>
  );
};

export default ProductTile;

const ProductWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${Button} {
    width: 100%;
  }
  ${media.greaterThan("desktop")`
    margin-bottom: 50px;
    ${Button} {
      width: auto; 
    }
  `}
`;

const ImgLink = styled.a`
  display: block;
  width: 100%;
`;

const ProductImg = styled(Img)`
  width: 100%;
  margin-bottom: 5px;
  ${media.greaterThan("desktop")`
    margin-bottom: 10px;
  `}
`;

const Title = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-transform: uppercase;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    line-height: 1.19;
    letter-spacing: 3.6px;
    text-align: center;
    color: ${color("black")};
  }
  ${media.greaterThan("desktop")`
    height: 65px;
    p {
      letter-spacing: 8.9px;
      font-size: 26px;
      line-height: 1;
    }
  `}
`;

const Price = styled.div`
  margin-bottom: 10px;
  p {
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 2.4px;
    text-align: center;
    color: ${color("black")};
  }
  ${media.greaterThan("desktop")`
    margin-bottom: 20px;
    p {
      letter-spacing: 8.9px;
      font-size: 26px;
      line-height: 1;
    }
  `}
`;
