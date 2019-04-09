import React from "react";

const Aboutbutton = props => {
  return (
    <div>
      <main className="about_main">
        <button className="home_button" onClick={e => props.homePage()}>
          Home
        </button>
        <div className="about_div">
          <h1>About SEAIT. The site, and the company of people behind it</h1>
          <p>SEAIT or Sea-It, is globally recognized as one of the most successful awareness and <br/>
          conservation initiatives on the stage. Together, the program and it's donors have raised over 5 billion <br/>
          dollars towards it's efforts. The Ocean is now forever intact thanks to this. We will be closing <br/>
          down the site and organization next month. Thank you for your help. We really appricate it, dawg. </p>
        </div>
      </main>
    </div>
  );
};

export default Aboutbutton;
