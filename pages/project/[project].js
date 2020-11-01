import React from 'react'
import fs from 'fs'
import matter from 'gray-matter';
import marked from 'marked'
import path from 'path'

import HeaderData from '../../data/HeaderData'
import Head from 'next/head'
import Header from '../../components/Header'
import FooterSection from '../../sections/FooterSection'


import { Container } from 'react-bootstrap'
import { execSync } from 'child_process';



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


/* const pullData = () => {
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
} */

export const getStaticPaths = async () => {
    const esFiles = fs.readdirSync('projects/ES')
    const esPaths = esFiles.map(filename => (filename.replace(".md", "")))


    const enFiles = fs.readdirSync('projects/EN')
    const enPaths = enFiles.map(filename => (filename.replace(".md", "")))


    const allPaths = [...enPaths, ...esPaths]
    console.log(allPaths)
    const paths = allPaths.filter(el => !el.includes('.')).map(filename => ({
        params: {
            project: filename
        }
    }));
    console.log("paths: ", paths)
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { project } }) => {


    let filePath;
    filePath = execSync(`find ./projects -name '${project}.md'`).toString().split('\n')[0].toString()
    const mdMetadata = fs.readFileSync(filePath).toString()

    const parsedMd = matter(mdMetadata)

    const htmlContent = marked(parsedMd.content)
    return {
        props: {
            headerData: HeaderData(),
            data: parsedMd.data,
            content: htmlContent
        },

    }
}


export default Project