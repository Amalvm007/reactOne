import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    
         <Navbar bg='' variant='dark'>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtf1m_QqyOvzRD_NmROOGvCZ6VLF1_tHeqfrnjReTe28neZGGesX6EPmTAEY28wXFpdm8&usqp=CAU"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Hotel
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  )
}

export default Header