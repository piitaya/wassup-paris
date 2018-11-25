import styled from "styled-components";
import { media } from "../../Constants";

const Container = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: auto;
  ${media.greaterThan('desktop')`
    padding: 0 30px;
  `}
`;

export default Container;