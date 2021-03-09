import styled from 'styled-components';
import { responsiveSize } from '../../lib/css/mixin';

interface IButtonWrapper {
  width: number;
  height: number;
}

const ButtonWrapper = styled.button<IButtonWrapper>`
  ${({ width, height }) =>
    responsiveSize(width, height, width / 2, height / 2)};

  background-color: ${props => props.theme.mainColor};
  border-radius: 20px;
  ${props => props.theme.btnFont}
  cursor: pointer;
`;

export default { ButtonWrapper };
