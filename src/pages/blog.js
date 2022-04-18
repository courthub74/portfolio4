import {React} from 'react';
import '../App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';


function Blog() {
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
                <h3 id="resume">Blog</h3>
                    <div id="blogs">
                        <h2>Blog #1</h2>
                        <p>This is blog #1.  It's about code.</p>
                        <hr></hr>
                        <h2>Blog #2</h2>
                        <p>This is blog #2.  It's about code.</p>
                        <hr></hr>
                        <h2>Blog #3</h2>
                        <p>This is blog #3.  It's about code.</p>
                    </div>
            </div>
            </Container>
        </>
    )
}

export default Blog;