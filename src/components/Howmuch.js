import React, {Component} from "react";

class Howmuch extends Component {
    constructor() {
        super()

        this.state = {
            so: "so",
            color: "rgb(0,128,0)"
        }
    }

    more() {
        if (this.state.so < "soooooooooooooo") {
        this.setState({so: this.state.so + "o"})};
        if (this.state.so === "soooooooooooooo") {
            this.setState({color: "rgb(27,44,27,.3"});
        }
    }
    
    refresh() {
        this.setState({so: "so", color: "rgb(0,128,0)"})
    }


    render() {
        return(
            <div>
                <div className="So_much">
                <h1>How much do you love this website? I love this website {this.state.so} much.</h1>
                <button onClick={e => {
                    this.more()}}
                    style={{backgroundColor:this.state.color}}>More</button>

                <button onClick={e => {
                    this.refresh()}}>Refresh</button>
                
                </div>
            </div>
        )
    }
}

export default Howmuch;