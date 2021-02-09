import styled from 'styled-components';

const FoodSelectWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const FoodSelectTitle = styled.h1`
  font-size: ${props => props.theme.titleSize};
  font-weight: 800;
`;

export default {
  FoodSelectWrapper,
  FoodSelectTitle,
};
