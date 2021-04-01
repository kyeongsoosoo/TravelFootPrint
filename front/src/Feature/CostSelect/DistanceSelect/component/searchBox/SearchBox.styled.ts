import styled from "styled-components";
import { responsiveSize } from "../../../../../lib/css/mixin";

const SearchBoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  ${responsiveSize(600, 50, 300, 50)}
  min-height: 50%;
`;

export default {
  SearchBoxWrapper,
};
