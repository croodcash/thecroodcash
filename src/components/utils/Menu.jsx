import React,{ Component } from "react";
import styled from 'styled-components';
import {Link } from 'react-scroll';
import routes from '../../static/routes';

class Menu extends Component{
    render(){
        return(           
            <Container isHome={this.props.isHome} themeMode={this.props.themeMode}>
                {Object.values(routes).map(route => (
                    <Link
                        key={route.to}
                        to={route.to}
                        spy
                        smooth
                        duration={500}
                        href={route.to}
                    >
                    {route.text}
                    </Link>
                ))}
            </Container>
        );
    }
}
const Container= styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props=>!props.isHome ? `column`:`row`};
    justify-content: center;
    align-item: center;
    width: 100%;
    a {
        position: relative;
        margin: 0.5rem;
        cursor: pointer;
        color: ${props => props.themeMode.textColor};
        text-decoration: none;
        font-weight: bold;
        ${props=>!props.isHome ? `margin:auto;`:``}
      }
      .active {
          color: #38c172;
      }
      a:before {
          content:"";
          border-bottom: 2px dotted #38c172;
          position: absolute;
          width: 100%;
          height: 100%;
          visibility: hidden;
          -webkit-transform: scaleX(0);
          transform: scaleX(0);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }
      a:hover:before {
          visibility: visible;
          -webkit-transform: scaleX(1);
          transform: scaleX(1);
      }
`;
export default Menu;