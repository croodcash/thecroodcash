import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { switchTheme } from '../../reducer';
import { FaGithubSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

class SocialMedia extends Component{
    render(){
        return(
            <Container isNavbar={this.props.isNavbar} themeMode={this.props.themeMode}>
                <a href="https://github.com/salim-hartono" ><FaGithubSquare/></a>
                <a href="https://www.linkedin.com/in/salimhartono"><FaLinkedin/></a>
                <a href="https://www.instagram.com/salimhartono_/"><FaInstagramSquare/></a>
                <a href="https://twitter.com/salimhartono_"><FaTwitterSquare/></a>
                <a href="https://www.facebook.com/salim.hartono98"><FaFacebookSquare/></a>
            </Container>
        );
    }
}

const Container= styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: bottom;
    width: 100%;
    font-size: ${props => props.isNavbar? "1.2":"2.5"}em;
    a {
        position: relative;
        margin: 0.5rem;
        cursor: pointer;
        color: ${props => props.themeMode.textColor};
        text-decoration: none;
        font-weight: bold;
        opacity: 0.8;
      }
      a:hover{
        color: #528AAE;
      }
`;
export default connect(state=>({themeMode:state}),{switchTheme})(SocialMedia);
