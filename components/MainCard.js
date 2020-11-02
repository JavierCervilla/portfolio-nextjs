import Link from 'next/link'
import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const MainCard = ({ data }) => {
    return (
        <Container>
            <Row>
                <Col style={{ display: 'flex', justifyContent: 'center' }} sm={12}>
                    <Link href={data.linkedin} ><a target='_blank' rel='noreferrer'><Image className='img-me' roundedCircle src={`/img/${data.img}`} alt='Javier Cervilla'></Image></a></Link>
                </Col>
                <Col sm={12}>
                    <h2 className='resalt'>{data.title}</h2>
                    <h4>{data.subtitle}</h4>
                    <p>{data.p}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MainCard
