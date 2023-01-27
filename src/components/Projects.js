import {Container, Row,Col} from "react-bootstrap";

export const Projects= () =>{

    const projects =[
        {
            title:"test",
            description:"desogne",
            //imgUrl:projImg1,
        },
        {
            title:"test",
            description:"desogne",
            //imgUrl:projImg2,
        },
        {
            title:"test",
            description:"desogne",
           // imgUrl:projImg1,
        }
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}