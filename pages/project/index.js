import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { execSync } from 'child_process'
import fs from 'fs'

import ProjectData from '../../data/ProjectsData'


import Projects from '../../components/Projects'
import Loader from '../../components/Loader'
import MainLayout from '../../layouts/MainLayout'
import MainSection from '../../sections/MainSection'

const ProjectsPage = ({ finalData }) => {
    const [data, setData] = useState(false)

    useEffect(() => {
        if (!data) {
            const search = location.search.split('=')[1];
            setData(search === 'es' ? finalData.es : finalData.en)
        }
        console.log(data)
    }, [data])


    if (!data) {
        return <Loader />
    }
    return (
        <MainLayout>
            <MainSection>
                <Projects data={data} className='main-layout' />
            </MainSection>
        </MainLayout>
    )
}

const pullData = () => {
    try {
        console.log('entro')
        let command = 'git submodule update --recursive --remote && cp ./projects/images/*.jpg ./public/img/projects'
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

    console.log('enPaths:', enPaths)
    console.log('esPaths:', esPaths)

    const esFilesData = []
    esPaths.forEach(el => {
        esFilesData.push(matter(fs.readFileSync(el).toString()).data)
    })
    const enFilesData = []
    enPaths.forEach(el => {
        enFilesData.push(matter(fs.readFileSync(el).toString()).data)
    })

    const enData = ProjectData()
    const esData = ProjectData('es')

    let finalData = {
        en: {
            ...enData,
            projects: enFilesData
        },
        es: {
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


export default ProjectsPage
