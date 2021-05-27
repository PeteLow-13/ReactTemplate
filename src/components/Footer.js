import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>Copyright &copy; Name Here 2021</Col>
      </Row>

      <Row>
        <Col className='text-center py-3'>
          <p>
            Built by{' '}
            {/* <a href='https://' target='blank'>
              The Creative Studio
            </a>
            {' : '}
            <a href='https://github.com/' target='blank'>
              {'Bill Weir'}
            </a>
            {' & '} */}
            <a href='https://github.com/PeteLow-13' target='blank'>
              {'Pete Low'}
            </a>
            {' 2021'}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
