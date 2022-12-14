import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/assets/airbnb.png" />
      </Head>
      
      {/** Header */}
      <Header />
      <Banner />
      {/* * Content */}

    </div>
  )
}

export default Home
