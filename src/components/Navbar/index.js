
import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/block" activeStyle>
                        Block view
                    </NavLink>
                    <NavLink to="/transaction" activeStyle>
                        Transaction view
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;