import React,{ Component } from "react";
import { connect } from 'react-redux';
import styled,{withTheme} from 'styled-components';
import { switchTheme } from '../../reducer';
import { Element, Link } from 'react-scroll';
import routes from '../../static/routes';
import Footer from './Footer';

class About extends Component{
    render(){
        return(
            <Element name={routes.ABOUT.to}> 
                <Container themeMode={this.props.themeMode}>
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
export default connect(
    state =>({themeMode: state}),{ switchTheme }
)(withTheme(About));