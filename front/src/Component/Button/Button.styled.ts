import styled from 'styled-components';

interface IButtonWrapper {
  width: number;
  height: number;
}

const ButtonWrapper = styled.button<IButtonWrapper>`
width: ${({ width }) => `${width}%;`}
height: ${({ height }) => `${height}%;`}
  background-color: ${props => props.theme.middleColor};
  border-radius: ${({ width }) => `${width / 5}%`};
  border: 0.2px solid rgba(0,0,0,0.3);
`;

export default { ButtonWrapper };
