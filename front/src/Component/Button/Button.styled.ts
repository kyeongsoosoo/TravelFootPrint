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
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`;

export default { ButtonWrapper };
