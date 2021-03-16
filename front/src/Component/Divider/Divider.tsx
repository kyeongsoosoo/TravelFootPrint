import React from 'react';
import styled from 'styled-components';
import { responsiveSize } from '../../lib/css/mixin';

const DividerWrapper = styled.div`
  ${responsiveSize(700, 0, 300, 0)}
  border: 0.1px solid gray;
  margin: 50px 0;
`;

function Divider() {
  return <DividerWrapper />;
}

export default Divider;
