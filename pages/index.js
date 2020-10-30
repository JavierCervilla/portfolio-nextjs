import { useState, useEffect } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import Loader from '../components/Loader'
import HomeData from '../data/HomeData'
import HeaderData from '../data/HeaderData'
import MainSection from '../sections/MainSection'

export default function Home() {
  const [data, setData] = useState(null)
  const [headerData, setHeaderData] = useState(null)

  useEffect(() => {
    if (!data) {
      setData(HomeData(location.search.split('=')[1]))
    }
    if (!headerData) {
      setHeaderData(HeaderData(location.search.split('=')[1]))
    }
  }, [data, headerData])

  if (!data || !headerData) {
    return <Loader />
  }
  else {
    return (
      <div>
        <Head>
          <title>Javier Cervilla | Dev && Prod </title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="keywords" content="portfolio, react, nextjs, web, development, money, work, job, js, javascript"></meta>
        </Head>
        <Header data={headerData} />
        <MainSection data={data.mainSection} />
      </div>
    )
  }
}
