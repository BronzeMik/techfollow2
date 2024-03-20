import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
// import logo from '../../public/logo_techiefollow.png'

const NavBar = () => {
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" style={{zIndex: '999', borderBottom: '1px solid rgba(0, 0, 0, .4)'}}>
      <Container className='nav-container'>
        {/* <Navbar.Brand><img src={logo} style={{width: '50%'}} className='nav-logo'/></Navbar.Brand> */}
        <Navbar.Brand className='nav-logo'>TECHIEFOLLOW</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor: '#fff'}}>
          <Nav className="me-auto">
          {!auth && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/featuredblogs">
                Featured Blogs
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/latestblogs">
                Latest Blogs
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Link} to="/featuredblogs">
                Featured Blogs
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Link} to="/latestblogs">
                Latest Blogs
              </Nav.Link>
            )}
            
          </Nav>
          <Nav>
          {auth && (
              <Nav.Link as={Link} to="/createblog">
                Create Blog
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Link} to="/myblogs">
                My Blogs
              </Nav.Link>
            )}
            {auth && (
              <Nav.Link as={Button} onClick={handleLogout}>
                LogOut
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {!auth && (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
