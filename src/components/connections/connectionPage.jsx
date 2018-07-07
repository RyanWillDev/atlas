import React from 'react';
import styled from 'react-emotion';

import { ConnectionList } from './connectionList';
import { Connection } from './connection';

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const ConnectionPage = () => (
  <Container>
    <ConnectionList />
    <Connection />
  </Container>
);
