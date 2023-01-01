import {Col, Container, Row} from "react-bootstrap"
export const Banner = () =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm system administrator`}<span className="wrap" >system administrator</span></h1>
                        <p>Hi i'm macie</p>
                        <button onClick={() => console.log('connect')}>Le's connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}