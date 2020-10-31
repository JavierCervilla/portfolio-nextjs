import fs from 'fs'
import matter from 'gray-matter';
import path from 'path'

const getPaths = async () => {
    const files = fs.readdirSync('projects')
    const paths = files.map(filename => (filename.replace(".md", "")));
    return paths;
}

const ProjectData = (lang) => {
    if (lang === 'es') {
        return PROJECTS_EN()
    }
    else if (lang === 'en') {
        return PROJECTS_EN();
    }
    else {
        return PROJECTS_EN();
    }
}

const PROJECTS_EN = async () => {
    const dataPaths = await getPaths()
    const projects = dataPaths.map((item) => ({
        title: item,
        img: `/img/projects/${item}.jpg`,
        url: `${item}`,
    }))

    return {
        query: '?lang=en',
        title: 'Last Works:',
        projects
    }
}

const PROJECTS_ES = () => {
    return {
        query: '?lang=es',
        query: '',
        title: 'Ultimos Trabajos:',
        projects: [
            {
                title: 'title1',
                description: 'Minim ullamco mollit enim dolor ut est reprehenderit anim sunt elit veniam officia culpa proident.',
                img: ['/img/projects/default.png', '/img/projects/default.png', '/img/projects/default.png'],
                tecnologias: ['tecnologia1', 'tecnologia2'],
                url: 'url_del_deploy',
                github: 'url_github',
                seeMore: 'Show Details'
            },
            {
                title: 'titulo2',
                description: 'Minim ullamco mollit enim dolor ut est reprehenderit anim sunt elit veniam officia culpa proident.',
                img: ['/img/projects/default.png', '/img/projects/default.png', '/img/projects/default.png'],
                tecnologias: ['tecnologia1', 'tecnologia2'],
                url: 'url_del_deploy',
                github: 'url_github',
                seeMore: 'Show Details'
            },
            {
                title: 'titulo3',
                description: 'Minim ullamco mollit enim dolor ut est reprehenderit anim sunt elit veniam officia culpa proident.',
                img: ['/img/projects/default.png', '/img/projects/default.png', '/img/projects/default.png'],
                tecnologias: ['tecnologia1', 'tecnologia2'],
                url: 'url_del_deploy',
                github: 'url_github',
                seeMore: 'Show Details'
            }
        ]

    }
}

export default ProjectData
