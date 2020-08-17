import Typed from 'typed.js';
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
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }  
  
    render() {
      return (
        <div className="intro">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
        </div>
      );
    }
  }
  
  export default Intro;