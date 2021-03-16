import styled from 'styled-components';
import { flexCenter } from '../../lib/css/mixin';

type SelectBoxWrapperType = {
  width: number;
  height: number;
};

const SelectBoxWrapper = styled.div<SelectBoxWrapperType>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}%`};
`;

const SelectBoxBtn = styled.button`
  ${flexCenter}
  width: 20%;
  height: 70%;
  border-radius: 60%;
  border: none;
  background-color: ${props => props.theme.mainColor};
  color: white;
  ${props => props.theme.titleSize}
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
