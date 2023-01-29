import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img1.png"
import projImg3 from "../assets/img/project-img3.png"
export const Projects= () =>{

    const projects =[
        {
            title:"Abalone",
            description:"Project cpp",
            imgUrl:projImg1,
        },
        {
            title:"Abalone",
            description:"Project cpp",
            imgUrl:projImg1,
        },
        {
            title:"Abalone",
            description:"Project cpp",
            imgUrl:projImg2,
        },

    ];

    const java =[
        {
            title:"Abalone",
            description:"Project cpp",
            imgUrl:projImg1,
        },
        {
            title:"Abalone",
            description:"Project cpp",
            imgUrl:projImg1,
        },


    ]


    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Cpp project</h2>
                        <p>Lorem ipsum is simply dummy text</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first" >
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Cpp</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seconde">Java</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Network</Nav.Link>
                                </Nav.Item>

                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey ="first">
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return(
                                                    <ProjectCard key={1}
                                                                 {...project}  />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey ="seconde">
                                    <Row>
                                        {
                                            java.map((java,index) => {
                                                return(
                                                    <ProjectCard key={index}
                                                                 {...java}  />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey ="third">Java</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}
