import styled from 'styled-components';

const FSBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 700px;
  height: 70%;
`;

const FSBoxSidebarWrapper = styled.aside`
  height: 80%;
  width: 20%;
`;
const FSBoxMainWrapper = styled.main`
  height: 80%;
  width: 80%;
`;

export default { FSBoxWrapper, FSBoxSidebarWrapper, FSBoxMainWrapper };
