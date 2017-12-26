import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';

const Home = () => {
  const allData = DataStore.getAll();
  console.log(allData);
  return (
    <HomeWrapper>
      <h1>Home page</h1>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
`;

export default Home;
