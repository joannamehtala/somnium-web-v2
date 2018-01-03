import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';

const Home = () => {
  const page = DataStore.getPageBySlug('home');
  const acf = page.acf;

  const bannerStyles = {
    background: '#eee url(' + page.better_featured_image.source_url + ') no-repeat center ' + acf.image_position + '%'
  };

  const titleStyles = {
    backgroundColor: acf.theme_color
  };

  return (
    <HomeWrapper>
      <Banner style={bannerStyles}>
        <Title style={titleStyles}><h1>{page.title.rendered}</h1></Title>
      </Banner>
      <Content>
        {page.content.rendered}
      </Content>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover !important;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  min-width: 50px;
  padding: 5px 25px 5px 25px;
  top: 40vh;
  position: absolute;
`;

const Content = styled.div`
  margin: 30px auto;
  width: 85%;

  @media (max-width: 768px) and (min-width: 576px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`;

export default Home;
