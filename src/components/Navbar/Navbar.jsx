import React,{ Component } from "react";
import styled from 'styled-components';

class Navbar extends Component{

    render(){
        return(
            <Container> navbar
            </Container>
        );
    }
}
const Container= styled.div`
    background-color: green;
    position: absolute;
    min-height: 100vh;
    visibility: hidden;
`;
export default Navbar;