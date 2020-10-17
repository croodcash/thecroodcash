import React,{ Component } from "react";
import styled from 'styled-components';
import Menu from '../utils/Menu';
import { connect } from 'react-redux';
import { showNavbar } from '../../reducer';
import ModeButton from '../utils/ModeButton';
import logo from '../../asset/logosh.png';

const NAME = "Salim Hartono";
const TITLE = "Software Engineer - Backend ";
const COMPANY = "tiket.com"

class Navbar extends Component{

    render(){
        return(           
            <Container themeMode={this.props.themeMode}> 
                <Burger  src={logo} onClick={this.props.showNavbar}/>
                <Wrapper>
                    <Image src={logo} alt="logo"/>
                    <ModeButton isHome={false}/>
                    <Name>{NAME}</Name>
                    <Title>
                        {TITLE}
                        <div><a href="https://www.tiket.com">{COMPANY}</a></div>
                    </Title>
                </Wrapper>

                <Menu isHome={false} themeMode={this.props.themeMode}/>
            
            </Container>
        );
    }
}

const Container= styled.div`
    position: fixed;
    border-right: 2px solid #38c172;
    z-index: 10;
    transition: 0.3s;
    left:${props => !props.themeMode.showNavbar ? -25.5 : 0}%;
    min-height: 100vh;
    width:25%;
    top:0;
`;

const Name=styled.h3`
`;

const Title=styled.h4`
    text-align:center;
`;

const Burger=styled.img`
    position: relative;
    left:100%;
    cursor: pointer;
    background-image: url("../../asset/logosh.png");
    width:15%;
    height:8vh;
`;

const Wrapper= styled.div`
    position: relative;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image= styled.img`
    max-width: 25%;
    object-fit: scale-down;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        max-width: 50%;    
    }
`; 



export default connect(
    state =>({themeMode: state}),{ showNavbar }
)(Navbar);