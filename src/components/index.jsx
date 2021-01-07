import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Home from "./Home/Home";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact/Contact";
import styled,{withTheme} from 'styled-components';
import { switchTheme } from '../reducer/';

class App extends Component{
  render(){
    return(
      <RootContainer themeMode={this.props.themeMode}>
        <Navbar/>  
        <Home/>
        <About/>
        <Contact/>
      </RootContainer>
    );
  }
}

const RootContainer=styled.div`
  -webkit-transition: 1s;
  transition: 1s;
  background-color: ${props => props.themeMode.bgColor};
  color: ${props => props.themeMode.textColor};
  font-family: ${props => props.theme.fonts.sans[2]};
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
