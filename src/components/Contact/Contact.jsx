import React,{ Component } from "react";
import { connect } from 'react-redux';
import styled,{withTheme} from 'styled-components';
import { sendMessage } from '../../reducer';
import { Element } from 'react-scroll';
import routes from '../../static/routes';
import Footer from "./Footer";
import SocialMedia from '../utils/SocialMedia';

class Contact extends Component{
    state = {
        name: '',
        email: '',
        message: ''
      }
    
    updateInputValue = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value
        });
    }
    handleSend=()=>{
        const {
            name,
            email,
            message
        } = this.state;
        
        this.props.sendMessage({
            name,
            email,
            message
        });
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render(){
        return(
            <Element name={routes.CONTACT.to}> 
                <Container themeMode={this.props.themeMode}>
                    <Title>
                        Contact
                    </Title>
                    <ContainerFill>
                        <ContainerLeft>
                            <Header>Let's Discuss Something!  </Header>
                            <SubHeader>Kindly, drop me a message <span role="img" aria-label="smile">😊</span></SubHeader>
                            <Form>
                                {this.props.themeMode.errorMessage.length>0 &&
                                <Message errorMessage={this.props.themeMode.errorMessage}>{this.props.themeMode.errorMessage}</Message>}
                                <Input placeholder="Name" name="name" value={this.state.name} onChange={this.updateInputValue}/>
                                <Input placeholder="Email" name="email" value={this.state.email} onChange={this.updateInputValue}/>
                                <TextArea placeholder="Message" name="message" value={this.state.message} onChange={this.updateInputValue}/>
                                <DivWrap><Submit onClick={e => {e.preventDefault(); this.handleSend()}}>Send Message</Submit></DivWrap>
                            </Form>
                        </ContainerLeft>
                        <ContainerRight>
                            <Text>
                                OR
                                <br/>
                                Stay In Touch With Me
                            </Text>
                            <SocialMedia/>
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
    width: 100%;  
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        flex-direction: column;   
    }
    
`;

const ContainerLeft= styled.div`
    position: relative;
    height: 90%;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 2%;
    justify-content:center;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 100%;
        height: 65%;   
    }
`;
const Header= styled.h2`
    height: 7%;
    margin:1em 0 0 0;
`;
const SubHeader= styled.div`
    height: 3%;
`;
const Text= styled.div`
    text-align: center;
`;

const ContainerRight= styled.div`
    position: relative;
    height: 90%;
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content:center;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 100%;
        height: 35%;     
    }
`;

const Form= styled.form`
    width: 100%;
    height: 60%;
    padding: 5% 5% 0 0;
    display : flex;
    flex-direction: column;
    border-right: 2px solid rgba(56,193,144,0.5);
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        height: 100%;
        border-right: none;
    }
`;
const Message= styled.div`
    width: 90%;
    height: 8%;
    border: 2px solid ${props => props.errorMessage.includes('Success')? 'rgba(56,193,144,1)': 'indianred'};
    color:${props => props.errorMessage.includes('Success')? 'rgba(56,193,144,1)': 'indianred'};
    text-align:center;
    margin : 1.5%;
`;
const Input= styled.input`
    width:90%;
    height: 10%;
    margin : 1% 1%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 0.5em 0 rgba(255, 255, 255, 0.5);
`;
const TextArea= styled.textarea`
    width:90%;
    height: 20%;
    margin : 1% 1%;
    box-shadow: 0 0 0.5em 0 rgba(255, 255, 255, 0.5);
`;
const DivWrap= styled.div`
    width: 90%;
    display: flex;
    height: 10%;
    margin :1%;
    justify-content: center;
`;
const Submit= styled.button`
    background-color: rgba(56,193,144,1);
    height : 100%; 
    padding: 1% 5%;
    cursor : pointer;
    border :none;
    color: #f1f1e8;
    box-shadow: 0 0 0.5em 0 rgba(255, 255, 255, 0.5);
`;

export default connect(
    state =>({themeMode: state}),{ sendMessage }
)(withTheme(Contact));