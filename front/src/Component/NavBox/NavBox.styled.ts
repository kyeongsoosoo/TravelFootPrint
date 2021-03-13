import styled from 'styled-components';

const LinkBoxWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 900px;
  height: 5vh;
  ${props => props.theme.btnFont};
`;

export default {
  LinkBoxWrapper,
};
