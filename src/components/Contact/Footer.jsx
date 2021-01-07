import React,{ Component } from "react";
import { connect } from 'react-redux';
import styled,{withTheme} from 'styled-components';
import { switchTheme } from '../../reducer';

class Footer extends Component{
    render(){
        return(
                <Container themeMode={this.props.themeMode}>
                    <hr/>  
                    {`• Made with ❤️ by `}
                    <a href='https://github.com/croodcash/thecroodcash'>Salim Hartono</a>
                    {` @ 2021 | © ALL RIGHTS RESERVED •`}
                </Container>
        );
    }
}
const Container= styled.div`
    position: absolute;
    color: ${props => props.themeMode.textColor};
    text-align: center;
    font-size: 0.7em;
    width: 100%;
    bottom:2%;
    a{
        cursor: pointer;
        color: #528AAE;
        text-decoration: none;
        font-weight: bold;
    }
`;
export default connect(
    state =>({themeMode: state}),{ switchTheme }
)(withTheme(Footer));