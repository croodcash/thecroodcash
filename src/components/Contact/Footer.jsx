import React,{ Component } from "react";
import { connect } from 'react-redux';
import styled,{withTheme} from 'styled-components';
import { switchTheme } from '../../reducer';

class Footer extends Component{
    render(){
        return(
                <Container themeMode={this.props.themeMode}>
                    <hr/>  
                    {`Under Construction`} <br/>
                    {`tes • tos`}
                </Container>
        );
    }
}
const Container= styled.div`
    position: relative;
    font-family: ${props => props.theme.fonts.sans[2]};
    color: ${props => props.themeMode.textColor};
    text-align: center;
    width: 100%;
    padding-top:90vh;
`;
export default connect(
    state =>({themeMode: state}),{ switchTheme }
)(withTheme(Footer));