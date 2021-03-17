import React from 'react'
import styled from 'styled-components'
import GameItem from '../Games/Games'

const UlGames = styled.ul`
display: flex;
list-style-type: none; 
flex-wrap: wrap;
width: 100vw;
heigth: 100vh;
`;

const GamesList = ({ games }) => {

    return ( 
        <>
        <UlGames>
        {games.length > 0 && games.map(game => {
                return(
                <GameItem game={game} key={game.id}/>);
        })}
            </UlGames> 
        </>
     );
}
 
export default GamesList;