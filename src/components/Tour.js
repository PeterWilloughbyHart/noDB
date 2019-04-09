import React, { Component } from "react";
import axios from "axios";
import Submarine from "./Submarine";



class Tour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marineLife: [],
      id: 0
    };
  }


  componentDidMount() {
    this.collectData();
  }

  collectData() {
    axios.get("/api/animals").then(response => {
        this.setState({ marineLife: response.data })})
      .catch(err => console.log("error on get"));
  }

  // deleteSlide() {
  //   axios.delete(`/api/animals/${this.state.marineLife[this.state.id].id}`).then(response => {
  //     this.setState({marineLife: response.data, id: this.state.id === this.state.marineLife.length - 1 ? 0 : this.state.id})

  //   })
  //   .catch(err => console.log('error on delete'))
  // }




  lastSlide() {
    if (this.state.id > 0) {
      this.setState({ id: this.state.id - 1 });
    }
    console.log(this.state.id)
    
  }
  
  nextSlide() {
      this.setState({ id: (this.state.id + 1) % this.state.marineLife.length });
    console.log(this.state.id)
  }

  render() {
    let { marineLife, id } = this.state; // Destructering 4
    return (
      <div>
        <div className="tour_view_box">
          <main className="tour_view">
            
                <div  className="tour_slides">
                      {marineLife[0] ? ( <><img src={marineLife[id].image} alt="animal"/>
                      <div className="slide_text">
                        <h1>{marineLife[id].name}</h1>
                        <h3>{marineLife[id].lifeSpan}</h3>
                        <p>{marineLife[id].info}</p>
                        <h3>{marineLife[id].funFact}</h3>
                        <h3>Endangered? {marineLife[id].endangered}</h3>
                      </div></> ) : null}
                </div>
            <div className="tour_buttons">
              <button onClick={e => this.lastSlide()}>Travel Back</button>
              {/* <button onClick={e => this.deleteSlide()}>Delete</button> */}
              <button onClick={e => this.nextSlide()}>Travel Forward</button>
            </div>
          </main>
        </div>
        <div className="tour_div">
          <button className="home_button" onClick={e => this.props.homePage()}>
            Home
          </button>
        </div>
        <Submarine />
      </div>
    );
  }
}

export default Tour;
