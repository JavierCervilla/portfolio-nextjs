import { Container, Row, Col } from 'react-bootstrap'

const FooterSection = ({ data }) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; JavierCervilla</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterSection

