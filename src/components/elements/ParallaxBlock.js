import styled, { css } from "styled-components";
import Img from "gatsby-image";
import { color, media } from "../../Constants";
import React, { PureComponent } from "react";

class ParallaxBlock extends PureComponent {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.cardRef = React.createRef();
    this.state = {
      offset: 0,
      parallax: 0
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll);
    const element = this.cardRef.current;
    const offset = element.getBoundingClientRect().top + document.documentElement.scrollTop - element.offsetTop / 2;
    this.setState({
      offset
    })
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    const { offset } = this.state;
    const parallax = (offset - document.documentElement.scrollTop) / 5;
    this.setState({
      parallax
    })
  }

  render() {
    const { title, text, image, inverse } = this.props;
    const { parallax } = this.state;
    return (
      <Wrapper inverse={inverse}>
        <Image fluid={image.src.childImageSharp.fluid} alt={image.alt} />
        <Card inverse={inverse} ref={this.cardRef} position={parallax}>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Card>
      </Wrapper>
    );
  }
}

export default ParallaxBlock;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
  ${media.greaterThan("tablet")`
    flex-direction: row;
    margin-bottom: 150px;
    ${props => props.inverse && css`
      flex-direction: row-reverse;
    `}
  `}
`;

const Card = styled.div.attrs(({ position }) => ({
  style: {
    marginTop: position
  }
}))`
  display: block;
  width: 100%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  background: ${color("white")};
  padding: 25px 15px;
  z-index: 1;
  ${media.lessThan("tablet")`
    margin-top: 0 !important;
  `}
  ${media.greaterThan("tablet")`
    padding: 30px;
    position: absolute;
    width: 50%;
    left: 40%;
    ${props => props.inverse && css`
      left: inherit;
      right: 40%;
    `}
  `}
`;

const Title = styled.p`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 6px;
  margin-bottom: 15px;
  ${media.greaterThan("tablet")`
    font-size: 36px;
    letter-spacing: 12.4px;
    margin-bottom: 20px;
  `}
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: normal;
  line-height: 1.5;
  letter-spacing: 0.2px;
  ${media.greaterThan("tablet")`
    font-size: 18px;
    line-height: 1.73;
    letter-spacing: 0.3px;
  `}
`;

const Image = styled(Img)`
  display: block;
  width: 80%;
  ${media.greaterThan("tablet")`
    width: 60%;
  `}
`;
