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
                    <h3>Full-Stack Software Company</h3>
                                
                    <p>Code should be easy to read.</p>
                    <p>Apps should be easy to use.</p>
                </div>

                {/* PHOTO */}
                <div className='piccy'>
                    <img src='https://courdevelops.com/media/avatar/ProfilePic.JPG' className='img-fluid rounded-circle' alt='Me'></img>
                </div>


                {/* TECH SKILLS */}
        
                <div className='techs'>
                    <p id="techskills">Tech Skills:</p>
                    <Badge bg="primary">Primary</Badge> <Badge bg="secondary">Secondary</Badge>{' '}
                    <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
                    <Badge bg="warning" text="dark">
                        Warning
                    </Badge>{' '}
                    <Badge bg="info">Info</Badge>{' '}
                    <Badge bg="light" text="dark">
                        Light
                    </Badge>{' '}
                </div>
  
        </Container>
     </>

    )
};

export default Home;