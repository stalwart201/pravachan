import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './components/Header'

const Home: NextPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Dumpstore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
    </div>
  )
}

export default Home
