import React, { Component } from "react";
import { Heading, Appear } from "spectacle";

export default class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount = () => {
    this.initializeSpeechSynthesis();
  };

  componentWillUnmount = () => {
    document.onkeydown = null;
  };

  initializeSpeechSynthesis = () => {
    const synth = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance();
    msg.text =
      "Are you kidding, you can't even write a function without google";
    document.onkeydown = (event = window.event) => {
      const charCode = event.keyCode || event.which;
      const charStr = String.fromCharCode(charCode);
      console.log(charCode);
      charCode === 38 && synth.speak(msg);
    };
    console.log(document.onkeydown);
  };

  render() {
    return (
      <div>
        <Appear>
          <Heading textColor={"white"} size={5}>
            Rockstar Ninja Developer
          </Heading>
        </Appear>
      </div>
    );
  }
}
