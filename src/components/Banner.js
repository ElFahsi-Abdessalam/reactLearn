import {Col, Container, Row} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import header from "../assets/img/header-img.svg";
import {useState,useEffect} from "react";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import {isVisible} from "bootstrap/js/src/util";
export const Banner = () =>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate =[" a system administrator" ," a programmer" ," lazy"];
    const [text,setText]=useState('');
    const period =1000;
    const [delta, setDelta] =useState(300-Math.random()*100);
    useEffect(() =>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length +1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta =>prevDelta/2)
        }
        if(!isDeleting&&updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Maciej , i'm`}<span className="wrap" >{text}</span></h1>
                        <p>Hi i'm Maciej. This is my portfolio. You see in this website some of my projects.</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                            </div>}
                            </TrackVisibility>
                        </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}