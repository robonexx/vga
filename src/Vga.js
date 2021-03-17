import React, { useState, useEffect } from 'react';
import './Vga.css';
import Header from './components/Header/Header'
import { API_URL, SEARCH_URL } from './data.js'
import GamesList from './components/GamesList/GamesList'
import styled from 'styled-components'

const MainPage = styled.div`
height: 100vh;
widht: 100vw;
display: flex;
flex-flow: wrap;
`

const Input = styled.input`
display: flex;
flex-direction: row;
justify-content: flex-end;
padding: 4px 6px;
font-size: 1rem;
border: 0;
border-radius: 5px;
width: 50%;
height: 2rem;
margin-right: 10%;
outline: none;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.295);
`;

const Search = styled.div`
position: absolute;
top: 1.5rem;
right: 0;
display: flex;
align-items: center;
width: 35%;
height: 2rem;

&>button {
  display: block;
  background: white;
  padding: 4px 6px;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  width: fit-content;
  height: 2rem;
  margin-right: 2%;
  outline: none;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.295);
}
  
  
  &>button:hover,
  &>button:focus {
    transform: scale(0.92);
  }
`;


function Vga() {

  const [games, setGames] = useState([]);
  /* const [currentPage, setCurrentPage] = useState(null) */
  const [searchGames, setSearchGames] = useState('');

  useEffect(() => {
  
  fetch(API_URL)
  .then(res => res.json())
  .then(data => {setGames(data.results);
    console.log(data.results)
  })
  .catch((e) => {
    console.log(e)
  });    
    
  }, []) 

  const handleSearch = () => {
  
  fetch(API_URL + SEARCH_URL + `${searchGames}`)
  .then(res => res.json())
  .then(data => {setGames(data.results);
     
  })
  .catch((e) => {
    console.log(e)
  });
  
};



  return (
    <MainPage className="Vga">
      <Header />
      
      <Search>
      <Input className="search" 
            type="text" 
            placeholder="Search games... "
            onChange={(e) => setSearchGames(e.target.value)}
            value={searchGames}
            key={games.id}
            />
            <button onClick={handleSearch}>Search</button>
            </Search>
            

      <GamesList games={games} />
      
    </MainPage>
  );
}

export default Vga;
