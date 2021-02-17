import { BiSearchAlt2 } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

const SearchTableWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

const SearchInputWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  width: 70%;
`;

const SearchInputInp = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${props => props.theme.middleColor};

  & {
    padding-left: 20px;
    font-size: 24px;
  }
`;

const SearchInputResult = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  width: 400px;
  height: 100%;
  border-radius: 5px;
  background-color: white;
  font-weight: 600;
  font-size: 24px;
`;

const SearchSubmitBtn = styled(BiSearchAlt2)`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.mainColor};

  color: white;
  margin-left: 10px;
  border-radius: 10px;
`;

export default {
  SearchTableWrapper,
  SearchInputWrapper,
  SearchInputInp,
  SearchInputResult,
  SearchSubmitBtn,
};
