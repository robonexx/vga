import React from 'react'
import styled from 'styled-components'
import Btn from '../Btn/Btn'

const StyledHeader = styled.header`
postition: absolute;
top: 0;
left: 0;
height: 10vh;
width: 100%;
text-transform: uppercase;
background: linear-gradient(40deg, #484848, #121212);
background-repeat: no-reapeat;
`;
const Logo = styled.h1`
font-size: 2rem;
letter-spacing: 2px;
padding: 1.4rem 2rem;
color: white;
text-shadow: 0px 3px 3px rgba(0,0,0,0.7);
z-index: 5;
`;

const Header = () => {

    return ( 
        <StyledHeader >
        <Logo>VGS - video game search</Logo>
    </StyledHeader>
     );
}
 
export default Header;