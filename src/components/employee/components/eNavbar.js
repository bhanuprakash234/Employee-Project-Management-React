import { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Toast } from "react-bootstrap";
import { useNavigate } from "react-router";

function EmployeeNavbar() {
  const [show, setShow] = useState('');
  const navigate = useNavigate();

  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => navigate('/employee/dashboard?page=home')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/employee/dashboard?page=your_work')}>Your Work</Nav.Link>
            
          </Nav>
          <Nav className="d-flex align-items-center">
            <Navbar.Text className="me-3">
              Signed in as: <span style={{ color: "white" }}>{localStorage.getItem('username')}</span>
            </Navbar.Text>
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            {/* <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            /> */}
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      
      
        <Button onClick={() => setShow(true)} className="btn-sm">Notifications</Button>
        &nbsp;&nbsp;&nbsp;
            <div className="search-bar">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search-input"
                  aria-label="Search"
                />
                
              </Form>
            </div>
            <Button
              variant="outline-light"
              onClick={() => {
                localStorage.clear();
                navigate('/auth/login?msg=you have logged out..');
              }}
              className="btn-logout"
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Notification Toast */}
    
  </div>
  );
}

export default EmployeeNavbar;