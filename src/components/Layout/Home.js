import React from "react";
import "./Home.css";

var today = new Date();
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Home = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-rows">
          <div className="grid-item1">
            <h1>Today</h1>
            <div
              style={{
                color: "#6F7378",
                fontFamily: "Cormorant Upright",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              {today.toLocaleDateString("en-US", options)}
            </div>
          </div>
          <div className="grid-item2">
            <h1>This week</h1>
            <p
              style={{
                color: "#6F7378",
                fontFamily: "Cormorant Upright",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              1 to 5 September, 2022
            </p>
          </div>
        </div>
        <div className="grid-item3">
          <img src={require("../../assets/1.jpg")} className="long" />
          <img src={require("../../assets/6.jpg")} className="medium" />
          <img src={require("../../assets/3.jpg")} className="landscape" />
          <img src={require("../../assets/2.jpg")} className="long" />
          <img src={require("../../assets/5.jpg")} className="medium" />
          <img src={require("../../assets/7.jpg")} className="landscape" />
          <img src={require("../../assets/8.jpg")} className="long" />
          <img src={require("../../assets/4.jpg")} className="medium" />
          <img src={require("../../assets/15.jpg")} className="landscape" />
          <img src={require("../../assets/10.jpg")} className="long" />
          <img src={require("../../assets/9.jpg")} className="medium" />
          <img src={require("../../assets/12.jpg")} className="landscape" />
          <img src={require("../../assets/13.jpg")} className="long" />

          
        </div>
      </div>
    </>
  );
};

export default Home;
