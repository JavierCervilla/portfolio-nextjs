import { Container, Card, Row, Col, Image } from "react-bootstrap"
import Link from 'next/link'

const Projects = ({ data }) => {
    return (
        <>
            <h3 style={{ padding: '.25em', width: 'auto', borderBottom: 'solid 1px #e9e5df' }}>{data.title}</h3>
            <Container style={{ textAlign: 'center' }} >
                <Row style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    {data.projects && data.projects.map((project, i) =>
                        (
                            <Col key={`projects-${project}-${i}`} sm={12} md={6} lg={4}>
                                <Card className='bg-primary-custom' style={{ margin: '0.5em', maxWidth: '400px' }}>
                                    <Link href={`/project/${project.url}${data.query}`}><a><Image fluid style={{ width: '100%', height: '100%' }} src={`img/projects/${project.img}`} /></a></Link>
                                    <Link href={`/project/${project.url}${data.query}`}><a>{project.title}</a></Link>
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
        </>
    )
}

export default Projects
