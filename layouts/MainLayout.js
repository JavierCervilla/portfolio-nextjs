import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import HeaderData from '../data/HeaderData'
import Loader from '../components/Loader'
import Footer from '../components/Footer'

const MainLayout = ({ children, title = false }) => {
    const [headerData, setHeaderData] = useState(false)

    useEffect(() => {
        if (!headerData) {
            const search = location.search.split('=')[1];
            setHeaderData(HeaderData(search ? 'es' : ''))
        }
    }, [headerData])

    if (!headerData) {
        return <Loader />
    }
    else {
        return (
            <section className='main-layout'>
                <Head>
                    <title>{`Javier Cervilla |  ${title ? title : 'Dev && Prod'}`} </title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="keywords" content="portfolio, react, nextjs, web, development, money, work, job, js, javascript"></meta>
                    <meta name="keywords" content="Portfolio, portfolio, development, web, js, javascript, node, nextjs, next.js, html, react, redux"></meta>
                    <link rel="stylesheet" href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"></link>
                </Head>
                <Header data={headerData} />
                {children}
                <Footer />
            </section>
        )
    }
}

export default MainLayout
