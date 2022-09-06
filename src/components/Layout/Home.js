import React from "react";
import "./Home.css";

import { images } from "../constants/Images";

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
          {images.map((image) => (
            <div className="img-section">
              <img
                src={require(`../../assets/${image.path}.jpg`)}
                className={`${image.className}`}
                alt="images"
              />

              {image.className === "landscape" ? (
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="landscapeHeart"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.92151 0.548275C4.70842 0.187612 5.55668 0 6.41669 0C7.27671 0 8.12496 0.187612 8.91188 0.548275C9.69838 0.908752 10.4049 1.43338 10.9946 2.08586C11.3542 2.48386 11.9791 2.48386 12.3388 2.08586C13.5309 0.766803 15.1746 1.16825e-05 16.9167 1.16825e-05C18.6587 1.16825e-05 20.3025 0.766803 21.4946 2.08586C22.6832 3.40101 23.3333 5.16163 23.3333 6.97573C23.3333 8.7899 22.6832 10.5505 21.4946 11.8656L14.2633 19.8668C12.8737 21.4045 10.4596 21.4045 9.07001 19.8668L1.83882 11.8656C1.24934 11.2134 0.787197 10.4453 0.47369 9.60785C0.160195 8.77042 0 7.87632 0 6.97573C0 6.07516 0.160195 5.1811 0.47369 4.34367C0.787197 3.50619 1.24934 2.7381 1.83882 2.08586C2.4285 1.43338 3.13502 0.908752 3.92151 0.548275Z"
                    fill="#EC6A5E"
                  />
                </svg>
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="heart"
                >
                  <path
                    d="M12.9569 5.9211L12.9569 5.92111C13.5151 6.53877 14.4849 6.53877 15.0431 5.92111C16.1463 4.70039 17.6579 4.00001 19.25 4.00001C20.8421 4.00001 22.3537 4.70039 23.4569 5.92111L23.8279 5.58586L23.4569 5.92112C24.5581 7.13947 25.1667 8.77876 25.1667 10.4757C25.1667 12.1728 24.5581 13.8121 23.4569 15.0303L23.4569 15.0303L16.2257 23.0316L16.5966 23.3668L16.2257 23.0316C15.0346 24.3496 12.9654 24.3496 11.7743 23.0316L11.4033 23.3668L11.7743 23.0316L4.5431 15.0303L4.54308 15.0303C3.99732 14.4265 3.5675 13.7131 3.27528 12.9325C2.98307 12.152 2.83333 11.3173 2.83333 10.4757C2.83333 9.63418 2.98307 8.79955 3.27528 8.01897L3.27528 8.01897C3.5675 7.23835 3.99732 6.525 4.54309 5.92112L4.5431 5.92111C5.08899 5.31708 5.74076 4.83391 6.46316 4.50281C7.18581 4.1716 7.96311 4 8.75002 4C9.53693 4 10.3142 4.1716 11.0369 4.50281C11.7593 4.83391 12.4111 5.31708 12.9569 5.9211Z"
                    fill="white"
                    fill-opacity="0.6"
                    stroke="#212325"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
