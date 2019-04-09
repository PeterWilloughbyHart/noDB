import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Aboutbutton from "./components/Aboutbutton";
import Tour from "./components/Tour";
import RestrictedAccess from "./components/RestrictedAccess";
import ApprovedAccess from "./components/ApprovedAccess";
import Donate from "./components/Donate";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "Home"
    };
  }

  homePage() {
    this.setState({ page: "Home" });
  }

  aboutPage() {
    this.setState({ page: "About" });
  }

  tourPage() {
    this.setState({ page: "Tour" });
  }

  donatePage() {
    this.setState({ page: "Donate" });
  }

  accessPage() {
    this.setState({ page: "Access" });
  }

  passwordCheck(input) {
    console.log(input);
    if (input === "Dolphin" || input === "Whale") {
      this.setState({ page: "Approved" }, () => {
        console.log(this.state.page);
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="main_header">
          <header className="inner_header">
            <img
              src="https://i.postimg.cc/gJ4mJqdY/eye.png"
              height="270x"
              width="270px"
              alt="SIlogo"
            />
            <header className="logo_header">
              <h1>
                SEA<span>IT</span>
                <span id="a_tour_of"> A Tour of Our Oceans</span>
              </h1>
            </header>
          </header>
        </header>


        {this.state.page === "Home" ? (
          <Home
            aboutPage={this.aboutPage.bind(this)}
            tourPage={this.tourPage.bind(this)}
            donatePage={this.donatePage.bind(this)}
          />
        ) : this.state.page === "About" ? (
          <Aboutbutton homePage={this.homePage.bind(this)} />
        ) : this.state.page === "Tour" ? (
          <Tour homePage={this.homePage.bind(this)} />
        ) : this.state.page === "Donate" ? ( <Donate homePage={this.homePage.bind(this)}/>)
          : this.state.page === "Access" ? (
          <RestrictedAccess
            homePage={this.homePage.bind(this)}
            passwordCheck={this.passwordCheck.bind(this)}
          />
        ) : this.state.page === "Approved" ? (
          <ApprovedAccess homePage={this.homePage.bind(this)} />
        ) : (
          <p>this is an error</p>
        )}


        <footer>
          <div className="footer_links">
            <h5>©SeaIt 2019</h5>
            <h5><a href="https://www.bestfunnies.com/wp-content/uploads/2012/08/Funny-Fish-09.jpg">Sponsors</a></h5>
            <h5 onClick={e => this.donatePage()}>Donate</h5>
            <h5><a href="https://www.instagram.com/seait_oceantour/?hl=en">Social Media</a></h5>
            <h5 onClick={e => this.accessPage()}>Tour Guide Access</h5>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
