import styled from "styled-components";
import { color } from "../../Constants";
import React from "react";

import instagramLogo from "../../img/icons/instagram.svg";

const InstagramTile = () => {
  return (
    <Tile href="https://www.instagram.com/wassup_paris/">
      <Content>
        <img src={instagramLogo} alt=""/>
        <p>Follow us on Instagram</p>
      </Content>
    </Tile>
  );
};

export default InstagramTile;

const Tile = styled.a`
  position: relative;
  display: block;
  background-color: ${color("white")};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  :after {
    display: block;
    width: 100%;
    content: "";
    padding-bottom: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 80%;
  border: solid 6px ${color("black")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  padding: 10px;

  img {
    margin-bottom: 15px;
    width: 70px;
  }
  p {
    font-size: 16px;
    font-weight: bold;
    line-height: 2;
    letter-spacing: 7.6px;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
  }
`;
