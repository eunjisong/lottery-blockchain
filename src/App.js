import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import web3 from "./web3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { id: undefined };
  }

  componentDidMount() {
    web3.eth.getAccounts().then(id => this.setState({ id: id }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.id && this.state.id.length ? (
            <div>
              <p>your account :</p>
              <p>{this.state.id}</p>
              <p>Play Game</p>
            </div>
          ) : (
            <div>
              <p>You need MetaMask installed.</p>
              <a
                className="metamask"
                href="https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here to get MetaMask
              </a>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
