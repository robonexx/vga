import React from 'react'
import styled from 'styled-components'
import headImg from '../../img/search.jpg';
import Btn from '../Btn/Btn'

const HeaderImg = styled.img.attrs({ src: `${headImg}`})`
width: 100%;
max-height: 10vh;
position: absolute;
object-fit: cover;
z-index: -1;
`; 


const StyledHeader = styled.header`
postition: absolute;
top: 0;
left: 0;
height: 10vh;
width: 100%;
text-transform: uppercase;
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
            <HeaderImg />
        <Logo>Video games search</Logo>
    </StyledHeader>
     );
}
 
export default Header;