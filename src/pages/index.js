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
        description: 'This is my resume',
      },
      {
        href: '/minesweeper',
        label: 'Minesweeper',
        description: 'This is a game I made to learn Angular 2 when the beta was first announced.',
      },
      {
        href: '/trending-wikis',
        label: 'Trending Wikis',
        description: 'This shows what the most popular wiki articles are this week. I wrote this to learn D3 and explore Wikipedia\'s API.',
      },
      {
        href: '/3d-audio-visualizer',
        label: '3D Audio Spectogram',
        description: 'A fun little project that creates a 3D spectogram of your microphone audio. I made this to learn about three.js and the Web Audio API.',
      },
    ]}
    />
  </Layout>
);

export default IndexPage;
