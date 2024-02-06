import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {

return (

<div> <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
<Link to={'/'} style={{textDecoration:'none', color:'white',fontSize:'30px'}}>
          <i className="fa-solid fa-play fa-bounce me-2"></i>
         MediaPlayer
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar></div>

)


}
export default Header
