import React from 'react';
import Background from '../images/bg.png';
import Component from 'react'

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + Background + ")"
};

class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
      </section>
    );
  }
}

export default Section;