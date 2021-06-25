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
import SearchList from "../Navigation/SearchList";

const Navigation = ({ query, queryFunction, newListing, listingHandler }) => {
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
                            <NavLink href="/listings/" defaultValue="listing" onClick={listingHandler}>Listings</NavLink>
                        </NavItem>

                        <NavItem className="nav-bar" defaultValue="newListing">
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
                        <NavItem className="nav-bar">
                            <SearchList
                                query={query}
                                queryFunction={queryFunction}
                            />
                        </NavItem>
                    </Nav>
                </Collapse>






            </Navbar >
        </div >


    );
}



export default Navigation;