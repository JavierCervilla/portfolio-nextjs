import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { execSync } from 'child_process'
import fs from 'fs'
//DATA

import HomeData from '../data/HomeData'
import HeaderData from '../data/HeaderData'
import ProjectData from '../data/ProjectsData'

//COMPONENTES

import Header from '../components/Header'
import MainSection from '../sections/MainSection'
import ProjectSection from '../sections/ProjectSection'
import FooterSection from '../sections/FooterSection'
import Loader from '../components/Loader'


export default function Home({ finalData }) {
  const [data, setData] = useState(false)
  const [projectsData, setProjectsData] = useState(false)
  const [headerData, setHeaderData] = useState(false)

  useEffect(() => {
    if (!projectsData) {
      const search = location.search.split('=')[1];
      setProjectsData(search === 'es' ? finalData.es : finalData.en)
    }
    if (!data) {
      const search = location.search.split('=')[1];
      setData(search === 'es' ? finalData.es : finalData.en)
    }
    if (!headerData) {
      setHeaderData(HeaderData('en'))
    }
    console.log(data)
  }, [projectsData, headerData])

  if (!data || !HeaderData || !projectsData) {
    return <Loader />
  }
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

export async function getStaticProps({ }) {
  const esPaths = execSync(`find ./projects/ES -name '*.md'`).toString().split('\n').slice(0, -1)
  const enPaths = execSync(`find ./projects/EN -name '*.md'`).toString().split('\n').slice(0, -1)

  const esFilesData = []
  esPaths.forEach(el => {
    esFilesData.push(matter(fs.readFileSync(el).toString()).data)
  })
  const enFilesData = []
  enPaths.forEach(el => {
    enFilesData.push(matter(fs.readFileSync(el).toString()).data)
  })

  const enData = HomeData()
  const esData = HomeData('es')

  const enProjectsData = ProjectData()
  const esProjectsData = ProjectData('es')

  let finalData = {
    en: {
      ...enProjectsData,
      ...enData,
      projects: enFilesData
    },
    es: {
      ...esProjectsData,
      ...esData,
      projects: esFilesData
    }
  }
  return {
    props: {
      finalData,
    }
  }

}

/* export async function getServerSideProps({ query }) {
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
} */
