import {Container, Row, Col, Nav, Tab} from "react-bootstrap";

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
                        <p>Lorem ipsum is simply dummy text</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey="fisrt" >
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seconde">Tab two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab three</Nav.Link>
                            </Nav.Item>

                        </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey ="first">
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return(
                                                    <p>{project.title}</p>
                                        )
                                        })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey ="seconde">Loremp</Tab.Pane>
                                <Tab.Pane eventKey ="third">lorem</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}