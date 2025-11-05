import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Menu = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">TO DO LIST con React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
    </div>
  );
}

export default Menu;