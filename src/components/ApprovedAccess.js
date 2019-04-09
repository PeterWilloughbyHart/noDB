import React from "react";
import TourEdit from "./TourEdit";

const ApprovedAccess = props => {
  return (
    <div>
      <main className="approved_main">
        <button className="home_button" onClick={e => props.homePage()}>
          Home
        </button>
        <div className="approved_div">
          <h1>Welcome In!</h1>
          <h3>Here, you will be able to edit the post that appear in the tour</h3>
          <div className="input_crud">
            <input type="text" placeholder="View Tour Feature" />
            <input type="text" placeholder="Edit Tour Feature" />
            <input type="text" placeholder="Add Tour Feature" />
            <input type="text" placeholder="Delete Tour Feature" />
          </div>
        </div>
      </main>
        <div className="logo_streamer">
          <img src="https://i.postimg.cc/gJ4mJqdY/eye.png" height="320px" width="320px" alt="SIlogo"/>
          <img src="https://i.postimg.cc/gJ4mJqdY/eye.png" height="320px" width="320px" alt="SIlogo"/>
          <img src="https://i.postimg.cc/gJ4mJqdY/eye.png" height="320px" width="320px" alt="SIlogo"/>
          <img src="https://i.postimg.cc/gJ4mJqdY/eye.png" height="320px" width="320px" alt="SIlogo"/>
          <img src="https://i.postimg.cc/gJ4mJqdY/eye.png" height="320px" width="320px" alt="SIlogo"/>
        </div>
      <TourEdit />
    </div>
  );
};

export default ApprovedAccess;
