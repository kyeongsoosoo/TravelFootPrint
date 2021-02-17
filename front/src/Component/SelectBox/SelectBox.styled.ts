import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60%;
  padding: 0 20px;
`;

const SelectBoxBtn = styled.button`
  width: 20%;
  height: 100%;
  border-radius: 60%;
  border: none;
  background-color: ${props => props.theme.mainColor};
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const SelectBoxResultWrapper = styled.div`
  ${flexCenter}
  width: 30%;
  height: 100%;
  border: 2px solid black;
  border-radius: 20%;
`;

export default {
  SelectBoxWrapper,
  SelectBoxBtn,
  SelectBoxResultWrapper,
};
