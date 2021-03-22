import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../lib/css/mixin';

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${responsiveSize(180, 70, 80, 50)}
`;

const SelectBoxBtn = styled.button`
  ${flexCenter}
  ${responsiveSize(40, 60, 20, 40)}
  border-radius: 60%;
  border: none;
  background-color: ${props => props.theme.mainColor};
  color: white;
  ${props => props.theme.titleSize}
  cursor: pointer;
`;

const SelectBoxResultWrapper = styled.div`
  
  ${flexCenter}
  ${responsiveSize(50, 70, 20, 40)}
  border: 2px solid black;
  border-radius: 20%;
  margin: 0 4px;
`;

export default {
  SelectBoxWrapper,
  SelectBoxBtn,
  SelectBoxResultWrapper,
};
