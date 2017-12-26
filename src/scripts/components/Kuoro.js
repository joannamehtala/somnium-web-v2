import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';

const Kuoro = (props) => {
  const page = DataStore.getPageBySlug(props.slug);
  const acf = page.acf;
  console.log(page);
  return (
    <Content>
      <span>{page.content.rendered}</span>
      <h2>{acf.johtaja_otsikko}</h2>
      <span>{acf.johtaja_teksti}</span>
      <img src={acf.johtaja_kuva} />
      <h2>{acf.laulajat_otsikko}</h2>
      <div>{acf.stemmat_sopraano}</div>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
`;

export default Kuoro;
