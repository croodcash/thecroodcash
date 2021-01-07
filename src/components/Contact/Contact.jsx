import React,{ Component } from "react";
import { connect } from 'react-redux';
import styled,{withTheme} from 'styled-components';
import { switchTheme } from '../../reducer';
import { Element, Link } from 'react-scroll';
import routes from '../../static/routes';
import Footer from "./Footer";

class Contact extends Component{
    render(){
        return(
            <Element name={routes.CONTACT.to}> 
                <Container themeMode={this.props.themeMode}>
                    < Title>
                        Contact
                    </Title>
                    <ContainerFill>
                        <ContainerLeft>
                        
                        </ContainerLeft>
                        <ContainerRight>
                            
                        </ContainerRight>
                    </ContainerFill>
                    <Footer/>
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
    align-item: center;
    width: 100%;
`;


const Title= styled.h1`
    position: relative;
    height: 8vh;
    width: 100%;  
    text-align:center;
    justify-content: center;
    border-bottom: 2px solid rgba(56,193,144,0.5);
    margin-block-end:0;
`;

const ContainerFill= styled.div`
    position: relative;
    height: 90vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;  
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        flex-direction: column;   
    }
`;

const ContainerLeft= styled.div`
    position: relative;
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 100%;
        height: 35%;   
    }
`;

const ContainerRight= styled.div`
    position: relative;
    height: 50%;
    display: flex;
    flex-direction: column;
    width: 60%;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 90%;
        height: 65%;     
    }
`;

export default connect(
    state =>({themeMode: state}),{ switchTheme }
)(withTheme(Contact));