import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import List from '../components/list';

// Workaround for https://github.com/gatsbyjs/gatsby/issues/7399
// eslint-disable-next-line no-unused-vars
import typography from '../utils/typography';

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
    imgPersonalSite: file(relativePath: { eq: "icon.png" }) {
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
                Hi people
            </h1>
        </a>
        <p>I'm Jon. Thanks for visiting my website. It's under construction.</p>
        <p>I'm a full-stack software engineer who loves rigorous exception handling, efficient concurrent code, and fries with mayonnaise.</p>
        <a href="#projects">
            <h1 id="projects">
                Projects
            </h1>
        </a>
        <List items={[
            {
                label: 'Resume',
                description: 'Google Docs :)',
                img: data.imgResume,
                externalLink: '/resume.pdf',
            },
            {
                label: 'jonmellman.com',
                description: 'GatsbyJS, ReactJS, TypeScript',
                img: data.imgPersonalSite,
                githubLink: 'https://github.com/jonmellman/jonmellman.com',
            },
            {
                label: 'Minesweeper',
                description: 'Angular 2',
                img: data.imgMinesweeper,
                externalLink: '/minesweeper',
                githubLink: 'https://github.com/jonmellman/angular2-minesweeper',
            },
            {
                label: 'Trending Wikis',
                description: 'D3.js, Wikipedia APIs',
                img: data.imgTrendingWikis,
                externalLink: '/trending-wikis',
                githubLink: 'https://github.com/jonmellman/trending-wkis',
            },
            {
                label: '3D Spectogram',
                description: 'three.js, Web Audio APIs',
                img: data.imgAudioSpectogram,
                externalLink: '/3d-audio-visualizer',
                githubLink: 'https://github.com/jonmellman/3d-audio-visualizer',
            },
        ]}
        />
        <a href="#music">
            <h1 id="music">
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
            I keep a&nbsp;
            <a href="https://open.spotify.com/user/1242727868/playlist/74JYIKcLYVjm5oW2tMXNSH?si=lJQYbfEXTbqyjkl9k77gyw" target="_blank" rel="noopener noreferrer">
                Spotify playlist&nbsp;
            </a>
            of all the songs I've ever Shazaamed (from least to most recent).
        </p>
    </Layout>
);

export default IndexPage;

