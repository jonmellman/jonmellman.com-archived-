import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import List from '../components/list';

// Workaround for https://github.com/gatsbyjs/gatsby/issues/7399
// eslint-disable-next-line no-unused-vars
import typography from '../utils/typography';

(function () {
    return 'this is a test';
}());


export const query = graphql`
query {
    imgLogo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
            fixed(width: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    },
    imgResume: file(relativePath: { eq: "resume.png" }) {
        childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    imgMinesweeper: file(relativePath: { eq: "minesweeper.png" }) {
        childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    imgTrendingWikis: file(relativePath: { eq: "trending-wikis.png" }) {
        childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    imgAudioSpectogram: file(relativePath: { eq: "audio-spectogram.png" }) {
        childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`;

const imgLogoStyle = {
    display: 'block',
    margin: 'auto',
};
const IndexPage = ({ data }) => (
    <Layout>
        <Img fixed={data.imgLogo.childImageSharp.fixed} style={imgLogoStyle} />
        <a href="#header">
            <h1 id="header">
                <span role="img" aria-label="Hi">👋 </span>
                Hi people
            </h1>
        </a>
        <p>I'm Jon. Thanks for visiting my website. It's under construction.</p>
        <p>I'm a full-stack software engineer who loves rigorous exception handling, efficient concurrent code, and fries with mayonnaise.</p>
        <a href="#projects">
            <h1 id="projects">
                <span role="img" aria-label="Hi">🤓 </span>
                Projects
            </h1>
        </a>
        <List items={[
            {
                href: '/resume.pdf',
                label: 'Resume',
                description: 'This is my resume',
                img: data.imgResume,
            },
            {
                href: '/minesweeper',
                label: 'Minesweeper',
                description: 'This is a game I made to learn Angular 2 when the beta was first announced.',
                img: data.imgMinesweeper,
            },
            {
                href: '/trending-wikis',
                label: 'Trending Wikis',
                description: 'This shows what the most popular wiki articles are this week. I wrote this to learn D3 and explore Wikipedia\'s API.',
                img: data.imgTrendingWikis,
            },
            {
                href: '/3d-audio-visualizer',
                label: '3D Audio Spectogram',
                description: 'A fun little project that creates a 3D spectogram of your microphone audio. I made this to learn about three.js and the Web Audio API.',
                img: data.imgAudioSpectogram,
            },
        ]}
        />
        <a href="#music">
            <h1 id="music">
                <span role="img" aria-label="Hi">🤘 </span>
                Music
            </h1>
        </a>
        <p>
            I play bass with&nbsp;
            <a href="https://thedriftwoodwalkers.com" target="_blank" rel="noopener noreferrer">
                The Driftwood Walkers
            </a>
            .
        </p>
        <p>
            Sometimes I make music and put it on&nbsp;
            <a href="https://soundcloud.com/jonathan-mellman" target="_blank" rel="noopener noreferrer">
                SoundCloud
            </a>
            .
        </p>
        <p>
            <a href="https://open.spotify.com/user/1242727868/playlist/74JYIKcLYVjm5oW2tMXNSH?si=lJQYbfEXTbqyjkl9k77gyw" target="_blank" rel="noopener noreferrer">
                Here&nbsp;
            </a>
            is a Spotify playlist of all the songs I've ever Shazaamed, from least to most recent.
        </p>
    </Layout>
);

export default IndexPage;

