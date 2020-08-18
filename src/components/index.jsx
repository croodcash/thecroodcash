import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import styled,{withTheme} from 'styled-components';
import { switchTheme } from '../reducer/';

class App extends Component{
  render(){
    const { bgColor } = this.props.themeMode;
    return(
      <RootContainer bg={bgColor}>
        <Navbar/>  
        <Home/>
      </RootContainer>
    );
  }
}

const RootContainer=styled.div`
  -webkit-transition: 1s;
  transition: 1s;
  background-color: ${props => props.bg};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;
  align-item: center;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
`;

export default connect(
  state =>({ themeMode: state }),
  { switchTheme }
)(withTheme(App));
