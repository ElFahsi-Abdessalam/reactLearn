import {Container, Nav, NavDropdown} from "react-bootstrap";
import {useEffect, useState} from "react";

export const Navbar = ()=>{
    const [activeLink ,setActiveLink] = useState('home');
    const [scrolled,seScrolled] =useState(false);
    useEffect(() => {
        const onScroll = () => {
                if (window.scrollY > 50) {
                    seScrolled(true);
                } else {
                    seScrolled(false);
                }
            }
            window.addEventListener("scroll",onScroll);
    return () =>window.removeEventListener("scroll",onScroll);},[])
    return(
        <Navbar expand="lg" className ={scrolled ? "scrolled": ""} >
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt={"Logo"}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home'?'active navbar-link': 'nav-link'}>Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#project">Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src="" alt=""/></a>
                         <a href="#"><img src="" alt=""/></a>
                         <a href="#"><img src="" alt=""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Le's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}