import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";
import { flexCenter, responsiveSize } from "../../../../../../lib/css/mixin";

const SearchTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 10vh;
  width: 100%;
  & + & {
    margin-top: 3vh;
  }
`;

const SearchInputWrapper = styled.div`
  ${flexCenter}
  flex-shrink: 0;
  flex-direction: row;
  ${responsiveSize(600, 70, 300, 50)}
`;

const SearchInputInp = styled.input`
  display: block;
  ${responsiveSize(500, 70, 250, 50)}

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${(props) => props.theme.middleColor};

  & {
    padding-left: 20px;
    font-size: 24px;
  }
`;

const SearchSubmitBtn = styled(BiSearchAlt2)`
  ${responsiveSize(70, 70, 50, 50)}
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  color: white;
  margin-left: 10px;
  border-radius: 10px;
`;

export default {
  SearchTableWrapper,
  SearchInputWrapper,
  SearchInputInp,
  SearchSubmitBtn,
};
