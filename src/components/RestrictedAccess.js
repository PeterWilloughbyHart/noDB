import React from "react";

const RestrictedAccess = props => {
  return (
    <div>
      <main className="restricted_main">
        <button className="home_button" onClick={e => props.homePage()}>
          Home
        </button>
        <div className="restricted_div">
          <h1>SEAIT Tour Guide Access: </h1>
          <input className="input"
            placeholder="Password Entry"
            onChange={e => props.passwordCheck(e.target.value)}
          />
          <h2>If applicable, please enter password</h2>
        </div>
      </main>
    </div>
  );
};

export default RestrictedAccess;
