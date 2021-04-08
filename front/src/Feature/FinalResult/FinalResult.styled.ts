import styled from "styled-components";
import { responsiveSize } from "../../lib/css/mixin";

const FinalResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  min-height: 70vh;
  margin-bottom: 10vh;
`;

const FinalResultTextBox = styled.div`
  ${responsiveSize(700, 100, 300, 50)}
  text-align: center;
  line-height: 1.3em;
  font-size: ${({ theme }) => theme.middleFont};
  width: 60%;
`;

export default {
  FinalResultBox,
  FinalResultTextBox,
};
