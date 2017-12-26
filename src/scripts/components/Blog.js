import React from 'react';
import styled from 'styled-components';
import DataStore from 'flux/stores/DataStore.js';

const Blog = (props) => {
  const page = DataStore.getPageBySlug(props.slug);

  return (
    <BlogWrapper>
      <span>{page.content.rendered}</span>
    </BlogWrapper>
  );
}

const BlogWrapper = styled.div`
  width: 100%;
`;

export default Blog;
