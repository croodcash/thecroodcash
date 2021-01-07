import React,{ Component } from "react";
import { connect } from 'react-redux';
import styled,{withTheme} from 'styled-components';
import { showContent } from '../../reducer';
import { Element } from 'react-scroll';
import routes from '../../static/routes';
import me from '../../asset/me.jpg';

class About extends Component{
    
    render(){
        console.log(this.props)
        return(
            <Element name={routes.ABOUT.to}> 
                <Container themeMode={this.props.themeMode}>
                    <Title>
                        About Me
                    </Title>
                    <ContainerFill>
                        <ContainerLeft>
                            <ImageContainer>
                                <Photo src={me}/>
                            </ImageContainer>
                        </ContainerLeft>
                        <ContainerRight>
                            <Menu>
                                <Item className={this.props.themeMode.active==='summary' ? 'active': null} onClick={()=>this.props.showContent('summary')}>
                                    Summary    
                                </Item>
                                <Item className={this.props.themeMode.active==='education' ? 'active': null} onClick={()=>this.props.showContent('education')}>
                                    Education    
                                </Item>
                                <Item className={this.props.themeMode.active==='experience' ? 'active': null} onClick={()=>this.props.showContent('experience')}>
                                    Experience    
                                </Item>
                            </Menu>
                            <Segment>
                                {this.props.themeMode.contentList.length===0&&<div>Hi! 😊</div>}
                                <Detail className={this.props.themeMode.contentList.length!==0 ? 'italic': null}>
                                    {this.props.themeMode.contentDetail}
                                </Detail>
                                <Lists>
                                    {Object.values(this.props.themeMode.contentList).map(content => (
                                        <List>
                                            <ContentWrap>
                                                <Institute href={content.link} > 
                                                    {content.institution}
                                                </Institute>            
                                                <Period>
                                                    {content.period}
                                                </Period>
                                            </ContentWrap>
                                            <ContentTitle>
                                                {content.title}
                                            </ContentTitle>
                                            <ContentDesc>
                                                {content.desc}
                                            </ContentDesc>
                                        </List>
                                    ))} 
                                </Lists>
                            </Segment>
                        </ContainerRight>
                    </ContainerFill>
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
    align-items: center;
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

const ImageContainer= styled.div`
    height: 40%;
    width: 45%;
    border: 1em solid #38c172;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        border: 0.5em solid #38c172;
        width: 35%;
        height: 55%;   
    }
`;
const Photo= styled.img`
    position:absolute;
    width: 45%;
    height: 40%;
    left: 35%;
    top: 38%;
    box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.5);
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        top: 30%;
        width: 35%;
        height: 55%;   
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

const Menu = styled.div`    
    width: 80%;
    padding-bottom: 0.5em;
    border-bottom: 2px solid rgba(56,193,144,0.5);
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 100%;
    }
`;
const Item = styled.a`
    padding: 0.5em 1.5em;
    cursor: pointer;
    transition: color .1s ease;
    &:hover {
        border-bottom: 2px solid rgba(56,193,144,1);
    }
    &.active{
        border-bottom: 2px solid rgba(56,193,144,1);
    }
`;

const Segment = styled.div`
    padding: 1em;
    width: 80%;
    line-height: 200%;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 90%;
        line-height: 150%; 
        overflow: auto; 
    }
`;
const Detail = styled.div`
    &.italic{
        font-style: italic;
    }
`;
const Lists= styled.ul`
    list-style: none;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        list-style: "►"; 
    }
`;
const List = styled.li`
    &:before {
        content: "►";
        left: 2em;
        position: absolute;
        color: rgba(56,193,144,1); 
    }
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        &:before {
            content: ""; 
        }
    }
`;
const ContentWrap= styled.div`
    display:flex;
    width:100%;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 90%;
        display:block;
    }
`;

const Institute= styled.a`
    width:60%;
    cursor: pointer;
    color: #528AAE;
    text-decoration: none;
    font-weight: bold;
`;
const Period= styled.div`
    width:40%;
    text-align:right;
    opacity:0.5;
    @media screen and (max-width: ${props => props.theme.screens.sm}) {
        width: 100%;
        text-align:left;
    }
`;
const ContentTitle= styled.div`
`;
const ContentDesc= styled.div`
    opacity:0.7;
`;

export default connect(
    state =>({themeMode: state}),{ showContent }
)(withTheme(About));