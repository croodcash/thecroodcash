import React,{ Component } from "react";
import { connect } from 'react-redux';
import styled,{withTheme} from 'styled-components';
import Intro from './Intro';
import ModeButton from '../ModeButton';
import logo from '../../asset/logosh.png';
import { switchTheme } from '../../reducer';
import { Element, Link } from 'react-scroll';
import routes from '../../static/routes';

const NIHAO = "你好!";
const INTRO = [
    'Welcome my site',
    'My name is Salim Hartono'
];

const HOME = "/";

class Home extends Component{
    render(){
        console.log(this.props);
        return(
            <Element name={HOME}> 
                <Container themeMode={this.props.themeMode}>
                    <Wrapper>
                        <Image src={logo} alt="logo"/>
                        <ModeButton/>
                    </Wrapper>
                    <Greetings>{NIHAO}</Greetings>
                    <Intro strings={INTRO}/>
                    <MenuContainer>
                        {Object.values(routes).map(route => (
                            <Link
                                key={route.to}
                                to={route.to}
                                spy
                                smooth
                                duration={500}
                                href={route.to}
                            >
                            {route.text}
                            </Link>
                        ))}
                    </MenuContainer>
                </Container>
            </Element>
        );
    }
}
const Container= styled.div`
    position: relative;
    font-family: ${props => props.theme.fonts.sans[2]};
    color: ${props => props.themeMode.textColor};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    width: 100%;
    a {
        position: relative;
        margin: 0.5rem;
        cursor: pointer;
        color: ${props => props.themeMode.textColor};
        text-decoration: none;
        font-weight: bold;
    }
    .active {
        color: #38c172;
    }
    a:before {
        content:"";
        border-style: dotted;
        border-color: #38c172;
        position: absolute;
        width: 110%;
        height: 100%;
        left:-10%;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
      }
    a:hover:before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`;
const Wrapper= styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-item: center;
`;
const Image= styled.img`
    max-width: 15%;
    object-fit: scale-down;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        max-width: 50%;    
    }
`;  
const Greetings = styled.div`
  text-align : center;
  color: #38c172;
  font-weigth: bold;
  font-size: ${props => props.theme.textSizes['4xl']};
  margin-top: ${props => props.theme.margin['2']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['2xl']};
  }
`;

const MenuContainer= styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-item: center;
    width: 100%;
`;

export default connect(
    state =>({themeMode: state}),{ switchTheme }
)(withTheme(Home));