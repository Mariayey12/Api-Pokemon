import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../redux/actions/actionLogueo';

const NavBars = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><a className="navbar-brand" href="/"><img
                        src="https://res.cloudinary.com/academiageek1/image/upload/v1651364661/frontend9/wesr3j4pyee7p3k06mvs.png"
                        width="80" alt="" /></a></Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link> <Link to="/" >
                            Home
                        </Link></Nav.Link>
                        <Nav.Link><Link to="/add">
                            Agregar
                        </Link></Nav.Link>

                        <Nav.Link><Link to="/list">
                            Listar
                        </Link></Nav.Link>

                        <Nav.Link><Link to="/pokemon">
                            Pokemon
                        </Link></Nav.Link>
                        
                        <Nav.Link><Link to="/items">
                            Items
                        </Link></Nav.Link>

                        <Nav.Link><Link to="/search">
                            Search
                        </Link></Nav.Link>
                    
                    </Nav>
                        <Nav.Link><Link to="/form">
                            pokesBuscar
                        </Link> </Nav.Link> 

                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBars;