import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../components/layout/Content'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta
          property='og:title'
          content='Sam Almohanna | Creative Developer'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='Sam Almohanna - A creative web developer who is passionate about designing functional accessable digital products.'
        />
        <meta property='og:url' content='https://www.sam-almohanna.com' />
        <meta name='author' content='Sam Almohanna'></meta>
        <meta
          property='og:image'
          content='../public/laser-eyes-profile-pic.gif'
        />
        <meta property='og:image:type' content='image/gif' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='300' />
        <meta
          property='og:image:alt'
          content='Animated profile picture of Sam.'
        />
        <meta
          name='twitter:card'
          content='../public/laser-eyes-profile-pic.gif'
        />
        <title>Sam Almohanna | Creative Developer</title>
        <meta
          name='description'
          content='Sam Almohanna - A creative web developer who is passionate about designing functional accessable digital products.'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <Content />
    </div>
  )
}

export default Home
