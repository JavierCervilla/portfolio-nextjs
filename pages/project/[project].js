import React from 'react'
import { Container } from 'react-bootstrap'
import fs from 'fs'
import matter from 'gray-matter';
import marked from 'marked'
import path from 'path'

import HeaderData from '../../data/HeaderData'
import Head from 'next/head'
import Header from '../../components/Header'
import FooterSection from '../../sections/FooterSection'
//import ProjectData from '../../data/ProjectsData'

const Project = ({ headerData, data, content }) => {
    return (
        <>
            <Head>
                <title>Javier Cervilla | {data.title} </title>

                <meta name="keywords" content={data.description}></meta>
            </Head>
            <Header data={headerData} />
            <Container className='main-section'>
                <h1>{data.title.toUpperCase()}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Container>
            <FooterSection />
        </>)
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('projects')
    console.log("files:", files)
    const paths = files.filter(el => !el.includes('.')).map(filename => ({
        params: {
            project: filename.replace(".md", "")
        }
    }));
    console.log("paths: ", paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { project } }) => {
    const mdMetadata = fs.readFileSync(path.join("projects", project + ".md")).toString()

    const parsedMd = matter(mdMetadata)

    const htmlContent = marked(parsedMd.content)
    return {
        props: {
            headerData: HeaderData(),
            data: parsedMd.data,
            content: htmlContent
        }
    }
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


export default Project