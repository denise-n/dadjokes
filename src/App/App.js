import React from 'react';
import JokeList from '../JokeList/JokeList'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    135deg,
     rgba(179, 229, 252, 1) 0%,
     rgba(179, 229, 252, 1) 50%,
     rgba(240, 98, 146, 1) 50%,
     rgba(240, 98, 146, 1) 100%)
     ;
  font-family: 'Rubik', sans-serif;
  color: #78909c;
`

function App() {
  return (
    <Wrapper className="App">
      <JokeList />
    </Wrapper>
  );
}

export default App;
