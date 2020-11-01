import Head from 'next/head'
//DATA

import HomeData from '../data/HomeData'
import HeaderData from '../data/HeaderData'
import ProjectsData from '../data/ProjectsData'

//COMPONENTES

import Header from '../components/Header'
import MainSection from '../sections/MainSection'
import ProjectSection from '../sections/ProjectSection'
import FooterSection from '../sections/FooterSection'

// GIT

import sys from 'sys'
import { exec } from 'child_process'

export default function Home({ headerData, data, projectsData }) {
  return (
    <div>
      <Head>
        <title>Javier Cervilla | Dev && Prod </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="portfolio, react, nextjs, web, development, money, work, job, js, javascript"></meta>
      </Head>
      <Header data={headerData} />
      <MainSection data={data.mainSection} />
      <ProjectSection data={projectsData} />
      <FooterSection />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  console.log("query:", query)

  const pullData = async () => {
    let command = 'git submodule update --recursive --remote'
    await exec(command, (error, stdout, stderr) => {
      console.log('error:', error)
      console.log('stdout:', stdout)
      console.log('stderr:', stderr)
    })
    return await ProjectsData(query.lang)
  }

  const projectsData = await pullData()

  return {
    props: {
      headerData: HeaderData(query.lang),
      data: HomeData(query.lang),
      projectsData
    }
  }
}
