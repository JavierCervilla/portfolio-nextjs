import React, { useState, useEffect } from 'react'
import matter from 'gray-matter'
import { execSync } from 'child_process'
import fs from 'fs'

import HeaderData from '../../data/HeaderData'
import ProjectData from '../../data/ProjectsData'


import Header from '../../components/Header'
import FooterSection from '../../sections/FooterSection'
import ProjectSection from '../../sections/ProjectSection'
import Loader from '../../components/Loader'

const Projects = ({ finalData }) => {
    const [data, setData] = useState(false)
    const [headerData, setHeaderData] = useState(false)

    useEffect(() => {
        if (!data) {
            const search = location.search.split('=')[1];
            setData(search === 'es' ? finalData.es : finalData.en)
        }
        if (!headerData) {
            setHeaderData(HeaderData('en'))
        }
        console.log(data)
    }, [data, headerData])


    if (!data || !headerData) {
        return <Loader />
    }
    return (
        <>
            <Header data={headerData} />

            {console.log('finalData:', finalData)}
            <ProjectSection data={data} />
            <FooterSection />
        </>
    )
}

/* export async function getServerSideProps({ query }) {
    console.log("query:", query)
    return {
        props: {
            headerData: HeaderData(query.lang),
            data: await ProjectData(query.lang)
        }
    }
} */


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
        }
    }

}


export default Projects
