import "./CheckOurEvents.css";
import React, { useState } from 'react';
import Quiz from "../../../Assets/CheckOurEvents/quiz.jpg";

function CheckEvents() {
  return (
    <>
      <div className="CheckOurEvents-main">
        <div className="CheckOurEvents-main_container">
          <h2 className="CheckOurEvents-heading">
            Check out our <b className="CheckOurEvents-subheading"> EVENTS </b></h2>
          <div className="CheckOurEvents-events">
            <Session title="Quiz"
              status="Venue: D2C"
              date="Date: 29-January-2022"
              image={Quiz} />
              {/* <Session title="Vehicle Design Competition"
              status=""
              date="Date: 7-Febuary-2022"
              image={DesignEvent}/> */}

            {/* <Session title="Understanding Transmission"
          status="online"
          date="24th-January-2021"
          image={poster}/> */}

          </div>
          <div className="CheckOurEvents-showmore">
            {/* <p className="CheckOurEvents-heading1">
            NO EVENTS <b className="CheckOurEvents-subheading1"> AS OF NOW </b> 
            <FontAwesomeIcon id="CheckOurEvents-button1" className="CheckOurEvents-icon" icon={faAngleDoubleDown} />{" "}
          </p>*/}
          </div>
        </div>
      </div>
    </>
  );
}

function Session(props) {
  return (
    <>
      <div className="CheckOurEvents-card">
        <img className="CheckOurEvents-image" src={props.image} alt="Avatar" />
        <div className="CheckOurEvents-container">
          <h2>
            <b>{props.title}</b>
          </h2>
          <p>
            {props.status}
            <br />
            {props.date}  
          </p>

          {/* <div className="CheckOurEvents-register"></div> */}
          <a className="CheckOurEvents-register"
          href="https://dare2compete.com/p/quiz-on-wheelsautomotive-quiz-national-institute-of-technology-nit-kurukshetra-256604?lb=rt7C3ad/"
          target="_blank">
            <button
              id="event-register"

            >
              Register Now

            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default CheckEvents