import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import './Nav.css'


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>



            <Navbar color="danger" light expand="md" NavbarText="center">
        
                <NavbarBrand href="/home">QA Cinema</NavbarBrand>


                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>



                        <NavItem className="nav-bar">
                            <NavLink href="/listings/" >Listings</NavLink>
                        </NavItem>
                        <NavItem className="nav-bar">
                            <NavLink href="/newListings/">New Listings</NavLink>
                        </NavItem>
                        <NavItem className="nav-bar">
                            <NavLink href="/openingTimes/">Opening Times</NavLink>
                        </NavItem>
                        <NavItem className="nav-bar">
                            <NavLink href="/classifications/">Classifications</NavLink>
                        </NavItem>
                        <NavItem className="nav-bar">
                            <NavLink href="/screens/">Screens</NavLink>
                        </NavItem>
                        <NavItem className="nav-bar">
                            <NavLink href="/discussionBoard/">Discussion Board</NavLink>
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>
        </div>


    );
}



export default Navigation;