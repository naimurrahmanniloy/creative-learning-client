import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Home.css'
import logo from '../../img/1.png'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


const Home = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <img className='logo' src={logo}></img>
                <Navbar.Brand as={Link} className='fs-4 fw-bold' to="/">Creative Learning</Navbar.Brand>
                <Navbar.Toggle className='text-white' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='text-white' id="basic-navbar-nav">
                    <Nav className="ms-auto nav-link">

                        <Link to='/' disabled>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/faq'>FAQ</Link>
                        <div className='mt-2 mx-4'>
                            <Link>
                                {
                                    user?.uid ?

                                        <>
                                            {user.displayName}
                                            <Button onClick={handleLogOut} className='ms-3 mx-2' variant="outline-secondary">LogOut</Button>
                                        </>
                                        :

                                        <>
                                            <span><small><Link to='/'>Login</Link ></small></span>
                                        </>

                                }
                            </Link>
                            {
                                user?.photoURL ?
                                    <Image style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image>
                                    : <FaUser></FaUser>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >


    );
};

export default Home;