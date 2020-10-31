import { Container, Card, Row } from "react-bootstrap"
import Link from 'next/link'
import CarouselProyects from "../components/CarouselProjects"

const ProjectSection = ({ data }) => {
    return (
        <section className='bg-dark projects-container' >
            <Container style={{ textAlign: 'center' }} className='carousel-container'>
                <h3 style={{ padding: '.25em', width: 'auto', borderBottom: 'solid 1px #e9e5df' }}>{data.title}</h3>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    {data.projects && data.projects.map((project) =>
                        (
                            <Card key={`projects-${project}`} className='bg-secondary' style={{ margin: '0.5em', maxWidth: '400px' }}>
                                <Link href={`/project/${project.url}${data.query}`}><a><img style={{ maxWidth: '100%', margin: 'auto' }} src={project.img} /></a></Link>
                                <Link href={`/project/${project.url}${data.query}`}><a><Card.Title>{project.title}</Card.Title></a></Link>
                                {console.log('project:', project)}
                            </Card>

                        ))}
                </Row>
            </Container >
        </section >
    )
}

export default ProjectSection
