import {React} from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Badge, Row, Col, Form, Button } from 'react-bootstrap';


function Home(){
    return(
        <>

        {/* NAVBAR (COMPONENT) */}
        <Container className='mama'>
            <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand><span id="headname">CourDevelops</span></Navbar.Brand>
                <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/blog'>Blog</Nav.Link>
                    <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
            </Container>
            </Navbar>

            
                {/* DESCRIPTION */}
                <div className='heady'>
                    
                    <p>My name is Courtney Jacobs. I am a <b>Full-Stack Web Developer</b></p>
                    <p>I specialize in backend development, web-scraping, logins, UX/UI and RestAPI Development.</p>
                    <p>CourDevelops is the name of my software making company. I believe that code</p>
                    <p>should be easy to read and apps should be easy to use.</p>
                    
                    
                </div>

                {/* PHOTO */}
                <div className='piccy'>
                    <img src='https://courdevelops.com/media/avatar/ProfilePic.JPG' width={200} height={100} className='img-fluid rounded-circle' alt='Me'></img>
                </div>


                {/* TECH SKILLS */}
                <div className='techs'>
                    <p id="techskills">Tech Stack</p>
                    
                        <Badge id="smalltext" bg="primary">HTML</Badge> <Badge id="smalltext" bg="dark">CSS</Badge>{' '}
                        <Badge id="smalltext" bg="danger">Python</Badge> <Badge id="smalltext" bg="success">Django</Badge>{' '}
                        <Badge id="smalltext" bg="warning" text="dark">
                            JavaScript
                        </Badge>{' '}
                        <Badge id="smalltext" bg="info">Docker</Badge>{' '}
                        <Badge id="smalltext" bg="light" text="dark">
                            NodeJS
                        </Badge>{' '}
                    
                </div>
                <br></br>

                {/* SOFT SKILLS */}
                <div className='skills'>
                    <h1 id='softskillstitle'>Soft Skills</h1>
                    <div className='skill-item1'>
                        <img src="images/Start_Button-512.webp" height={130} width={125} alt="start"></img>
                        <h4>Self Starter</h4>
                    </div>
                    <div className='skill-item2'>
                        <img src="images/com.png" height={120} width={95} alt="start"></img>
                        <h4>Communicator</h4>
                    </div>
                    <div className='skill-item3'>
                        <img src="images/customerfocused.png" height={125} width={115} alt="start"></img>
                        <h4>User Experience Focused</h4>
                    </div>
                </div>

                <hr></hr>

                {/* PORTFOLIO */}
                <div className='portfolio'>
                    <h1 id='portfoliotitle'>Portfolio</h1> 
                    <br></br>
                    <div className='jobs'>
                        <h3 className='projecttitle'>Project #1</h3>
                            <p>The Description of Project #1</p>
                            <a target="blank" href="https://w3c.com">The Link to Project #1</a>
                            <br></br><br></br>
                            
                        <h3 className='projecttitle'>Project #2</h3>
                            <p>The Description of Project #2</p>
                            <a target="blank" href="https://w3c.com">The Link to Project #2</a>
                            <br></br><br></br>

                        <h3 className='projecttitle'>Project #3</h3>
                            <p>The Description of Project #3</p>
                            <a target="blank" href="https://w3c.com">The Link to Project #3</a>
                    </div>
                </div>

                <hr></hr>

                {/* CERTIFICATES */}
                <div className='certy'>
                <h3 id='certskills'>Certificates</h3>
                    <img id="certpic"src='images/cleverprotwo.png' width={500} height={300} alt='Me'></img>
                </div>

               <hr></hr>

                {/* TESTIMONIALS */}
                <div className='testimonials'>
                    <h1 id='testimonialstitle'>Testimonials</h1>
                    <div className='testimonial-item1'>
                        <img src="images/customerfocused.png" height={100} width={100} alt="start"></img>
                        <h4>Testimonial #1</h4>
                        <p>"This Programmer is Great. I will hire him again"</p>
                    </div>
                    <div className='testimonial-item2'>
                        <img src="images/customerfocused.png" height={100} width={100} alt="start"></img>
                        <h4>Testimonial #2</h4>
                        <p>"This Programmer is Great. I will hire him again"</p>
                    </div>
                    <div className='testimonial-item3'>
                        <img src="images/customerfocused.png" height={100} width={100} alt="start"></img>
                        <h4>Testimonial #3</h4>
                        <p>"This Programmer is Great. I will hire him again"</p>
                    </div>
                    
                </div>

                <hr></hr>

                {/* CONTACT */}
                <div className='contact'>
                    <h1 className='contacttitle'>Contact:</h1>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                            <Col>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Col>
                            <Col>
                                <Form.Control type="phone" placeholder="Enter phone" />
                            </Col>
                            <Col>
                            <Button variant="secondary" type="submit">
                                Submit
                            </Button>
                            </Col>
                        </Row>
                        </Form>
                </div>

                {/* FOOTER (COMPONENT) */}
                    <Navbar bg="secondary" variant="dark">
                    <Container>
                        
                        <Nav>
                            <Nav.Link href='#'>Facebook</Nav.Link>
                            <Nav.Link href='#'>Instagram</Nav.Link>
                            <Nav.Link href='#'>LinkedIn</Nav.Link>
                            <Nav.Link href='#'>GitHub</Nav.Link>
                        </Nav>
                        <Navbar.Brand><span id="headname">CourDevelops</span></Navbar.Brand>
                    </Container>
                    </Navbar>
  
        </Container>
     </>

    )
};

export default Home;