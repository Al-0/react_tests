import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toogle
        </button>
        <Transition
          in={this.state.showBlock}
          mountOnEnter
          unmountOnExit
          timeout={1000}
          onEnter={() => console.log('On enter')}
          onEntering={() => console.log('On entering')}
          onEntered={() => console.log('On entered')}
          onExit={() => console.log('On exit')}
          onExiting={() => console.log('On exiting')}
          onExited={() => console.log('On exited')}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        {this.state.modalIsOpen && <Backdrop show />}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
