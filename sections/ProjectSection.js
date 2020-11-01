import { Container, Card, Row, Col } from "react-bootstrap"
import Link from 'next/link'


const ProjectSection = ({ data }) => {
    return (
        <section className='bg-dark projects-container' >
            <Container style={{ textAlign: 'center' }} className='carousel-container'>
                <h3 style={{ padding: '.25em', width: 'auto', borderBottom: 'solid 1px #e9e5df' }}>{data.title}</h3>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    {data.projects && data.projects.map((project) =>
                        (
                            <Col sm={12} md={6} lg={4}>
                                <Card key={`projects-${project}`} className='bg-secondary' style={{ margin: '0.5em', maxWidth: '400px' }}>
                                    <Link href={`/project/${project.url}${data.query}`}><a><img style={{ width: '100%' }} src={`img/projects/${project.img}`} /></a></Link>
                                    <Link href={`/project/${project.url}${data.query}`}><a><Card.Title>{project.title}</Card.Title></a></Link>
                                    <Link href={`${project.git}`} >
                                        <a target="_blank" rel="noreferrer">
                                            <p>View on Github <img style={{ margin: '2 em' }} width='20em' src='/git.svg' /></p>
                                        </a>
                                    </Link>
                                    {console.log('project:', project)}
                                </Card>

                            </Col>
                        ))}
                </Row>
            </Container >
        </section >
    )
}

export default ProjectSection
