import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { execSync } from 'child_process'
import fs from 'fs'
//DATA

import HomeData from '../data/HomeData'
import ProjectData from '../data/ProjectsData'

//COMPONENTES

import MainSection from '../sections/MainSection'
import Projects from '../components/Projects'
import Loader from '../components/Loader'
import MainLayout from '../layouts/MainLayout'
import MainCard from '../components/MainCard'


export default function Home({ finalData }) {
  const [data, setData] = useState(false)
  const [projectsData, setProjectsData] = useState(false)

  useEffect(() => {
    if (!projectsData) {
      const search = location.search.split('=')[1];
      setProjectsData(search === 'es' ? finalData.es : finalData.en)
    }
    if (!data) {
      const search = location.search.split('=')[1];
      setData(search === 'es' ? finalData.es : finalData.en)
    }
    console.log(data)
  }, [projectsData])

  if (!data || !projectsData) {
    return <Loader />
  }
  return (
    <MainLayout >
      <MainSection data={data.mainSection} >
        <MainCard data={data.mainSection} />
      </MainSection>
      <Projects data={projectsData} />
    </MainLayout>
  )
}

const pullData = () => {
  try {
    let command = 'git submodule update --recursive --remote'
    return execSync(command, (error, stdout, stderr) => {
      console.log('error:', error)
      console.log('stdout:', stdout)
      console.log('stderr:', stderr)
    })
  } catch (error) {
    return
  }
}


export async function getStaticProps({ }) {
  pullData()
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
    },
    revalidate: 20
  }

}