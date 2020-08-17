import React,{ Component } from "react";
import styled from 'styled-components';
import Intro from './Intro';

class Home extends Component{

    render(){
        return(
            <Container> 
                <p>
                    hello world!
                </p>
                <Intro strings={[
                    'Welcome my site',
                    'My name is Salim Hartono'
                ]}
                />
            </Container>
            
        );
    }
}

const Container= styled.div`
    background-color: blue;
`;



export default Home;