import React, {Component} from 'react';
import VideoBox from "./VideoBox";


class Donate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            donation: 0,
            total: 0
        }
    }

    donation() {
        this.setState({donation : this.state.donation + 10})
    }

    submit() {
        this.setState({total : this.state.donation + this.state.total})
        this.setState({donation: 0})
    }

    render() {

        return(
            <div>
                <main className="about_main">
                <button className="home_button" onClick={e => this.props.homePage()}>Home
                </button>
                    <div className="donate_div">
                        <h1 className="donation">Donation: ${this.state.donation} </h1> <h1> Total Donations: ${this.state.total}</h1>
                        <button onClick={() => this.donation()}>Donate $10</button>
                        <button onClick={() => this.submit()} className="donation_submit">Submit</button>
                    </div>
                </main>
               <VideoBox />
            </div>
        )
    }

}

export default Donate;