import React, { useState } from 'react';
import { Hamburger, Logo, Nav } from './NavbarStyle';

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);

    return (
        <Nav>
            <Logo to="/">
                <i>{ '<CLRSWY/>' }</i> <span>recipe</span>
            </Logo>
        </Nav>
    )
}
