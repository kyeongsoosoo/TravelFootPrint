import styled from "styled-components";
import { responsiveSize } from "../../lib/css/mixin";

const OffsetSelectSubTttle = styled.div`
  font-size: ${({ theme }) => theme.middleFont};
  ${responsiveSize(420, 80, 250, 80)}
  line-height: 1.3em;
  text-align: center;
  margin: 10px 0;
`;

const OffsetExplainBox = styled.div`
  font-size: ${({ theme }) => theme.middleFont};
  ${responsiveSize(420, 80, 250, 80)}
  color : gray;
  line-height: 1.3em;
  text-align: center;
  margin: 20px 0;
`;

export default {
  OffsetSelectSubTttle,
  OffsetExplainBox,
};
