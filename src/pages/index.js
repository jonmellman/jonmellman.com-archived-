import React from 'react';

import Layout from '../components/layout';
import List from '../components/list';

// Workaround for https://github.com/gatsbyjs/gatsby/issues/7399
// eslint-disable-next-line no-unused-vars
import typography from '../utils/typography';

const IndexPage = () => (
  <Layout>
    <h1>
        <span role="img" aria-label="Hi">👋 </span>
        Hi people
    </h1>
    <p>I'm Jon. Thanks for visiting my website. It's under construction.</p>
    <p>I'm a full-stack product engineer who loves rigorous exception handling, efficient concurrent code, and fries with mayonnaise.</p>
    <List items={[
      {
        href: '/resume.pdf',
        label: 'Resume',
      },
      {
        href: '/minesweeper',
        label: 'Minesweeper',
      },
      {
        href: '/trending-wikis',
        label: 'Trending Wikis',
      },
      {
        href: '/3d-audio-visualizer',
        label: '3D Audio Spectogram',
      },
    ]}
    />
  </Layout>
);

export default IndexPage;
