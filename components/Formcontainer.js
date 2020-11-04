import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={12} lg={8}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer