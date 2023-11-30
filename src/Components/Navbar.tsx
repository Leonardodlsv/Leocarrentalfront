import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';


export default function NavBar() {
    return (
        <>
        <Navbar variant='light' expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand as={Link} to="/">Leo Rent Car</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/vehicles">Vehicles</Nav.Link>
                    <Nav.Link as={Link} to="/support">Support</Nav.Link>
                    <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
                    <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
            
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        </>
    );
}

