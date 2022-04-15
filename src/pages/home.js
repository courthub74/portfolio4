import {React} from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Badge, Accordion } from 'react-bootstrap';


function Home(){
    return(
        <>

        {/* NAVBAR */}
        <Container className='mama'>
            <Navbar bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#">CourDevelops</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#'>Home</Nav.Link>
                    <Nav.Link href='#'>Blog</Nav.Link>
                    <Nav.Link href='#'>Portfolio</Nav.Link>
                    <Nav.Link href='#'>Resume</Nav.Link>
                </Nav>
            </Container>
            </Navbar>

            
                {/* DESCRIPTION */}
                <div className='heady'>
                    <h1>Courdevelops </h1>
                    <h3>Full-Stack Web Developer</h3>
                                
                    <p>Code should be easy to read. Apps should be easy to use.</p>
                    
                </div>

                {/* PHOTO */}
                <div className='piccy'>
                    <img src='https://courdevelops.com/media/avatar/ProfilePic.JPG' width={300} height={200} className='img-fluid rounded-circle' alt='Me'></img>
                </div>


                {/* TECH SKILLS */}
                <div className='techs'>
                    <p id="techskills">Tech Skills:</p>
                    <Badge bg="primary">Primary</Badge> <Badge bg="dark">Secondary</Badge>{' '}
                    <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
                    <Badge bg="warning" text="dark">
                        Warning
                    </Badge>{' '}
                    <Badge bg="info">Info</Badge>{' '}
                    <Badge bg="light" text="dark">
                        Light
                    </Badge>{' '}
                </div>

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

                {/* PORTFOLIO */}
                <div className='portfolio'>
                    <h1 id='portfoliotitle'>Portfolio</h1> 
                    <br></br>
                    <div className='jobs'>
                        <Accordion>
                            <Accordion.Item id="accordy" eventKey="0">
                                <Accordion.Header><h3 id='accordyfont'>Project #1</h3></Accordion.Header>
                                <Accordion.Body>
                                <p>The Description of Project #1</p>
                                <a href="w3c.com">The Link to Project #1</a>
                                </Accordion.Body>
                            </Accordion.Item>
                            <br></br>
                            <Accordion.Item id="accordy" eventKey="1">
                                <Accordion.Header><h3 id='accordyfont'>Project #2</h3></Accordion.Header>
                                <Accordion.Body>
                                <p>The Description of Project #2</p>
                                <a href="w3c.com">The Link to Project #2</a>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <br></br><br></br>
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
  
        </Container>
     </>

    )
};

export default Home;