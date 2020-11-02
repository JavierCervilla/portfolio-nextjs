import React from 'react'
import fs from 'fs'
import matter from 'gray-matter';
import marked from 'marked'
import { execSync } from 'child_process';
import ReactMarkdown from 'react-markdown'

import HeaderData from '../../data/HeaderData'
import Loader from '../../components/Loader';

import { Container, Row, Col } from 'react-bootstrap'
import MainLayout from '../../layouts/MainLayout';
import MainSection from '../../sections/MainSection';



const Project = ({ headerData, data, content }) => {
    if (!data || !headerData) {
        return <Loader />
    }
    return (
        <MainLayout title={data.title}>
            <MainSection>
                <h1 >{data.title.toUpperCase()}</h1>
                <Row><img src={`/img/projects/${data.img}`} style={{ maxWidth: '100%', margin: 'auto' }} alt={data.title}></img></Row>
                {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
                <ReactMarkdown>{content}</ReactMarkdown>
            </MainSection>
        </MainLayout >)
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

export const getStaticPaths = async () => {
    pullData()

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
        fallback: true
    }
}

export const getStaticProps = async ({ params: { project } }) => {
    pullData()

    let filePath;
    filePath = execSync(`find ./projects -name '${project}.md'`).toString().split('\n')[0].toString()
    console.log('filePath:\n', filePath)
    console.log('url:', project)
    const mdMetadata = fs.readFileSync(filePath).toString()

    const parsedMd = matter(mdMetadata)

    const htmlContent = marked(parsedMd.content)
    return {
        props: {
            headerData: HeaderData(),
            data: parsedMd.data,
            //content: htmlContent
            content: parsedMd.content
        },
        revalidate: 20
    }
}


export default Project