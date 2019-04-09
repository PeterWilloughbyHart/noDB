import React from "react";
import Submarine from "./Submarine";
import Howmuch from "./Howmuch";
import VideoBox from "./VideoBox";


function Home(props) {
  return (
    <div>
      <main>
        <div className="button_box">
          <button onClick={e => props.tourPage()}>Enter Raft</button>
          <button onClick={e => props.donatePage()}>Donate</button>
          <button onClick={e => props.aboutPage()}>About Us</button>
        </div>
        <Submarine />
      </main>
      <main className="who_main">
        <div className="who_div">
          <h1>Who We Are and What We Hope to do</h1>
          <p>SEAIT was founded in 2019 by Peter Hart in the hopes of spreading awareness about <br/> 
          the largest, yet often most uniformed about area of our planet. The importance it holds and the interesting species that live there. <br/>
          Through the entertaining medium that is a digital raft ride, we hope to bring to your attention something new, something to care about <br/>
          and something you'll want to share with your friends. </p>
        </div>
      </main>
      <VideoBox />
      <Howmuch />
    </div>
  );
}

export default Home;
