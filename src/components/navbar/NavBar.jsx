import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className='navbar navbar-dark bg-info'>
                <NavbarBrand href="/" className='text-dark shadow-sm'>Teachers</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link className='cursor-pointer text-light' to={"/add"}>Add Teacher</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <Input type='search' placeholder='Search for teacher'/>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;