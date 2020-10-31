import React from 'react'
import HeaderData from '../../data/HeaderData'
import matter from 'gray-matter'
import path from 'path'
import Link from 'next/link'
import Head from 'next/head'

import ProjectData from '../../data/ProjectsData'

import Header from '../../components/Header'
import ProjectSection from '../../sections/ProjectSection'
import FooterSection from '../../sections/FooterSection'

const Projects = ({ headerData, data }) => {
    return (
        <>
            <Header data={headerData} />

            {/* <ProjectSection data={data} /> */}
            <FooterSection />
        </>
    )
}

export async function getServerSideProps({ query }) {
    console.log("query:", query)
    return {
        props: {
            headerData: HeaderData(query.lang),
            data: await ProjectData(query.lang)
        }
    }
}

export default Projects
