import React, {Component} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { switchTheme } from '../reducer/';
import { ReactComponent as MoonIcon } from '../asset/moon.svg';
import { ReactComponent as SunIcon } from '../asset/sun.svg';

class ModeButton extends Component{
    render(){
        return(
            <Mode 
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
    border: 2px solid;
    border-radius: 30px;
    margin: auto 0;
    width: 2.5rem;
    height: 5rem;
    overflow:hidden;
    background: ${props=>props.themeMode.bgColor};
    svg {
        width: 1.5rem;
        height: auto;
        transition: all 0.3s linear;
        &:first-child {
            transform: ${props=>!props.themeMode.isLightMode ? 'translateY(0)' : 'translateY(100px)'};
        }
        &:nth-child(2) {
            transform: ${props=>!props.themeMode.isLightMode ? 'translateY(-100px)' : 'translateY(0)'};
        }
    }
`;

export default connect(state=>({themeMode:state}),{switchTheme})(ModeButton);
