import type { NextPage } from 'next'
import Head from 'next/head'
import Content from '../components/layout/Content'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
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
