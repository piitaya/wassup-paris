import styled, { css } from "styled-components";
import { color, media } from "../../Constants";

const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;


  text-transform: uppercase;
  font-family: FuturaStd;
  font-size: 14px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  padding: 0 2px;
  
  height: 30px;
  letter-spacing: 3px;
  ${media.greaterThan("desktop")`
    min-width: 190px;
    height: 50px;
    padding: 0 11px;
    letter-spacing: 4.8px;
    ${props => props.small && css`
      height: 40px;
    `}
  `}


  /* Normal (white) */
  background-color: ${color("white")};
  color: ${color("orange")};
  transition: color 180ms ease-in-out, background-color 180ms ease-in-out;
  :hover {
    background-color: ${color("orange")};
    color: ${color("white")};
  }

  ${props => props.orange && css`
    background-color: ${color("orange")};
    color: ${color("white")};
    transition: transform 180ms ease-in-out;
    :hover {
      background-color: ${color("orange")};
      color: ${color("white")};
      transform: scale(1.1);
    }
  `}
`;

export default Button;
