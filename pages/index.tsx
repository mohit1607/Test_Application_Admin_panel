/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomePage } from '../components'
import Dashboard from './dashboard'
import LandingPage from './landing_page'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Test Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LandingPage/>
      {/* <Dashboard></Dashboard> */}
    </>
  )
}

export default Home
