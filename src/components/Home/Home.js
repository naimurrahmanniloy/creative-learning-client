import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} className='fs-4 fw-bold text-white' to="/">Creative Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-link">

                        <Link to='/'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >


    );
};

export default Home;