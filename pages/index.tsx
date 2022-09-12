/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Wrapper, HomePage } from '../components'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Susten.org</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Wrapper children={<HomePage />}></Wrapper>
      {/* the warning is gone when I replaced the FC with JSX.Element */}
      {/* it is working */}
    </>
  )
}

export default Home
