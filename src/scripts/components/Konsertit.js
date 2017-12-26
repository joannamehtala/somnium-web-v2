import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';

const Konsertit = (props) => {
  const page = DataStore.getPageBySlug(props.slug);
  const acf = page.acf;
  console.log(page);
  return (
    <Content>
      <span>{page.content.rendered}</span>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
`;

export default Konsertit;
