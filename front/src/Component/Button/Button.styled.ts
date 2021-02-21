import styled from 'styled-components';

interface IButtonWrapper {
  width: number;
  height: number;
}

const ButtonWrapper = styled.button<IButtonWrapper>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}%`};
  background-color: ${props => props.theme.mainColor};
  border-radius: 20px;
  ${props => props.theme.btnFont}
  cursor: pointer;
`;

export default { ButtonWrapper };
