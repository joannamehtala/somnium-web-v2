import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore';

import Blog from 'components/Blog.js';
import Konsertit from 'components/Konsertit.js';
import Kuoro from 'components/Kuoro.js';
import Kuuntele from 'components/Kuuntele.js';
import Medialle from 'components/Medialle.js';
import Yhteystiedot from 'components/Yhteystiedot.js';

const Page = (props) => {
  console.log(props.slug);
  const page = DataStore.getPageBySlug(props.slug);
  const acf = page.acf;
  console.log(page);
  let contentComponent = null;

  switch(props.slug){
    case 'kuoro':
      contentComponent = <Kuoro slug={props.slug}/>;
      break;
    case 'konsertit':
      contentComponent = <Konsertit slug={props.slug}/>;
      break;
    case 'kuuntele':
      contentComponent = <Kuuntele slug={props.slug}/>;
      break;
    case 'blogi':
      contentComponent = <Blog slug={props.slug}/>;
      break;
    case 'medialle':
      contentComponent = <Medialle slug={props.slug}/>;
      break;
    case 'yhteystiedot':
      contentComponent = <Yhteystiedot slug={props.slug}/>;
      break;
    break;
  }

  return (
    <PageWrapper>
      <Banner>
        <h1>{page.title.rendered}</h1>
      </Banner>
      <Content>
        {(contentComponent != null) ? contentComponent :
          <DefaultContent>{page.content.rendered}</DefaultContent>
        }
      </Content>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
`;

const DefaultContent = styled.div``;

export default Page;
