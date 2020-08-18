import Typed from 'typed.js';
import styled,{withTheme} from 'styled-components';
import React from "react";

class Intro extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
          strings: strings,
          loop: true,
          loopCount: Infinity,
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 3000
      };
      this.typed = new Typed(this.el, options);
    }  
  
    render() {
      return (
            <Container>
                <span  style={{ whiteSpace: 'pre', dislpay: 'flex' }}
                ref={(el) => { this.el = el; }}/>
            </Container>
      );
    }
  }
  const Container= styled.div`
  position: relative;
  width: 100%;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.mono[4]};
  font-weigth: bold;
  margin-top: ${props => props.theme.margin['2']};
  font-size: ${props => props.theme.textSizes['5xl']};
  @media screen and (max-width: ${props => props.theme.screens.sm}) {
    font-size: ${props => props.theme.textSizes['xl']};
  }
`;
  export default withTheme(Intro);