import Head from 'next/head'
//DATA

import HomeData from '../data/HomeData'
import HeaderData from '../data/HeaderData'
import ProjectsData from '../data/ProjectsData'

//COMPONENTES
import Header from '../components/Header'
import FooterSection from '../sections/FooterSection'

export default function Home({ headerData, data, projectsData }) {
    return (
        <div>
            <Head>
                <title>Javier Cervilla | Dev && Prod </title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="portfolio, react, nextjs, web, development, money, work, job, js, javascript"></meta>
            </Head>
            <Header data={headerData} />

            {/* CONTACTO */}

            <FooterSection data={data.footerSection} />
        </div>
    )
}

export async function getServerSideProps({ query }) {
    console.log("query:", query)
    return {
        props: {
            headerData: HeaderData(query.lang),
            data: HomeData(query.lang),
            projectsData: ProjectsData(query.lang),
        }
    }
}
