import React,{ Component } from "react";
import styled from 'styled-components';
import Menu from '../utils/Menu';
import { connect } from 'react-redux';
import { switchTheme } from '../../reducer';
import ModeButton from '../utils/ModeButton';
import logo from '../../asset/logosh.png';

class Navbar extends Component{
    render(){
        return(           
            <Container themeMode={this.props.themeMode}> 
                <input type="checkbox" id="toogle-menu"/>
                <Wrapper>
                    <Image src={logo} alt="logo"/>
                    <navbarModeButton/>
                </Wrapper>
                <hr/>
                <Menu isHome={false} themeMode={this.props.themeMode}/>
            
            </Container>
        );
    }
}
const Container= styled.div`
    background-color: ${props=>props.themeMode.bgColor};
    border-right:2px solid black;
    position: fixed;
    z-index: 10;
    transition: 1s;
    -webkit-transition: 1s;
    min-height: 100vh;
    min-width: 25%; 
    top:0;
    //visibility: hidden;
`;
const Wrapper= styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-item: center;
`;
const Image= styled.img`
    max-width: 25%;
    object-fit: scale-down;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        max-width: 50%;    
    }
`; 
const navbarModeButton = styled(ModeButton)`
    width: 2.5rem;
    height: 5rem;
`;


export default connect(
    state =>({themeMode: state}),{ switchTheme }
)(Navbar);