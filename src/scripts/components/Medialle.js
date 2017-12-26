import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';

const Medialle = (props) => {
  const page = DataStore.getPageBySlug(props.slug);
  const acf = page.acf;
  return (
    <Content>
      <span>{page.content.rendered}</span>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
`;

export default Medialle;
