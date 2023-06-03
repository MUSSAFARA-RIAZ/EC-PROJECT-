import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'

function Navabr() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='navbarlink' href="/">Home</Nav.Link>
            <Nav.Link id='navbarlink' href="#pricing">Tutorial</Nav.Link>
            <Nav.Link id='navbarlink' href="/blog">Blog</Nav.Link>
            <Nav.Link id='navbarlink' href="#pricing">ContactUs</Nav.Link>

            <Navbar.Brand id='main-head' href="#home" style={{fontFamily:'Poppins'}}>Odyssey</Navbar.Brand>
     
              
          </Nav>
          <Nav>
           
            
            <a href="https://imgbb.com/">
      <img src="https://i.ibb.co/JQrTN63/logo.png" 
      alt="logo" border="0"/></a>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navabr;