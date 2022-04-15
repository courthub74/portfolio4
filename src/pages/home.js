import {React} from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';


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
                    <img src='https://courdevelops.com/media/avatar/ProfilePic.JPG' width={300} className='img-fluid rounded-circle' alt='Me'></img>
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
                        <img src="images/customerfocused.png" height={125} width={120} alt="start"></img>
                        <h4>User Experience Focused</h4>
                    </div>
                </div>

                {/* PORTFOLIO */}
                <div className='portfolio'>
                    <h1 id='portfoliotitle'>Portfolio</h1>
                    <div className='jobs'>
                        <h2>Project #1</h2>
                        <p>This is the description of project #1.</p>
                    </div>
                </div>

                {/* TESTIMONIALS */}
  
        </Container>
     </>

    )
};

export default Home;