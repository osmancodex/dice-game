import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'


const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };


  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  )
}

export default App


const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
  `;