import React from 'react';
import styled from 'react-emotion';

const Aside = styled('aside')`
  border-right: 2px solid #f5f5f5;
  font-size: 1.25rem;
  height: 100vh;
  max-width: 300px;
  width: 225px;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1rem 1rem;
  }

  ul > li {
    margin: 0.75rem auto;
    width: 100%;
  }
`;

export const ConnectionList = () => (
  <Aside>
    <h2>Saved Connections</h2>
    <ul>
      <li>talented</li>
      <li>thiket</li>
      <li>dyner</li>
    </ul>
  </Aside>
);
