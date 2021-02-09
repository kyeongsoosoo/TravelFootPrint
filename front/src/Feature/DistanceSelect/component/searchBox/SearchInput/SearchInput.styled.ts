import styled from 'styled-components';
import { flexCenter } from '../../../../../lib/css/mixin';

const SearchInputWrapper = styled.div`
  ${flexCenter}
  width: 100%;
  height: 20%;
  margin-bottom: 5%;
`;

const SearchInputInp = styled.input`
  display: block;
  width: 400px;
  height: 100%;
  border-radius: 5px;
  background-color: ${props => props.theme.middleColor};

  &::placeholder {
    padding-left: 20px;
    font-size: 24px;
  }
`;

const SearchInputDaumBox = styled.div`
  width: 400px;
  height: 100%;
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

export default {
  SearchInputWrapper,
  SearchInputInp,
  SearchInputResult,
  SearchInputDaumBox,
};
