import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import List from '../components/list'
import Sprinkles from '../components/sprinkles'

const listItems = [
    {
        href: '/resume.pdf',
        label: 'Resume'
    },
    {
        href: '/minesweeper',
        label: 'Minesweeper'
    },
    {
        href: '/trending-wikis',
        label: 'Trending Wikis'
    },
    {
        href: '/3d-audio-visualizer',
        label: '3D Audio Spectogram'
    }
]

const IndexPage = () => (
  <Layout>
    {/*<Sprinkles/>*/}
    <h1 className="test">Hi people</h1>
    <p>I'm Jon. Thanks for visiting my website. It's under construction.</p>
    <p>I'm a full-stack product engineer who loves thoughtful exception handling, efficient concurrent code, and fries with mayonnaise.</p>
    {/*<div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>*/}
    <List items={listItems}/>
  </Layout>
)

export default IndexPage
