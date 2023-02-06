import React from 'react';
import { Component } from 'react';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }  
  }

  openModal = () => {
    let boo = !(this.state.open)
    this.setState({
      open: boo
    })
  }

  closeModal = () => {
    let boo = !(this.state.open)
    this.setState({
      open: boo
    })
  }
  
  render() {
    const { open } = this.state;

    return (
      <div className="App">
        <button onClick={this.openModal} className="open-modal-btn">✨ Open modal</button>
        {open && (
          <div className="overlay">
            <div className="modal">
              <svg onClick={this.closeModal} height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
              <img alt="gif" src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
            </div>
          </div> 
        )}
      </div>
    );
  }
}

export default App;