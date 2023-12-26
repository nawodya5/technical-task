import React, { useState } from 'react';

import Nav from 'react-bootstrap/Nav';
import classes from './Navbar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import LogoIcon from '../../assets/Logo.png';
import MenuIcon from '../../assets/icons8-menu-50.png';

const Navbars: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" variant="dark" className={classes.nav}>
            <Navbar.Brand href="#home"><img alt='logo' className={classes.mainLogo} height={36} src={LogoIcon} /></Navbar.Brand>
            <Navbar.Toggle
                onClick={() => setExpanded(!expanded)}
                aria-controls="responsive-navbar-nav"
            >
                <img alt='menu' className={classes.menuIcon} src={MenuIcon} />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav >
                    <Nav.Link className={classes.navItem} href="#home">SERVICES</Nav.Link>
                    <Nav.Link className={classes.navItem} href="#about">ABOUT US</Nav.Link>
                    <Nav.Link className={classes.navItem} href="#contact">CONTACT US</Nav.Link>
                    <Nav.Link className={classes.navItem} href="#contact">CAREERS</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default Navbars;