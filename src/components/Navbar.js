import React, { PureComponent } from "react";
import styled, { css } from "styled-components";

import { color, media } from "../Constants";
import WassupLogo from "./elements/WassupLogo";
import Button from "./elements/Button";

import burger from "../img/icons/burger.svg";
import cross from "../img/icons/cross.svg";
import instagram from "../img/icons/instagram.svg";

class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
  }

  handleBurgerClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isOpen } = this.state;

    return (
      <NavWrapper>
        <Burger>
          <ButtonIcon onClick={this.handleBurgerClick}>
            <img src={isOpen ? cross : burger} />
          </ButtonIcon>
        </Burger>
        <Links>
          <a href="">Produits</a>
          <a href="">Savoir-Faire</a>
          <a href="">Contact</a>
        </Links>
        <WassupLogo />
        <Actions>
          <ButtonIcon as="a" href="https://www.instagram.com/wassup_paris/">
            <img src={instagram} />
          </ButtonIcon>
          <Button
            as="a"
            small
            orange
            href="https://www.etsy.com/shop/WassupParisStore?ref=website"
          >
            Shop on Etsy
          </Button>
        </Actions>
        <MobileMenu isOpen={isOpen}>
          <a href="https://www.etsy.com/shop/WassupParisStore?ref=website">Shop on Etsy</a>
          <a href="">Produits</a>
          <a href="">Savoir-Faire</a>
          <a href="">Contact</a>
          <a href="https://www.instagram.com/wassup_paris/">Instagram</a>
        </MobileMenu>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${color("white")};
  height: 60px;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;
  ${media.greaterThan("desktop")`
    padding: 0 50px;
  `}
  svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    height: 42px;
    ${media.greaterThan("desktop")`
      height: 60px;
    `}
  }
`;

const Links = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    font-weight: bold;
    font-size: 11px;
    letter-spacing: 3.8px;
    text-transform: uppercase;
    margin-right: 40px;
  }
  ${media.lessThan("desktop")`
    display: none;
  `}
`;

const Actions = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    margin-left: 20px;
  }
  ${media.lessThan("desktop")`
    display: none;
  `}
`;

const Burger = styled.div`
  ${media.greaterThan("desktop")`
    display: none;
  `}
`;

const ButtonIcon = styled.button`
  cursor: pointer;
  background: none;
  padding: 0;
  height: 50px;
  width: 50px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: ${color("white")};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid ${color("black")};
  border-bottom: 1px solid ${color("black")};
  overflow: hidden;

  height: ${(18 + 30) * 5 + 30}px;
  transition: height 200ms ease-in-out;
  ${props => !props.isOpen && css`
    height: 0;
    border-width: 0;
    transition: height 200ms ease-in-out, border-width 200ms step-end;
  `};
  
  a {
    width: 216px;
    height: 18px;
    font-family: FuturaStd;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    line-height: normal;
    letter-spacing: 6.2px;
    text-align: center;
    color: ${color("black")};
    transition: color 180ms ease-in-out;
    margin: 15px;
    :hover {
      color: ${color("orange")};
    }
    :first-child {
      color: ${color("orange")};
    }
  }
`;
