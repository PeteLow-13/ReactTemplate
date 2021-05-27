//Header with brand Nav
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          {/* <LinkContainer to='/'>
            <Navbar.Brand>Name Here</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/places'>
                <Nav.Link>
                  <i className='fas fa-compass'></i>Places
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/location'>
                <Nav.Link>
                  <i className='fas fa-compass'></i>Location
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/business'>
                <Nav.Link>
                  <i className='fas fa-cash-register'></i>Business
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/ferries'>
                <Nav.Link>
                  <i className='fas fa-ship'></i>Ferries
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/video'>
                <Nav.Link>
                  <i className='fas fa-photo-video'></i>Videos
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link>
                  <i className='fas fa-book-open'></i>About Us
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>
                  <i className='fas fa-address-card'></i>Contact
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home'></i>Home
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
