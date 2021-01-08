import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { switchTheme } from '../../reducer';
import { ReactComponent as MoonIcon } from '../../asset/moon.svg';
import { ReactComponent as SunIcon } from '../../asset/sun.svg';

class ModeButton extends Component{
    render(){
        return(
            <Mode 
                isNavbar={this.props.isNavbar}
                themeMode={this.props.themeMode}
                onClick={this.props.switchTheme}>
                <SunIcon/>
                <MoonIcon/>
            </Mode>
        );
    }
}


const Mode= styled.button`
    position :relative;
    cursor: pointer;
    border: 2px solid #38c172;
    border-radius: 25px;
    margin: auto 0;
    width: ${props=>!props.isNavbar ? '2.5rem' : '3rem'}; 
    height: ${props=>!props.isNavbar ? '5rem' : '1.5rem'};
    overflow:hidden;
    background: ${props=>props.themeMode.bgColor};
    svg {
        width: ${props=>!props.isNavbar ? '100%' : 'auto'}; 
        height: ${props=>!props.isNavbar ? 'auto' : '50%'};
        transition: all 0.3s linear;
        &:first-child {
            transform: 
                ${props=>!props.isNavbar && props.themeMode.isLightMode ? 'translateY(0)' : 
                    !props.isNavbar && !props.themeMode.isLightMode ? 'translateY(100px)' :
                    props.isNavbar && props.themeMode.isLightMode ? 'translateX(0)' :
                    'translateX(100px)'};
        }
        &:nth-child(2) {
            transform: ${props=>!props.isNavbar && props.themeMode.isLightMode ? 'translateY(-100px)' : 
                            !props.isNavbar && !props.themeMode.isLightMode ? 'translateY(0)' :
                            props.isNavbar && props.themeMode.isLightMode ? 'translateX(-100px)' :
                            'translateX(0)'};
        }
    }
`;

export default connect(state=>({themeMode:state}),{switchTheme})(ModeButton);
