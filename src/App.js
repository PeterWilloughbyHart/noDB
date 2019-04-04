import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props) 

    this.state = {
      tab: 'Home'
    }
  }







  render() {


    return (
      <div className="App">


      <header className="main_header">
        <header className="inner_header">
          <header className="logo_header"><h1>SEA<span>IT</span><span id="Us"> A Tour of Our Oceans</span></h1></header>
        </header>
      </header>

      <main>
        <div className="button_box">
          <button>Enter</button>
          <button>About Us</button>
        </div>

        <div className="submarine_space">
          <div className="submarine">
            <div className="sub_window"></div>
          </div>
        </div>
      </main>


      </div>
    );
  }
}







export default App;
