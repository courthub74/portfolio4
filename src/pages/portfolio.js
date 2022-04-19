import {React} from 'react';
import '../App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

function Portfolio() {
    return(
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
            
            <div className='resume'>
                <h3 id="porty">Portfolio</h3>
                    <div id="ports">
                        <h3 className='projecttitle'>Project #1</h3>
                            <p>The Description of Project #1</p>
                            <p>Tech involved: one | two | three | four</p>
                            <a target="blank" href="https://w3c.com">The Link to Project #1</a>
                            <br></br><hr></hr>
                            
                        <h3 className='projecttitle'>Project #2</h3>
                            <p>The Description of Project #2</p>
                            <p>Tech involved: one | two | three | four</p>
                            <a target="blank" href="https://w3c.com">The Link to Project #2</a>
                            <br></br><hr></hr>

                        <h3 className='projecttitle'>Project #3</h3>
                            <p>The Description of Project #3</p>
                            <p>Tech involved: one | two | three | four</p>
                            <a target="blank" href="https://w3c.com">The Link to Project #3</a>
                    </div>
            </div>

        </Container>
          
           
    )
}

export default Portfolio;