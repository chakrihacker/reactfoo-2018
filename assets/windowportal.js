import React from "react";
import ReactDOM from "react-dom";

class MyWindowPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.containerEl = document.createElement("div"); // STEP 1: create an empty div
    this.externalWindow = null;
  }

  componentDidMount() {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open(
      "",
      "",
      "width=600,height=400,left=200,top=200"
    );
    this.containerEl.style.background = "black";
    this.containerEl.style.color = "white";

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);

    this.externalWindow.document.title = "A React portal window";

    // update the state in the parent component if the user closes the
    // new window
    this.externalWindow.addEventListener("beforeunload", () => {
      this.props.closeWindowPortal();
    });
  }

  componentWillUnmount() {
    // This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by just closing the window
    this.externalWindow.close();
  }

  render() {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }
}

class PortalDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showWindowPortal: false
    };

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
    this.closeWindowPortal = this.closeWindowPortal.bind(this);
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.closeWindowPortal();
    });

    window.setInterval(() => {
      this.setState((state) => ({
        counter: state.counter + 1
      }));
    }, 1000);
  }

  toggleWindowPortal() {
    this.setState((state) => ({
      ...state,
      showWindowPortal: !state.showWindowPortal
    }));
  }

  closeWindowPortal() {
    this.setState({ showWindowPortal: false });
  }

  render() {
    return (
      <div>
        <h1 style={{ fontWeight: 400, color: "white" }}>
          Counter: {this.state.counter}
        </h1>
        <button
          onClick={this.toggleWindowPortal}
          style={{
            padding: "8px 16px",
            background: "crimson",
            color: "white",
            boarder: "none",
            fontSize: "inherit"
          }}
        >
          {this.state.showWindowPortal ? "Close the" : "Open a"} Portal
        </button>

        {this.state.showWindowPortal && (
          <MyWindowPortal closeWindowPortal={this.closeWindowPortal}>
            <h1>Counter in a portal: {this.state.counter}</h1>
            <p>Even though I render in a different window, I share state!</p>

            <button
              onClick={() => this.closeWindowPortal()}
              style={{
                padding: "8px 16px",
                background: "crimson",
                color: "white",
                boarder: "none",
                fontSize: "inherit"
              }}
            >
              Close me!
            </button>
          </MyWindowPortal>
        )}
      </div>
    );
  }
}
export default PortalDemo;
