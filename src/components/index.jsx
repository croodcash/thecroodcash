import React, { Component }  from 'react';
import Home from "./Home";
import Navbar from "./Navbar";
import logo from '../logo.svg';
import styled from 'styled-components';

class App extends Component{
  render(){
    return(
      <RootContainer bg={"black"}>
        <Navbar/>  
        <Home/>
      </RootContainer>
    );
  }
}

const RootContainer=styled.div`
  background-color: ${props => props.bg};
`;

export default App;
