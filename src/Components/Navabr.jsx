import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navabr() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='navbarlink' href="/home">Home</Nav.Link>
            <Nav.Link id='navbarlink' href="/tutorial">Tutorial</Nav.Link>
            <Nav.Link id='navbarlink' href="/blog">Blog</Nav.Link>
            <Nav.Link id='navbarlink' href="/roadmap">Roadmaps</Nav.Link>

            <Nav.Link id='navbarlink' href="#pricing">ContactUs</Nav.Link>

            {/* <Navbar.Brand id='main-head' href="#home" style={{fontFamily:'Poppins'}}>Odyssey</Navbar.Brand>
      */}
      <svg
      id="main-head"
      width="333"
      height="44"
      viewBox="0 0 333 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.53 9.28L26.21 0.599997H43.57L56.59 13.62V44H17.53L0.17 26.64L13.19 13.62H26.21L13.19 26.64L21.87 35.32H45.74V15.79L39.23 9.28H17.53ZM69.6294 44V13.62H58.7794V44H69.6294ZM73.9694 35.32H82.6494L95.6694 22.3L82.6494 9.28H56.6094L48.1154 0.599997H86.9894L108.689 22.3L86.9894 44H73.9694V35.32ZM156.4 15.79L143.38 28.81H119.51L106.49 15.79V0.599997H117.34V13.62L123.85 20.13H139.04L145.55 13.62V0.599997H156.4V15.79ZM136.87 44H126.02V30.98H136.87V44ZM204.131 9.28L212.811 0.599997H167.241L158.561 9.28H204.131ZM167.241 35.32L158.561 44H193.281L201.961 35.32H167.241ZM158.561 13.62H171.581L175.921 17.96H188.941L201.961 30.98H188.941L184.601 26.64H171.581L158.561 13.62ZM243.183 9.28L251.863 0.599997H206.293L197.613 9.28H243.183ZM206.293 35.32L197.613 44H232.333L241.013 35.32H206.293ZM197.613 13.62H210.633L214.973 17.96H227.993L241.013 30.98H227.993L223.653 26.64H210.633L197.613 13.62ZM284.435 9.28L293.115 0.599997H232.665L241.035 9.28H284.435ZM243.205 13.62H254.055V15.79H275.755L267.075 24.47H254.055V35.32H273.585L282.265 44H243.205V13.62ZM332.168 15.79L319.148 28.81H295.278L282.258 15.79V0.599997H293.108V13.62L299.618 20.13H314.808L321.318 13.62V0.599997H332.168V15.79ZM312.638 44H301.788V30.98H312.638V44Z"
        fill="white"
      /></svg
    > 
              
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