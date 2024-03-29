import React,{ Component } from "react";
import styled from 'styled-components';
import Menu from '../utils/Menu';
import { connect } from 'react-redux';
import { showNavbar } from '../../reducer';
import ModeButton from '../utils/ModeButton';
import SocialMedia from '../utils/SocialMedia';
import logo from '../../asset/logosh.png';
import { NAME, TITLE, COMPANY,COMPANY_SITE } from '../../static/data';

class Navbar extends Component{

    render(){
        return(           
            <Container themeMode={this.props.themeMode}> 
                <Burger onClick={this.props.showNavbar} themeMode={this.props.themeMode}>
                    <BurgerInner1 themeMode={this.props.themeMode}/>
                    <BurgerInner2 themeMode={this.props.themeMode}/>
                    <BurgerInner3 themeMode={this.props.themeMode}/>
                </Burger>
                <Wrapper>
                    <Image src={logo} alt="logo"/>
                    <ModeButton isNavbar={true}/>
                    <Name>{NAME}</Name>
                    <Title>
                        {TITLE}
                        <div><a href={COMPANY_SITE}>{COMPANY}</a></div>
                    </Title>
                </Wrapper>
                <Menu isNavbar={true} themeMode={this.props.themeMode}/>
                <Text>Connect with me</Text>
                <SocialMedia isNavbar={true} themeMode={this.props.themeMode}/>
            </Container>
        );
    }
}

const Container= styled.div`
    position: fixed;
    border-right: 2px solid #38c172;
    z-index: 10;
    transition: 0.3s;
    background-color: ${props => props.themeMode.bgColor};
    left:${props => !props.themeMode.showNavbar ? -25.5 : 0}%;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width:80%;
        left:${props => !props.themeMode.showNavbar ? -80.5 : 0}%;
    }
    min-height: 100vh;
    width:25%;
    top:0;
`;

const Burger=styled.div`
    position: relative;
    left: 100%;
    cursor: pointer;
    height: 5vh;
    width: 40px;
    padding-top: 2px;
    border-left : 2px solid ${props => props.themeMode.bgColor};
    transition: 1s;
`;

const BurgerInner1=styled.div`
        position: relative;
        width: 40px;
        height: 4px;
        margin:4px 0px;
        border-radius: 4px;
        background-color: #38c172;
        transform:${props => !props.themeMode.showNavbar ? 0: "rotate(45deg) translate(8px, 12px)" };
`;
const BurgerInner2=styled.div`
        position: relative;
        width: 40px;
        height: 4px;
        margin-bottom:4px;
        border-radius: 4px;
        background-color: #38c172;
        display:${props => !props.themeMode.showNavbar ? "block" : "none"};
`;
const BurgerInner3=styled.div`
        position: relative;
        width: 40px;
        height: 4px;
        margin-bottom:4px;
        border-radius: 4px;
        background-color: #38c172;
        transform:${props => !props.themeMode.showNavbar ? 0:"rotate(-45deg) translate(-8px, 0px)" };
`;
const Name=styled.h3``;
const Title=styled.h4`
    text-align:center;
    a{
        cursor: pointer;
        color: #528AAE;
        text-decoration: none;
        font-weight: bold;
    }
`;

const Wrapper= styled.div`
    position: relative;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid rgba(56,193,144,0.5);
`;

const Image= styled.img`
    max-width: 25%;
    object-fit: scale-down;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        max-width: 50%;    
    }
`; 
const Text= styled.div`
    text-align: center;
    margin-top: 50%;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        margin-top: 35%;
    }
`; 


export default connect(
    state =>({themeMode: state}),{ showNavbar }
)(Navbar);