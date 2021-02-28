import { BiSearchAlt2 } from 'react-icons/bi';
import styled from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

const SearchTableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 30%;
  width: 100%;
  & + & {
    margin-top: 3vh;
  }
`;

const SearchInputWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 70%;
  max-width: 700px;
`;

const SearchInputInp = styled.input`
  display: block;
  width: 100%;
  height: 70px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${props => props.theme.middleColor};

  & {
    padding-left: 20px;
    font-size: 24px;
  }
`;

const SearchSubmitBtn = styled(BiSearchAlt2)`
  width: 40px;
  height: 70px;
  background-color: ${props => props.theme.mainColor};

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
