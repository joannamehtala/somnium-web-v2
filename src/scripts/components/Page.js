import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';

import Blog from 'components/Blog.js';
import Konsertit from 'components/Konsertit.js';
import Kuoro from 'components/Kuoro.js';
import Kuuntele from 'components/Kuuntele.js';
import Medialle from 'components/Medialle.js';
import Yhteystiedot from 'components/Yhteystiedot.js';

const Page = props => {
  const page = DataStore.getPageBySlug(props.slug);
  const acf = page.acf;
  console.log(page);
  let contentComponent = null;

  switch (props.slug) {
    case 'kuoro':
    case 'choir':
      contentComponent = <Kuoro slug={props.slug} color={acf.theme_color} />;
      break;
    case 'konsertit':
      contentComponent = <Konsertit slug={props.slug} color={acf.theme_color} />;
      break;
    case 'kuuntele':
      contentComponent = <Kuuntele slug={props.slug} color={acf.theme_color} />;
      break;
    case 'blogi':
      contentComponent = <Blog slug={props.slug} color={acf.theme_color} />;
      break;
    case 'medialle':
      contentComponent = <Medialle slug={props.slug} color={acf.theme_color} />;
      break;
    case 'yhteystiedot':
      contentComponent = <Yhteystiedot slug={props.slug} color={acf.theme_color} />;
      break;
    break;
  }

  const bannerStyles = {
    background: '#eee url(' + page.better_featured_image.source_url + ') no-repeat center ' + acf.image_position + '%'
  };

  const titleStyles = {
    backgroundColor: acf.theme_color
  };

  return (
    <PageWrapper>
      <Banner style={bannerStyles}>
        <Title style={titleStyles}><h1>{page.title.rendered}</h1></Title>
      </Banner>
      <Content>
        {contentComponent != null ? (
          contentComponent
        ) : (
          <DefaultContent>{page.content.rendered}</DefaultContent>
        )}
      </Content>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 60vh;
  background-size: cover !important;
`;

const Title = styled.div`
  background-color: #70C1B3;
  min-width: 50px;
  max-width: 400px;
  position: absolute;
  left: 5%;
  top: 48vh;
  padding: 5px 25px 5px 25px;
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

const DefaultContent = styled.div``;

export default Page;
