import {React} from 'react';
import '../App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

function Resume() {
    return(
        <>
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
            <br></br>
            <div className='resume'>
                <h3 id="resume">Resume</h3>
                <div id="resumephoto">
                    <img src='images/resume.png' width={700} height={800} alt='resume'></img>
                </div> 
            </div>
            </Container>
        </>
    )
}

export default Resume;