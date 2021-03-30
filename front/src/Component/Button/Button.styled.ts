import styled from 'styled-components';
import { flexCenter, responsiveSize } from '../../lib/css/mixin';

interface IButtonWrapper {
  width: number;
  height: number;
}

const ButtonWrapper = styled.button<IButtonWrapper>`
  ${({ width, height }) =>
    responsiveSize(width, height, width / 1.5, height / 1.5)};
  ${flexCenter}
  background-color: ${props => props.theme.mainColor};
  border-radius: 15px;
  ${props => props.theme.btnFont}
  cursor: pointer;

  &: active {
    background-color: white;
    color: ${props => props.theme.mainColor};
    border: 3px solid ${props => props.theme.mainColor};
  }
`;

export default { ButtonWrapper };
